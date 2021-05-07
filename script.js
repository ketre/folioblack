(function() {
        window.addEventListener('load', ()=>{
        resize(); // Resizes the canvas once the window loads
        document.addEventListener('mouseenter', startPainting);
        document.addEventListener('mouseleave', stopPainting);
        document.addEventListener('mousemove', sketch);
        window.addEventListener('resize', resize);
    }); 
    function resize(){
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }   
    const canvas = document.querySelector('#myCanvas');
    const ctx = canvas.getContext('2d');
    let coord = {x:0 , y:0}; 

      let pressed = false;

      // update mouse pointer coordinates
      document.onmousemove = function(e) {
        coord.x = e.clientX +  document.body.scrollLeft;
        coord.y = e.clientY + document.body.scrollTop;
      }
  function getPosition(event){
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
var paint = false;
function startPainting(event){
  paint = true;
  getPosition(event);
}
function stopPainting(){
  paint = false;
}
      canvas.onmouseenter = function() {
        pressed = true;
      };

      canvas.onmouseleave = function() {
        pressed = false;
      }
  function sketch(event){
  if (!paint) return;
  ctx.beginPath();
        ctx.strokeStyle = 'whitesmoke';
          ctx.beginPath();
          ctx.moveTo(coord.x, coord.y);
          getPosition(event);
          ctx.lineTo(coord.x , coord.y);
          ctx.stroke();
        }
      })();
      

      function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
        document.getElementById('').scrollLeft -= (delta * scrollSpeed);
        document.body.scrollLeft -= (delta * scrollSpeed);
        e.preventDefault();
      }
      
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
      }