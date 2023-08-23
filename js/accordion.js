let accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function(item) {
  let header = item.querySelector('.accordion__header');
  let content = item.querySelector('.accordion__content');
  let icon = item.querySelector('.accordion-icon');

  header.addEventListener('click', function() {
    item.classList.toggle('open');

    content.style.maxHeight = item.classList.contains('open') ? content.scrollHeight + 'px' : '0';
//     icon.style.fill = item.classList.contains('open') ? '#172431' : '#C1803E';
  });
  
});