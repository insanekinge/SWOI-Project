//slider

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




let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

var ishidden = false;

let top_slower_text = modal.querySelector('#top-slower-text');
let top_normal_text = modal.querySelector('#top-normal-text');
let bottom_normal_text = modal.querySelector('#bottom-normal-text');
let bottom_slower_text = modal.querySelector('#bottom-slower-text');

let modal_text = modal.querySelector('#modal-text');



btn.addEventListener('click', () => {
  if (ishidden == false) {
    modal.style.display = "block";
    pathes = document.querySelectorAll('.header path');
    pathes.forEach(element => {
      element.style.fill = "#A39E8F";
    });
    document.querySelector('.header').style.borderBottom  = "1px solid #A39E8F";

    // document.querySelector('.header__menu-open').style.color = "#A39E8F";
    document.querySelector('.header__menu-open').style.display = "none";
    document.querySelector('.header__menu-close').style.display = "block";
    document.querySelector('.header__menu-button-top').style.marginRight = '22px';
    ishidden = true;
  } else {
    modal.classList.add('modal-content-hide');
    top_slower_text.classList.add('modal-tab__text-top__slower-hide');
    top_normal_text.classList.add('modal-tab__text-top-hide');
    
    bottom_normal_text.classList.add('modal-tab__text-bottom-hide');
    bottom_slower_text.classList.add('modal-tab__text-bottom__slower-hide');

    modal_text.classList.add('modal-text-hide');
    setTimeout(function(){
      modal.style.display = 'none';
      modal.classList.remove('modal-content-hide');
      top_slower_text.classList.remove('modal-tab__text-top__slower-hide');
      top_normal_text.classList.remove('modal-tab__text-top-hide');

      
      bottom_normal_text.classList.remove('modal-tab__text-bottom-hide');
      bottom_slower_text.classList.remove('modal-tab__text-bottom__slower-hide');
      modal_text.classList.remove('modal-text-hide');


    }, 400);
    // modal.style.display = "none";
    pathes = document.querySelectorAll('.header path');
    pathes.forEach(element => {
      element.style.fill = "#A39E8F";
    });
    document.querySelector('.header').style.borderBottom  = "1px solid #A39E8F";
    // document.querySelector('.header__menu-open').style.color = "#A39E8F";
    document.querySelector('.header__menu-open').style.display = "block";
    document.querySelector('.header__menu-close').style.display = "none";
    document.querySelector('.header__menu-button-top').style.marginRight = '0';
    ishidden = false;

    
  }

});





btn.onclick = function() {
  
  ;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

