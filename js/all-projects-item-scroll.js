
function projectsTitleScroll() {
  function changeScale() {
    // Получаем значение прокрутки страницы
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Получаем высоту окна браузера
    let windowHeight = window.innerHeight;
  
    // Проходимся по всем элементам с классом "project-item__image-pic"
    let elements = document.querySelectorAll(".project-item__image-pic");
    for (let i = 0; i < elements.length; i++) {
      // Получаем позицию элемента относительно верхней границы экрана
      let elementOffsetTop = elements[i].getBoundingClientRect().top;
  
      let elementHeight = elements[i].offsetHeight;
  
      let elementCenter = elementOffsetTop + elementHeight / 2;
  
      if (elementCenter < 0) {
        elements[i].style.transform = "scale(0.5)";
      }
      if ( elementCenter > windowHeight) {
        elements[i].style.transform = "scale(0.5)";
      } 

      if (elementCenter < windowHeight && elementCenter > 0) {
        elements[i].style.transform = "scale(1)";
      } else if ((elementCenter / 2) < windowHeight && elementCenter > 0) {
        elements[i].style.transform = "scale(0.75)";
      } else if ((elementCenter / 3) < windowHeight && elementCenter > 0) {
        elements[i].style.transform = "scale(0.6)";
      }
    }
  }

  function allProjectsLocomotiveScroll() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.02
    });
    
    changeScale()
    // Добавляем обработчик события прокрутки страницы через Locomotive Scroll
    scroll.on("scroll", function() {
      // Вызываем функцию changeScale для изменения значений "scale"
      changeScale();
    });
  }
  
  allProjectsLocomotiveScroll();
  
}

document.addEventListener('DOMContentLoaded', function() {
  projectsTitleScroll();
});
