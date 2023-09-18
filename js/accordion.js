let accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function(item) {
  let header = item.querySelector('.accordion__header');
  let content = item.querySelector('.accordion__content');
  let openButton = item.querySelector('.accordion__header-button_open');

  header.addEventListener('click', function() {
    item.classList.toggle('open');
    content.style.maxHeight = item.classList.contains('open') ? content.scrollHeight + 'px' : '0';

    // Toggle the text and style of the open button
    if (item.classList.contains('open')) {
      openButton.textContent = 'Свернуть';
      openButton.style.backgroundColor = '#C1803E';
      openButton.style.color = '#172431';
    } else {
      openButton.textContent = 'Открыть';
      openButton.style.backgroundColor = '';
      openButton.style.color = '';
    }
  });
});