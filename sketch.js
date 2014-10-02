function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(0, 0, 0);
}

  function draw()
{
  background(0);




if (mouseX < 100) {
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  fill(255, 255, 255);
  ellipse(150, 200, 120, 120);
} else if (mouseX < 300){
  fill(127, 253, 255);
  ellipse(250, 200, 140, 140);
} else if (mouseX < 400){
  fill(50, 209, 211);
  ellipse(350, 200, 160, 160);
} else if (mouseX < 500){
  fill(42, 137, 138);
  ellipse(450, 200, 180, 180);
} else if (mouseX < 600){
  fill(0, 76, 77);
  ellipse(550, 200, 200, 200);
} else{
  fill(0, 60, 65);
  ellipse(650, 200, 220, 220);
}
}