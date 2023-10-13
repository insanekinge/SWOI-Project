$(document).ready(function() {
        // Установите время прокрутки для блоков main и aside
        let mainScrollTime = 1000; // Увеличьте значение для более длительной прокрутки
        let asideScrollTime = 1500; // Увеличьте значение для более длительной прокрутки
      
        // Обработчик события прокрутки контейнера
        $('.container').on('scroll', function() {
          // Получите текущую позицию прокрутки
          let scrollPosition = $(this).scrollTop();
      
          // Рассчитайте долю прокрутки относительно высоты блоков main и aside
          let mainScrollFraction = scrollPosition / $('main').height();
          let asideScrollFraction = scrollPosition / $('aside').height();
      
          // Используйте animate для плавной прокрутки блоков main и aside
          $('main').stop().animate({ 'top': -mainScrollFraction * $('main').height() }, mainScrollTime);
          $('aside').stop().animate({ 'top': -asideScrollFraction * $('aside').height() }, asideScrollTime);
        });
      });