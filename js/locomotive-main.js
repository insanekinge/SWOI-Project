const scroll = new LocomotiveScroll({
        el: document.querySelector(".container"),
        smooth: true, // Enable smooth scrolling
        direction: "horizontal", // Set the scrolling direction to horizontal
        touchMultiplier: 2, // Increase touch sensitivity for inertial scrolling
      });
      
      scroll.init();