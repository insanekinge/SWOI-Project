function animateTitles() {
  const title = document.querySelector('.main__title');
  const titleNext = document.querySelector('.main__title-next');
  const prevButton = document.querySelector('.main__button-prev');
  const nextButton = document.querySelector('.main__button-next');

  // Добавляем обработчики событий для кнопок
  prevButton.addEventListener('click', () => {
    title.classList.remove('slide-in');
    titleNext.classList.remove('slide-in');
  });

  nextButton.addEventListener('click', () => {
    title.classList.add('slide-out');
    titleNext.classList.add('slide-out');
  });

  // Добавляем классы для начальной анимации при загрузке страницы
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      title.classList.add('slide-in');
      titleNext.classList.add('slide-in');
    }, 1200);
  });
}



animateTitles();