$(document).ready(function() {
  setScale()
  function setScale() {
    const windowRight = window.innerWidth;
    const windowLeft = 0;
    const imgElements = document.querySelectorAll('.main-title__img');

    imgElements.forEach((imgElement) => {
      const imgPicElement = imgElement.querySelector('.main-title__img-pic');
      const imgLeft = imgElement.getBoundingClientRect().left;
      
      const windowCenter = window.innerWidth / 2;

      if (windowRight < imgLeft) {
        imgPicElement.style.transform = 'scale(1)';
      } else if (windowLeft < windowCenter) {
        imgPicElement.style.transform = 'scale(1.5)';
      } 
      if (imgLeft < windowCenter) {
        imgPicElement.style.transform = 'scale(1)';
      } else if (imgLeft < windowCenter && windowLeft < windowCenter) {
        imgPicElement.style.transform = 'scale(1.5)';
      }
    });
  }
  
  window.addEventListener('resize', setScale);

  // Set the scroll speed for the main and description sections
  let mainScrollSpeed = 2.3;
  let descriptionScrollSpeed = 1.3;

  // Get the container element
  let container = $('.container');

  // Get the main and description sections
  let mainSection = $('.main');
  let descriptionSection = $('.description');

  // Calculate the maximum scrollable width
  let maxScrollWidth = mainSection.outerWidth() + descriptionSection.outerWidth() - container.outerWidth();

  // Set the initial scroll position
  let scrollPosition = 0;

  // Handle the mouse wheel event
  container.on('mousewheel', function(event) {
    // Calculate the new scroll position based on the scroll speed and the mouse wheel delta
    scrollPosition -= event.deltaY * (event.deltaFactor * (event.deltaY > 0 ? mainScrollSpeed : descriptionScrollSpeed));

    // Limit the scroll position within the maximum scrollable width
    scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollWidth));

    // Calculate the scroll position for the main and description sections
    let mainScrollPosition = -scrollPosition / mainScrollSpeed;
    let descriptionScrollPosition = -scrollPosition / descriptionScrollSpeed;

    // Update the scroll position of the main and description sections
    mainSection.css('transform', 'translateX(' + mainScrollPosition + 'px)');
    descriptionSection.css('transform', 'translateX(' + descriptionScrollPosition + 'px)');
    let scrollOffset = 0; // Adjust this value to control the distance scrolled

    // Scroll the main and description sections a little bit to both sides
    mainSection.css('transform', 'translateX(' + (mainScrollPosition + scrollOffset) + 'px)');
    descriptionSection.css('transform', 'translateX(' + (descriptionScrollPosition + scrollOffset) + 'px)');
    
    scrollOffset = 50; // Adjust this value to control the distance scrolled

    // Prevent the default scrolling behavior
    setScale()
    event.preventDefault();
  });

  // Handle the touchstart event
  container.on('touchstart', function(event) {
    // Store the initial touch position
    let touchStartX = event.touches[0].clientX;

    // Handle the touchmove event
    container.on('touchmove', function(event) {
      // Calculate the distance moved
      let touchMoveX = event.touches[0].clientX;
      let touchDeltaX = touchMoveX - touchStartX;

      // Calculate the new scroll position based on the scroll speed and the touch delta
      scrollPosition -= touchDeltaX * (touchDeltaX > 0 ? mainScrollSpeed : descriptionScrollSpeed);

      // Limit the scroll position within the maximum scrollable width
      scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollWidth));

      // Calculate the scroll position for the main and description sections
      let mainScrollPosition = -scrollPosition / mainScrollSpeed;
      let descriptionScrollPosition = -scrollPosition / descriptionScrollSpeed;

      // Update the scroll position of the main and description sections
      mainSection.css('transform', 'translateX(' + mainScrollPosition + 'px)');
      descriptionSection.css('transform', 'translateX(' + descriptionScrollPosition + 'px)');

      // Prevent the default scrolling behavior
      setScale()
      event.preventDefault();
    });
  });

  // Handle the touchend event
  container.on('touchend', function(event) {
    // Remove the touchmove event handler
    container.off('touchmove');
  });
});