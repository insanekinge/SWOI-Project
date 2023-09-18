const projectItems = document.querySelectorAll('.project-item');
const projectImages = document.querySelectorAll('.project-item__image');

projectImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    projectImages.forEach((img) => img.classList.remove('shrink'));
    image.classList.add('shrink');
    
    setTimeout(() => {
        const nextIndex = (index + 1) % projectItems.length;
        projectItems[nextIndex].scrollIntoView({ behavior: 'smooth' });
      }, 100);
    
    

    setTimeout(() => {
      image.classList.remove('shrink');
    }, 500);
  });
});