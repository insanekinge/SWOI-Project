let sliderGallery = document.querySelector('.gallery__slider');
let prevButtonGallery = document.querySelector('.gallery__bottom-button_prev');
let nextButtonGallery = document.querySelector('.gallery__bottom-button_next');
let numberElementGallery = document.querySelector('.gallery__top-number');

let images = sliderGallery.querySelectorAll('.gallery__slider-photo');
let currentIndex = 0;

function updateSlider() {
  sliderGallery.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  numberElementGallery.textContent = images.length;
}

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

updateSlider();

