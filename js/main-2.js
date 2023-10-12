document.addEventListener('DOMContentLoaded', function() {
        const scroll = new LocomotiveScroll({
          el: document.querySelector('.container'),
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });
      });