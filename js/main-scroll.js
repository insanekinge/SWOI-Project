
function mainTitleScroll() {
    const mainContainer = document.getElementById('main-container');
    const descriptionContainer = document.getElementById('description-container');
    const mainImgs = mainContainer.querySelectorAll('.main-title__img');
    const descItems = descriptionContainer.querySelectorAll('.description__scroll');
  
    let currentMainIndex = 0;
    let currentDescIndex = 0;
    let mlMain = 0;
    let mlDesc = 0;
  
    var lastMainStep = 0
    var lastDescStep = 0

    let scroll = true;
    let scrollTimeout;
  
    window.addEventListener('wheel', function (e) {
      if (scroll) {
        clearTimeout(scrollTimeout);
        scroll = false;
  
        let nextMainElement = mainImgs[currentMainIndex + 1];
        let nextDescElement = descItems[currentDescIndex + 1];
        let prevMainElement = mainImgs[currentMainIndex - 1];
        let prevDescElement = descItems[currentDescIndex - 1];
        let mainStep = 0;
        let descStep = 0;
  
        if (nextMainElement) {
          mainStep = nextMainElement.getBoundingClientRect().x - window.pageXOffset - 20;
        } else {
          mainStep = 0;
        }
        if (nextDescElement) {
          descStep = nextDescElement.getBoundingClientRect().x - window.pageXOffset - 20;
        } else {
          descStep = 0;
        }
  
        if (e.deltaY >= 0) {
            // 'scroll down'
            if (nextMainElement) {
                currentMainIndex += 1;
                mlMain += mainStep;
                if (!mainImgs[currentMainIndex + 1 + 1] && nextMainElement) {
                lastMainStep = mainStep
                }
                mainContainer.style.transform = `translate(-${mlMain}px,0)`;
            }
            if (nextDescElement) {
                currentDescIndex += 1;
                mlDesc += descStep;
                if (!descItems[currentDescIndex + 1 + 1] && nextDescElement) {
                lastDescStep = descStep
                }
                descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
            }
        }
        if (e.deltaY <= 0) {
            // 'scroll up'
            if (prevMainElement && prevMainElement !== mainImgs[0]) {
                currentMainIndex -= 1
                mlMain -= mainStep;
                if (!nextMainElement) {
                    mlMain -= lastMainStep;
                }
                mainContainer.style.transform = `translate(-${mlMain}px,0)`;
            } else {
                currentMainIndex -= 1
                mlMain = 0; // Установка в 0, если предыдущий элемент - первый элемент
                mainContainer.style.transform = `translate(-${mlMain}px,0)`;
            }
            if (prevDescElement && prevDescElement !== descItems[0]) {
                currentDescIndex -= 1
                mlDesc -= descStep;
                if (!nextDescElement) {
                mlDesc -= lastDescStep;
                }
                descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
            } else {
                currentDescIndex -= 1
                mlDesc = 0; // Установка в 0, если предыдущий элемент - первый элемент
                descriptionContainer.style.transform = `translate(-${mlDesc},0)`;
            }
        }
        
  
        scrollTimeout = setTimeout(function () {
          scroll = true;
        }, 1500);
      }
    });
  }
  
  mainTitleScroll();
