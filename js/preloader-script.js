const preloader = document.getElementById('preloader')
const body = document.querySelector('body')
const interval = 1200; // 1.2 секунды
const preloaderProgress = document.querySelector('.prealoader-num')

setTimeout(()=> {
  body.classList.remove('loaded')
}, interval)
let counter = 0;
const step = 10;
preloaderProgress.innerHTML = counter + '%'

const incrementCounter = () => {
  counter += step;
  preloaderProgress.innerHTML = counter + '%'
  if (counter >= 100) {
    clearInterval(timer);
  }
};

const timer = setInterval(incrementCounter, 100);