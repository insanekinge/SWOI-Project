//slider-gallery

const sliderContainer = document.querySelector('.gallery__slider');
const sliderSlides = document.querySelectorAll('.gallery__slider-photo');
const sliderPrevButton = document.querySelector('.gallery__bottom-button:first-child');
const sliderNextButton = document.querySelector('.gallery__bottom-button:last-child');
const sliderTopNumber = document.querySelector('.gallery__top-number');

let slideWidth = sliderSlides[0]?.getBoundingClientRect().width || 0;
let currentSlide = 0;

// Set the total number of slides
sliderTopNumber.textContent = sliderSlides.length;

// Go to the next slide
sliderNextButton.addEventListener('click', () => {
  if (currentSlide === sliderSlides.length - 1) return;
  currentSlide++;
  sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

// Go to the previous slide
sliderPrevButton.addEventListener('click', () => {
  if (currentSlide === 0) return;
  currentSlide--;
  sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

// Animate the slide transition
function smoothSlideTransition() {
  sliderContainer.style.transition = 'transform 0.2s ease-out';
  setTimeout(() => {
    sliderContainer.style.transition = '';
  }, 200);
}

// Debounce the resize event
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Update the slide width on window resize
window.addEventListener('resize', debounce(() => {
  slideWidth = sliderSlides[0]?.getBoundingClientRect().width || 0;
  smoothSlideTransition();
  sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}, 250));


//slider-about

