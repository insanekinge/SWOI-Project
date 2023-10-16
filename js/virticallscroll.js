function init(){
	new SmoothScroll(document.querySelector('.container'),120,30)
}

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
    
		var delta = (pos - target.scrollTop) / smooth
    
		target.scrollTop += delta
    
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}




// // Set the scroll speed for the main and description sections
// let mainScrollSpeed = 2.3;

// // Get the container element
// let container = $('.container');

// // Get the main and description sections
// let mainSection = $('#scrollpwoefpaowef');

// // Calculate the maximum scrollable height
// let maxScrollHeight = mainSection.outerHeight() - document.querySelector('body').outerHeight();

// // Set the initial scroll position
// let scrollPosition = 0;

// // Handle the mouse wheel event
// window.addEventListener('wheel', function(event) {
//   // Calculate the new scroll position based on the scroll speed and the mouse wheel delta
//   scrollPosition -= -1 * (event.deltaY * (-1 > 0 ? mainScrollSpeed : mainScrollSpeed));

//   // Limit the scroll position within the maximum scrollable height
//   scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollHeight));

//   // Calculate the scroll position for the main and description sections
//   let mainScrollPosition = -scrollPosition / mainScrollSpeed;

//   // Update the scroll position of the main and description sections
//   mainSection.css('transform', 'translateY(' + mainScrollPosition + 'px)');

//   let scrollOffset = 0; // Adjust this value to control the distance scrolled

//   // Scroll the main and description sections a little bit up and down
//   mainSection.css('transform', 'translateY(' + (mainScrollPosition + scrollOffset) + 'px)');
//   scrollOffset = 50; // Adjust this value to control the distance scrolled

//   // Prevent the default scrolling behavior
//   event.preventDefault();
// }, { passive: false });