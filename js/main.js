

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
}