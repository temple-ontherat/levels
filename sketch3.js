let radius=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,200, radius);
  if (radius<200) {
     radius++;
  }
  else {  location.replace("https://temple-ontherat.github.io/levels/index.html")}
}
