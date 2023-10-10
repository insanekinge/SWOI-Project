modal()
function modal() {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
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
          element.classList.add('modal-color');
        });
        document.querySelector('.header').classList.add('modal-border');
  
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
        pathes = document.querySelectorAll('.header path');
        pathes.forEach(element => {
          element.classList.add('modal-color');
        });
        document.querySelector('.header').classList.add('modal-border');
  
        document.querySelector('.header__menu-open').style.display = "block";
        document.querySelector('.header__menu-close').style.display = "none";
        document.querySelector('.header__menu-button-top').style.marginRight = '0';
        ishidden = false;
      }
    });
  }
  
  btn.onclick = function burgerMenu() {
  }
  
  window.onclick = function modalDisplayNone(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

