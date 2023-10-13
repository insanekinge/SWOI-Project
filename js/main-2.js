$(document).ready(function() {
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

    // Scroll the main and description sections a little bit to both sides
    let scrollOffset = 50; // Adjust this value to control the distance scrolled
    mainSection.css('transform', 'translateX(' + (mainScrollPosition + scrollOffset) + 'px)');
    descriptionSection.css('transform', 'translateX(' + (descriptionScrollPosition + scrollOffset) + 'px)');

    // Prevent the default scrolling behavior
    event.preventDefault();
  });
});