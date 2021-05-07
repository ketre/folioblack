  
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    document.getElementById('gallery').scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    e.preventDefault();
  }
  
  if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, {passive:false});
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, {passive:false},);
  } else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally, {passive:false});
  }