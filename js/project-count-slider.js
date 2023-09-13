const slider = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.about__button-prev');
const nextButton = document.querySelector('.about__button-next');
const slideCount = document.querySelector('.about__image-count');

let slideIndex = 0;

// Function to update slide count
function updateSlideCount() {
  slideCount.textContent = `${slideIndex + 1}/${slides.length}`;
}

// Function to show the current slide
function showSlide() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to go to the previous slide
function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  showSlide();
  updateSlideCount();
}

// Function to go to the next slide
function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
  updateSlideCount();
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Event listener for touch swipe on mobile devices
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 100) {
    nextSlide();
  } else if (touchEndX - touchStartX > 100) {
    prevSlide();
  }
}

// Initial setup
updateSlideCount();