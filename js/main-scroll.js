const mainContainer = document.getElementById('main-container');
const descriptionContainer = document.getElementById('description-container');
const mainImgs = mainContainer.querySelectorAll('.main-title__img')
const descItems = descriptionContainer.querySelectorAll('.description__scroll')

let currentMainIndex = 0
let currentDescIndex = 0
let mlMain = 0;
let mlDesc = 0;

window.addEventListener('wheel', function (e) {
  if (scroll) {
    let nextMainElement = mainImgs[currentMainIndex + 1];
    let nextDescElement = descItems[currentDescIndex + 1];

    const mainStep = nextMainElement ? nextMainElement.getBoundingClientRect().x - window.pageXOffset - 20 : 0;
    const descStep = nextDescElement ? nextDescElement.getBoundingClientRect().x - window.pageXOffset - 20 : 0;

    if (e.deltaY < 0) {
      // 'scroll up'
      if (currentMainIndex - 1 > 0) {
        currentMainIndex -= 1
        mlMain -= mainStep;
        mainContainer.style.transform = `translate(-${mlMain}px,0)`;
      } else  {
        mlMain -= mainStep;
        mainContainer.style.transform = `translate(0px,0)`;
      }
      if (currentDescIndex - 1 > 0) {
        currentDescIndex -= 1
        mlDesc -= descStep;
        descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      } else {
        mlDesc -= descStep;
        descriptionContainer.style.transform = `translate(0px,0)`;
      }
    }
    if (e.deltaY >= 0) {
      // 'scroll down'
      if (nextMainElement) {
        currentMainIndex += 1;
        mlMain += mainStep;
        mainContainer.style.transform = `translate(-${mlMain}px,0)`;
      }
      if (nextDescElement) {
        currentDescIndex += 1;
        mlDesc += descStep;
        descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      }
    }
  }
});
