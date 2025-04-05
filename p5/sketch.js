function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    noStroke();
    fill(0,0,240,120);
    rect(0,0,300,300);
    
    fill(230,90,0,120);
    circle(width/2, height/2, 200)
    
    fill(200,200,50);
    triangle(1,1, 300,200,150,50)
  }
  