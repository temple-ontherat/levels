let x=0;
let y=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   if ((x==width)&&(y==height)) {
location.replace("https://temple-ontherat.github.io/levels/index3.html");
     x=width;
     y=height;
  }
  else {x++;
  y++;}
  ellipse(x,y,20);
}
