// function galleryCount() {
// let sliderGallery = document.querySelector('.gallery__slider');
// let prevButtonGallery = document.querySelector('.gallery__bottom-button_prev');
// let nextButtonGallery = document.querySelector('.gallery__bottom-button_next');
// let numberElementGallery = document.querySelector('.gallery__top-number');

// let images = sliderGallery.querySelectorAll('.gallery__slider-photo');
// let currentIndex = 0;

// function updateSlider() {
//   sliderGallery.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
//   numberElementGallery.textContent = images.length;
// }

// prevButtonGallery.addEventListener('click', function() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// });

// nextButtonGallery.addEventListener('click', function() {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     updateSlider();
//   }
// });

// updateSlider();
// }

// galleryCount();
function galleryCount() {
  let sliderGallery = document.querySelector('.gallery__slider');
  let prevButtonGallery = document.querySelector('.gallery__bottom-button_prev');
  let nextButtonGallery = document.querySelector('.gallery__bottom-button_next');
  let numberElementGallery = document.querySelector('.gallery__top-number');
  let popup = document.querySelector('#popup');
  let popupImage = document.querySelector('#popup-image');
  let prevPopupButton = document.querySelector('#prev-popup');
  let nextPopupButton = document.querySelector('#next-popup');

  let images = sliderGallery.querySelectorAll('.gallery__slider-photo');
  let currentIndex = 0;

  function updateSlider() {
    sliderGallery.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    numberElementGallery.textContent = images.length;
  }

  function showPopup(index) {
    popup.style.display = 'flex';
    popupImage.src = images[index].src;
    currentIndex = index;
  }

  function hidePopup() {
    popup.style.display = 'none';
  }

  images.forEach((image, index) => {
    image.addEventListener('click', () => showPopup(index));
  });

  popup.addEventListener('click', hidePopup);

  prevButtonGallery.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButtonGallery.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevPopupButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (currentIndex > 0) {
      currentIndex--;
      showPopup(currentIndex);
    }
  });

  nextPopupButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showPopup(currentIndex);
    }
  });

  updateSlider();
}

galleryCount();