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
        coord.x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        coord.y = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      }
  function getPosition(event){
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
let paint = false;
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
        ctx.strokeStyle = 'rgb(255, 255, 255)';
          ctx.beginPath();
          ctx.moveTo(coord.x, coord.y);
          getPosition(event);
          ctx.lineTo(coord.x , coord.y);
          ctx.stroke();
        }