const mainContainer = document.getElementById('main-container')
      const descriptionContainer = document.getElementById('description-container')

      // mainContainer.scrollIntoView();
      let mlMain = 0;
      let mlDesc = 0;
      window.addEventListener('wheel', function (e) {
          if (scroll) {
              // var content = document.querySelector('body');
              var speedMain = 500;
              var speedDesc = 300;
              if (e.deltaY < 0) {
                  // 'scroll up'
                  mainContainer.style.transform = `translate(-${mlMain}px,0)`;
                  descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
                  mlMain -= speedMain
                  mlDesc -= speedDesc
              }
              if (e.deltaY > 0) {
                  // 'scroll down'
                  mainContainer.style.transform = `translate(-${mlMain}px,0)`;
                  descriptionContainer.style.transform = `translate(-${mlDesc}px,0)`;
                  mlMain += speedMain
                  mlDesc += speedDesc
              }
          }
      });