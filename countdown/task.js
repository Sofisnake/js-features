// Получаем элемент таймера из HTML
const timerElement = document.getElementById('timer');

// Устанавливаем стартовое значение таймера (в секундах)
let timeLeft = parseInt(timerElement.textContent, 10);

// Функция для обновления таймера
function updateTimer() {
    // Уменьшаем значение времени на 1
    timeLeft -= 1;

    // Обновляем текст в элементе таймера
    timerElement.textContent = timeLeft;

    // Проверяем, если время истекло
    if (timeLeft <= 0) {
        // Выводим уведомление
        alert('Вы победили в конкурсе!');
        // Останавливаем таймер
        clearInterval(timerInterval);
    }
}

// Устанавливаем интервал обновления таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
