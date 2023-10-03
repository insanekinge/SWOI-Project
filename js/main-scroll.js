const mainContainer = document.getElementById('main-container');
const descriptionContainer = document.getElementById('description-container');

let mlMain = 0;
let mlDesc = 0;
window.addEventListener('wheel', function (e) {
  if (scroll) {
    const nextMainElement = mainContainer.querySelector('.main-title__img:not(.active)');
    const nextDescElement = descriptionContainer.querySelector('.description__scroll:not(.active)');
    const mainStep = nextMainElement.getBoundingClientRect().left - window.innerWidth;
    const descStep = nextDescElement.getBoundingClientRect().left - window.innerWidth;

    if (e.deltaY < 0) {
      // 'scroll up'
      mainContainer.style.transform = `translate(-${mlMain}px,0)`;
      descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      mlMain -= mainStep;
      mlDesc -= descStep;
    }
    if (e.deltaY > 0) {
      // 'scroll down'
      mainContainer.style.transform = `translate(-${mlMain}px,0)`;
      descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      mlMain += mainStep;
      mlDesc += descStep;
    }
  }
});

// const mainContainer = document.getElementById('main-container')
// const descriptionContainer = document.getElementById('description-container')

// let mlMain = 0;
// let mlDesc = 0;
// window.addEventListener('wheel', function (e) {
//     if (scroll) {
//         // var content = document.querySelector('body');
//         var speedMain = 300;
//         var speedDesc = 600;
//         if (e.deltaY < 0) {
//             // 'scroll up'
//             mainContainer.style.transform = `translate(-${mlMain}px,0)`;
//             descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
//             mlMain -= speedMain
//             mlDesc -= speedDesc
//         }
//         if (e.deltaY > 0) {
//             // 'scroll down'
//             mainContainer.style.transform = `translate(-${mlMain}px,0)`;
//             descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
//             mlMain += speedMain
//             mlDesc += speedDesc
//         }
//     }
// });

// const mainContainer = document.getElementById('main-container')
//       const descriptionContainer = document.getElementById('description-container')
//       const descriptionScroll = document.querySelectorAll('.description__scroll')
//       let counterdescription = 0
//       // mainContainer.scrollIntoView();
//       let mlMain = 0;
//       let mlDesc = 0;
//       window.addEventListener('wheel', function (e) {

//         const rect = descriptionScroll[counterdescription].getBoundingClientRect();
//         const distanceFromLeft = rect.left + window.scrollX;

//         console.log(distanceFromLeft)
//           if (scroll) {
//               // var content = document.querySelector('body');
//               var speedMain = 300;
//               var speedDesc = 600;
//               if (e.deltaY < 0) {
//                   // 'scroll up'
//                   mainContainer.style.transform = `translate(-${mlMain}px,0)`;
//                   descriptionContainer.style.transform = `translate(${distanceFromLeft}px,0)`;
//                   mlMain -= speedMain
//                   mlDesc -= speedDesc
//               }
//               if (e.deltaY > 0) {
//                   // 'scroll down'
//                   mainContainer.style.transform = `translate(-${mlMain}px,0)`;
//                   descriptionContainer.style.transform = `translate(-${distanceFromLeft}px,0)`;
//                   mlMain += speedMain
//                   mlDesc += speedDesc
//               }
//           }
//       });
