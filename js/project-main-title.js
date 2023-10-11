// Получаем ссылки на элементы
const prevButton = document.querySelector('.main__button-prev');
const nextButton = document.querySelector('.main__button-next');
const title = document.querySelector('.main__title');
const titleNext = document.querySelector('.main__title-next');

// Добавляем обработчики событий для кнопок
prevButton.addEventListener('click', () => {
  title.classList.add('slide-left');
  titleNext.classList.add('slide-left');
});

nextButton.addEventListener('click', () => {
  title.classList.add('slide-left');
  titleNext.classList.add('slide-left');
});

// Добавляем обработчик события окончания анимации
title.addEventListener('animationend', () => {
  title.classList.remove('slide-left');
});

titleNext.addEventListener('animationend', () => {
  titleNext.classList.remove('slide-left');
});