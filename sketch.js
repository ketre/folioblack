 r = 200
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    // canvas.parent('myCanvas')

}
    function draw() {
    
    noFill();
    stroke('white')
    circle(width/2, height/2, 100)
    circle(width/2+120, height/2, 100)
    circle(width/2-120, height/2, 100);
    //eyes
    for (let i=0; i<6; i++){
        
      circle(50+60*i, height/2, 10)
    }
    
    circle(width/2, height/2, r)
    circle(width/2, height/2, r)
    circle(width/2, height/2, r)
    moveX= map(mouseX, -100, windowWidth ,0.5,-0.5);
    moveX1 = map(mouseX,-110,windowHeight,-0.5,0.5);
    moveY=map(mouseY, 0, 1600, PI-1,PI+0.5);
    arc(width/2, height/2, 80, 60,moveX, moveY);
    arc(width/2+120, height/2, 70, 70, moveX, moveY);
    arc(width/2-120, height/2, 70, 70, moveY, moveX1);
    }
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }