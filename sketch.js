 r = 200
function setup() {
    canvas = createCanvas(windowWidth, windowHeight/2);
    // canvas.parent('myCanvas')

}
    function draw() {
    
    noFill();
    stroke('white')
    circle(width/2, height/2, r)
    circle(width/2+r*1.5, height/2, r)
    circle(width/2-r*1.5, height/2, r);
    
    moveX= map(mouseX, -100, windowWidth ,0.5,-0.5);
    moveX1 = map(mouseX,-110,windowHeight,-0.5,0.5);
    moveY=map(mouseY, 0, 1600, PI-1,PI+0.5);
    arc(width/2, height/2, r*0.8, r*0.6,moveX, moveY);
    arc(width/2+r*1.5, height/2, r*0.7, r*0.7, moveX, moveY);
    arc(width/2-r*1.5, height/2, r*0.7, r*0.7, moveY, moveX1);
    //eyes
    for (let i=-300; i<800; i+=120){
        fill('white')
      circle(windowWidth/2+i, height/2, r/10)
    }
}
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }