function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('letter-show');
          }
        });
      }
      
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let letters = document.querySelectorAll('.letter-animation');
      
      for (let elm of letters) {
        observer.observe(elm);
      }