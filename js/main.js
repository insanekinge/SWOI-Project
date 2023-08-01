const container = document.querySelector(".container");

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  
  // Determines if the user scrolls left or right and adjusts the scroll value accordingly
  container.scrollLeft += event.deltaY + event.deltaX;
});