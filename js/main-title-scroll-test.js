mainTitleScroll();
changeScale()

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

function mainTitleScroll() {
  const mainContainer = document.getElementById('main-container');
  const descriptionContainer = document.getElementById('description-container');

  let mlMain = 0;
  let mlDesc = 0;

  let speedMain = 100
  let speedDesc = 200


  window.addEventListener('wheel', function (e) {
    if (scroll) {


      if (e.deltaY >= 0) {
        // 'scroll down'

        mlMain += speedMain
        mlDesc += speedDesc;
        
        if (mlMain > mainContainer.offsetWidth - window.innerWidth) {
          mlMain = mainContainer.offsetWidth - window.innerWidth;
        }
        if (mlDesc > descriptionContainer.offsetWidth - window.innerWidth) {
          mlDesc = descriptionContainer.offsetWidth - window.innerWidth;
        }

        mainContainer.style.transform = `translate(-${mlMain}px,0)`;
        descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      }
      if (e.deltaY <= 0) {
        // 'scroll up'
        mlMain -= speedMain
        mlDesc -= speedDesc;
        
        if (mlMain < 0) {
          mlMain = 0;
        }
        if (mlDesc < 0) {
          mlDesc = 0;
        }


        mainContainer.style.transform = `translate(-${mlMain}px,0)`;
        descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
      }

      changeScale()
    }
  });

  // Обработчик события начала касания
  window.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
  });

  // Обработчик события окончания касания
  window.addEventListener('touchend', function (event) {
    var endX = event.changedTouches[0].clientX;
    var endY = event.changedTouches[0].clientY;

    // Вычисляем разницу между начальными и конечными координатами
    var diffX = startX - endX;
    var diffY = startY - endY;

    // Проверяем, был ли свайп вправо или влево
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (scroll) {
        if (diffX > 0) {
            // Свайп влево
            swipeLeft();
          } else {
            // Свайп вправо
            swipeRight();
        }
        changeScale()
          
      }
    }
    
  });

  // Функция для обработки свайпа влево
  function swipeLeft() {
    
    mlMain += speedMain
    mlDesc += speedDesc;

    if (mlMain > mainContainer.offsetWidth - window.innerWidth) {
      mlMain = mainContainer.offsetWidth - window.innerWidth;
    }
    if (mlDesc > descriptionContainer.offsetWidth - window.innerWidth) {
      mlDesc = descriptionContainer.offsetWidth - window.innerWidth;
    }

    mainContainer.style.transform = `translate(-${mlMain}px,0)`;
    descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
  }

  // Функция для обработки свайпа вправо
  function swipeRight() {

    mlMain -= speedMain
    mlDesc -= speedDesc;

    if (mlMain < 0) {
      mlMain = 0;
    }
    if (mlDesc < 0) {
      mlDesc = 0;
    }

    mainContainer.style.transform = `translate(-${mlMain}px,0)`;
    descriptionContainer.style.transform = `translate(-${mlDesc},0)`;
  }
}
