

const container = document.querySelector('.container');
const main = document.querySelector('.main');
const description = document.querySelector('.description');

let scrollDistance = 0;
let latestKnownScrollX = 0;
let ticking = false;

container.addEventListener('wheel', (event) => {
  event.preventDefault();

  // Calculate the new scroll distance
  scrollDistance += event.deltaY;

  // Update the latest known scroll position
  latestKnownScrollX = container.scrollLeft;

  // If the update is not already scheduled, request the callback
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollPosition();
      ticking = false;
    });
  }

  ticking = true;
});

function updateScrollPosition() {
  // Calculate the distance to move the main block and description block
  const moveDistance = (latestKnownScrollX - scrollDistance) * 0.4;

  // Move the main block and description block horizontally by the calculated distance
  main.style.transform = `translateX(-${moveDistance}px)`;
  description.style.transform = `translateX(-${moveDistance * 2}px)`;
};

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

var ishidden = false;

let top_slower_text = modal.querySelector('#top-slower-text');
let top_normal_text = modal.querySelector('#top-normal-text');
let bottom_normal_text = modal.querySelector('#bottom-normal-text');
let bottom_slower_text = modal.querySelector('#bottom-slower-text');

let modal_text = modal.querySelector('#modal-text');

if (window.innerWidth <= 1024) {
  btn.addEventListener('click', () => {
    if (ishidden == false) {
      modal.style.display = "block";
      pathes = document.querySelectorAll('.header path');
      pathes.forEach(element => {
        element.style.fill = "#B24201";
      });
      document.querySelector('.header').style.borderBottom  = "1px solid #B24201";

      // document.querySelector('.header__menu-open').style.color = "#A83E3E";
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
        element.style.fill = "#DDD0BD";
      });
      document.querySelector('.header').style.borderBottom  = "1px solid #DDD0BD";
      // document.querySelector('.header__menu-open').style.color = "#A83E3E";
      document.querySelector('.header__menu-open').style.display = "block";
      document.querySelector('.header__menu-close').style.display = "none";
      document.querySelector('.header__menu-button-top').style.marginRight = '0';
      ishidden = false;

      
    }

  });
}

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
}
// let slideButton = document.getElementById('myBtn');

// slideButton.addEventListener('click', function() {
//   slideButton.classList.toggle('open');
// });

