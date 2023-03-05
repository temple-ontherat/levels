let x=0;
let y=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if ((x==width) && (y==height)) {
      location.replace("https://temple-ontherat.github.io/levels/index3.html")
  }
  background(220);
  ellipse(x,y,20);
  x++;
  y++;
  if (x==width) {
    x=0;
  }
   if (y==height) {
    y=0;
  }
}
