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
      element.style.fill = "#A83E3E";
    });
    document.querySelector('.header').style.borderBottom  = "1px solid #A83E3E";

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
      element.style.fill = "#A83E3E";
    });
    document.querySelector('.header').style.borderBottom  = "1px solid #A83E3E";
    // document.querySelector('.header__menu-open').style.color = "#A83E3E";
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
}

let howItems = document.querySelectorAll('.how__item');

howItems.forEach(function(item) {
  let header = item.querySelector('.how__header');
  let content = item.querySelector('.how__content');

  header.addEventListener('click', function() {
    item.classList.toggle('open_how');

    content.style.maxHeight = item.classList.contains('open_how') ? content.scrollHeight + 'px' : '0';
  });
  
});