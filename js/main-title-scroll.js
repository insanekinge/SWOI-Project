
function changeScale() {
  // Получаем значение прокрутки страницы
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Получаем высоту окна браузера
  let windowWidth = window.innerWidth;

  // Проходимся по всем элементам с классом "project-item__image-pic"
  let elements = document.querySelectorAll(".main-title__img-pic");
  for (let i = 0; i < elements.length; i++) {
    // Получаем позицию элемента относительно верхней границы экрана
    let elementOffsetTop = elements[i].getBoundingClientRect().top;

    let elementHeight = elements[i].offsetHeight;

    let elementCenter = elementOffsetTop + elementHeight / 2;

    if (elementCenter < 0) {
      elements[i].style.transform = "scale(0.5)";
    }
    if ( elementCenter > windowWidth) {
      elements[i].style.transform = "scale(0.5)";
    } 

    if (elementCenter < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(1)";
    } else if ((elementCenter / 2) < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(0.75)";
    } else if ((elementCenter / 3) < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(0.6)";
    }
  }
}

function mainLocomotiveScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
  });
  
  // changeScale()
  // Добавляем обработчик события прокрутки страницы через Locomotive Scroll
  scroll.on("scroll", function() {
    // Вызываем функцию changeScale для изменения значений "scale"
    // changeScale();
  });
}

setTimeout(function(){
  mainLocomotiveScroll();
}, 1500)

