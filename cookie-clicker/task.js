// Получаем элементы из HTML
const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

// Изначальное значение счётчика и размер печеньки
let counter = 0;
let sizeFlag = true; // Флаг для чередования размеров

// Функция для обновления счётчика и размера печеньки
function handleClick() {
    // Увеличиваем значение счётчика
    counter += 1;
    counterElement.textContent = counter;

    // Чередуем размеры печеньки
    if (sizeFlag) {
        cookieElement.style.width = '250px';
        cookieElement.style.height = '250px';
    } else {
        cookieElement.style.width = '200px';
        cookieElement.style.height = '200px';
    }
    sizeFlag = !sizeFlag; // Переключаем флаг
}

// Добавляем обработчик события клика на печеньку
cookieElement.addEventListener('click', handleClick);
