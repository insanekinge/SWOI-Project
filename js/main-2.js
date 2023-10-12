document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
  });
});

// document.getElementById(".container")
//   .addEventListener('wheel', function(event) {
//     if (event.deltaMode == event.DOM_DELTA_PIXEL) {
//       var modifier = 1;
//       // иные режимы возможны в Firefox
//     } else if (event.deltaMode == event.DOM_DELTA_LINE) {
//       var modifier = parseInt(getComputedStyle(this).lineHeight);
//     } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
//       var modifier = this.clientHeight;
//     }
//     if (event.deltaY != 0) {
//       // замена вертикальной прокрутки горизонтальной
//       this.scrollLeft += modifier * event.deltaY;
//       event.preventDefault();
//     }
//   });