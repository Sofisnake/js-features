(() => {
    let playing = true,
      activeHole = 1,
      score = 0,
      misses = 0;
  
    // Получение элементов для отображения статистики
    const scoreElement = document.getElementById('dead');
    const missesElement = document.getElementById('lost');
  
    // Функция для получения элемента лунки по индексу
    const getHole = index => document.getElementById(`hole${index}`);
  
    // Функция для деактивации лунки
    const deactivateHole = index => getHole(index).className = 'hole';
  
    // Функция для активации лунки
    const activateHole = index => getHole(index).className = 'hole hole_has-mole';
  
    // Функция для обработки кликов на лунки
    const onClickHole = event => {
      if (!playing) return;
  
      if (event.target.classList.contains('hole_has-mole')) {
        score += 1;
        scoreElement.textContent = score;
        if (score >= 10) {
          alert('Поздравляем! Вы победили!');
          resetGame();
        }
      } else {
        misses += 1;
        missesElement.textContent = misses;
        if (misses >= 5) {
          alert('Игра окончена. Вы проиграли!');
          resetGame();
        }
      }
    };
  
    // Функция для сброса игры
    const resetGame = () => {
      score = 0;
      misses = 0;
      scoreElement.textContent = score;
      missesElement.textContent = misses;
      holes.forEach(hole => hole.classList.remove('hole_has-mole'));
      clearInterval(moleTimer);
      playing = true;
      startGame();
    };
  
    // Устанавливаем обработчики кликов для всех лунок
    const holes = Array.from(document.querySelectorAll('.hole'));
    holes.forEach(hole => hole.addEventListener('click', onClickHole));
  
    // Функция для запуска игры
    const startGame = () => {
      const moleInterval = 1000; // Интервал появления кротов
      const moleDuration = 800;  // Длительность появления крота
  
      const showRandomMole = () => {
        const randomIndex = Math.floor(1 + Math.random() * 9);
        const hole = getHole(randomIndex);
  
        hole.classList.add('hole_has-mole');
        setTimeout(() => {
          hole.classList.remove('hole_has-mole');
        }, moleDuration);
      };
  
      // Запускаем цикл появления кротов
      moleTimer = setInterval(showRandomMole, moleInterval);
    };
  
    startGame();
  })();
  