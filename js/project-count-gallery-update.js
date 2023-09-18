// Get the gallery slider element
const gallerySlider = document.querySelector('.gallery__slider');

// Get the gallery top number element
const galleryTopNumber = document.getElementById('galleryTopNumber');

// Define the breakpoints for different screen widths
const breakpoints = {
  mobile: 699,
  tablet: 1400,
  desktop: 2000
};

// Function to update the number of visible gallery__slider-photo elements
function updateGallerySlider() {
  const screenWidth = window.innerWidth;

  // Determine the number of visible elements based on the screen width
  let visibleElements;
  if (screenWidth <= breakpoints.mobile) {
    visibleElements = 1;
  } else if (screenWidth <= breakpoints.tablet) {
    visibleElements = 2;
  } else if (screenWidth <= breakpoints.desktop) {
    visibleElements = 4;
  } else {
    visibleElements = 4; // Default to 4 elements for larger screens
  }

  // Hide all gallery__slider-photo elements
  const sliderPhotos = gallerySlider.querySelectorAll('.gallery__slider-photo');
  sliderPhotos.forEach((photo) => {
    photo.style.display = 'none';
  });

  // Show the desired number of gallery__slider-photo elements
  for (let i = 0; i < visibleElements; i++) {
    sliderPhotos[i].style.display = 'block';
  }

  // Update the gallery top number with the count of visible elements
  galleryTopNumber.textContent = visibleElements;
}

// Call the updateGallerySlider function initially and whenever the window is resized
updateGallerySlider();
window.addEventListener('resize', updateGallerySlider);