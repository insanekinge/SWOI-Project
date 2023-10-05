projectsTitleScroll();

function projectsTitleScroll() {
  const projectsContainer = document.getElementById('projects-container');
  const projectsImgs = projectsContainer.querySelectorAll('.project-item');

  let currentProjectsIndex = 0;
  let mlProjects = 0;

  var lastProjectsStep = 0;

  let scroll = true;
  let scrollTimeout;

  let nextProjectsElement = null;
  let prevProjectsElement = null;
  let projectsStep = 0;
  
  projectsImgs.forEach((img, index) => {
    if (index === currentProjectsIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
    if (index === currentProjectsIndex + 1) {
      img.classList.add('next-active');
    } else {
      img.classList.remove('next-active');
    }
    if (index === currentProjectsIndex - 1) {
      img.classList.add('pre-active');
    } else {
      img.classList.remove('pre-active');
    }
  });

  window.addEventListener('wheel', function (e) {
    if (scroll) {
      clearTimeout(scrollTimeout);
      scroll = false;

      const headerHeight = document.querySelector('.header').getBoundingClientRect().height

      nextProjectsElement = projectsImgs[currentProjectsIndex + 1];
      prevProjectsElement = projectsImgs[currentProjectsIndex - 1];

      if (nextProjectsElement) {
        projectsStep = nextProjectsElement.getBoundingClientRect().y - window.pageYOffset - headerHeight - 15;
      } else {
        projectsStep = 0;
      }
      if (e.deltaY >= 0) {
        // 'scroll down'
        if (nextProjectsElement) {
          currentProjectsIndex += 1;
          mlProjects += projectsStep;
          if (!projectsImgs[currentProjectsIndex + 1 + 1] && nextProjectsElement) {
            lastProjectsStep = projectsStep;
          }
          projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
        }
      }
      if (e.deltaY <= 0) {
        // 'scroll up'
        if (prevProjectsElement && prevProjectsElement !== projectsImgs[0]) {
          currentProjectsIndex -= 1;
          mlProjects -= projectsStep;
          if (!nextProjectsElement) {
            mlProjects -= lastProjectsStep;
          }
          projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
        } else {
          currentProjectsIndex -= 1;
          mlProjects = 0; // Установка в 0, если предыдущий элемент - первый элемент
          projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
        }
      }
      projectsImgs.forEach((img, index) => {
        if (index === currentProjectsIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
        if (index === currentProjectsIndex + 1) {
          img.classList.add('next-active');
        } else {
          img.classList.remove('next-active');
        }
        if (index === currentProjectsIndex - 1) {
          img.classList.add('pre-active');
        } else {
          img.classList.remove('pre-active');
        }
      });


      scrollTimeout = setTimeout(function () {
        scroll = true;
      }, 1500);
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
            clearTimeout(scrollTimeout);
            scroll = false;
            if (diffX > 0) {
                // Свайп влево
                swipeLeft();
            } else {
                // Свайп вправо
                swipeRight();
            }

            projectsImgs.forEach((img, index) => {
              if (index === currentProjectsIndex) {
                img.classList.add('active');
              } else {
                img.classList.remove('active');
              }
              if (index === currentProjectsIndex + 1) {
                img.classList.add('next-active');
              } else {
                img.classList.remove('next-active');
              }
              if (index === currentProjectsIndex - 1) {
                img.classList.add('pre-active');
              } else {
                img.classList.remove('pre-active');
              }
            });

            scrollTimeout = setTimeout(function () {
                scroll = true;
            }, 1500);
        }
    }
    
  });

  // Функция для обработки свайпа влево
  function swipeLeft() {

    nextProjectsElement = projectsImgs[currentProjectsIndex + 1];
    prevProjectsElement = projectsImgs[currentProjectsIndex - 1];

    const headerHeight = document.querySelector('.header').getBoundingClientRect().height

    if (nextProjectsElement) {
      projectsStep = nextProjectsElement.getBoundingClientRect().y - window.pageYOffset - headerHeight - 15;
    } else {
      projectsStep = 0;
    }
    // Ваш код для обработки свайпа влево
    if (currentProjectsIndex < projectsImgs.length - 1) {
        currentProjectsIndex += 1;
        mlProjects += projectsStep;
        if (!projectsImgs[currentProjectsIndex + 1 + 1] && nextProjectsElement) {
            lastProjectsStep = projectsStep;
        }
        projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
    }
  }

  // Функция для обработки свайпа вправо
  function swipeRight() {
    nextProjectsElement = projectsImgs[currentProjectsIndex + 1];
    prevProjectsElement = projectsImgs[currentProjectsIndex - 1];

    const headerHeight = document.querySelector('.header').getBoundingClientRect().height

    if (nextProjectsElement) {
        projectsStep = nextProjectsElement.getBoundingClientRect().y - window.pageYOffset - headerHeight - 15;
    } else {
        projectsStep = 0;
    }
    // Ваш код для обработки свайпа вправо
    if (prevProjectsElement && prevProjectsElement !== projectsImgs[0]) {
        currentProjectsIndex -= 1;
        mlProjects -= projectsStep;
        if (!nextProjectsElement) {
          mlProjects -= lastProjectsStep;
        }
        projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
    } else {
        currentProjectsIndex -= 1;
        mlProjects = 0; // Установка в 0, если предыдущий элемент - первый элемент
        projectsContainer.style.transform = `translate(0, -${mlProjects}px)`;
    }
  }
}
