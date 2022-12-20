
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){

  $('.slide-images').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    variableWidth: true,
    arrows: false

  });
});

let popup = $('.popup');
let link = document.querySelector('.footer__feedback');


link.addEventListener('click', function() {
  
});

let navList = document.querySelector('.nav__list')
let burgerBtn = document.querySelector('.burger-menu')

burgerBtn.onclick = function(e) {
  navList.classList.toggle('active');
  
  burgerBtn.classList.toggle('active-burger');
  
  burgerBtn.classList.add('animate__flipInX');
  navList.classList.add('animate__fadeIn');
  setTimeout(() => {
    burgerBtn.classList.remove('animate__flipInX');
    navList.classList.remove('animate__fadeIn');
    
  }, 300);
  
  
}