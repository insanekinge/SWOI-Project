// function changeScale() {
//   // Получаем значение прокрутки страницы
//   let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//   // Получаем ширину окна браузера
//   let windowWidth = window.innerWidth;

//   // Проходимся по всем элементам с классом "project-item__image-pic"
//   let elements = document.querySelectorAll(".project-item__image-pic");
//   for (let i = 0; i < elements.length; i++) {
//     // Получаем позицию элемента относительно правой границы экрана
//     let elementOffsetRight = elements[i].getBoundingClientRect().right;

//     let elementWidth = elements[i].offsetWidth;

//     let elementCenter = elementOffsetRight - elementWidth / 2;

//     if(window.innerWidth < 1024) {
//       if (elementCenter < 0) {
//         elements[i].style.transform = "scale(0.5)";
//       }
//       if (elementCenter > windowWidth) {
//         elements[i].style.transform = "scale(0.5)";
//       } 
//       if (elementCenter < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(1)";
//       } else if ((elementCenter / 2) < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(0.75)";
//       } else if ((elementCenter / 3) < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(0.6)";
//       }
//     } else {
//       if (elementCenter < 0) {
//         elements[i].style.transform = "scale(1)";
//       }
//       if (elementCenter > windowWidth) {
//         elements[i].style.transform = "scale(1)";
//       } 
//       if (elementCenter < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(1.5)";
//       } else if ((elementCenter / 2) < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(1.25)";
//       } else if ((elementCenter / 3) < windowWidth && elementCenter > 0) {
//         elements[i].style.transform = "scale(1.1)";
//       }
//     }
//   }
// }

// function allProjectsLocomotiveScroll() {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     direction: 'horizontal'  // Set the scrolling direction to horizontal
//   });
  
//   changeScale()
//   // Добавляем обработчик события прокрутки страницы через Locomotive Scroll
//   scroll.on("scroll", function() {
//     // Вызываем функцию changeScale для изменения значений "scale"
//     changeScale();
//   });
// }

// setTimeout(function(){
//   allProjectsLocomotiveScroll();
// }, 1500)