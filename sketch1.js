let goat="";
function setup() {
  createCanvas(400, 400);
  button=createButton("Press to go to next sketch");
  button.position(100,100);
  button.mousePressed(gotoSketch);
}

function draw() {
  background(220);
}
function gotoSketch() {
  location.replace("https://temple-ontherat.github.io/levels/sketch2.js")
}
