
function changeScale() {
  // Получаем значение горизонтальной прокрутки страницы
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Получаем ширину окна браузера
  let windowWidth = window.innerWidth;

  // Проходимся по всем элементам с классом "main-title__img-pic"
  let elements = document.querySelectorAll(".main-title__img-pic");
  for (let i = 0; i < elements.length; i++) {
    // Получаем позицию элемента относительно левой границы экрана
    let elementOffsetLeft = elements[i].getBoundingClientRect().left;

    let elementWidth = elements[i].offsetWidth;

    let elementCenter = elementOffsetLeft + (elementWidth / 2);

    if (elementCenter < 0) {
      elements[i].style.transform = "scale(0.5)";
    }
    if (elementCenter > windowWidth) {
      elements[i].style.transform = "scale(0.5)";
    }

    if (elementCenter < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(1)";
    } else if ((elementCenter / 4) < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(0.5)";
    } else if ((elementCenter / 2) < windowWidth && elementCenter > 0) {
      elements[i].style.transform = "scale(0.75)";
    }
  }
}


function mainLocomotiveScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.02,
    direction: 'horizontal',
    mobile: {
      breakpoint: 0,
      smooth: true,
      lerp: 0.02,
      direction: "horizontal"
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      lerp: 0.02,
      direction: "horizontal"
    },
  });
  
  changeScale()
  scroll.on("scroll", function() {
    changeScale();
  });
}

window.addEventListener('DOMContentLoaded', function() {
  const wefwefwef = document.getElementById('description-skin')
  const wefwefwef2 = document.getElementById('main-skin')

  wefwefwef.style.width = `${wefwefwef.offsetWidth / 1.75 }px`
  wefwefwef2.style.width = `${wefwefwef.offsetWidth / 1.7 }px`

  mainLocomotiveScroll();
})

setTimeout(function(){
}, 1500)
