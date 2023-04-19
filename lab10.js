frogX = 200;
frogY = 350;
frogWidth = 50;
let drawCar = [];
let colors = ["white","blue","red","silver"];
let lanes = [30,100,300];
function setup() {
  createCanvas(400, 400);
   createCanvas(400, 400);
   for (let i = 0; i < 10; i++) {
    let thisX = random(width);
    let thisLane = random(lanes);
    let thisColor = random(colors);
     drawCar[i] = new Car(thisX, thisLane,thisColor);
   }
}

function draw() {
  background("black");
  fill("gray");
  rect(0,350,400,50);
  rect(0,200,400,50);
  for (let i = 0; i < drawCar.length; i++) {
    drawCar[i].move();
    drawCar[i].show();
      if (drawCar[i].collision(frogX, frogY)){
        frogX = 200
        frogY= 350
      }
  }
  addFrog(frogX, frogY, 1);
}
class Car {
  constructor(x, y,color) {
    this.x = x;
    this.y = y;
   this.color = color;
    this.speedX = 2;
  }
  move() {
    this.x = this.x + this.speedX;
    if (this.x > width - 25 || this.x < 25) {
       this.speedX = this.speedX * -1;}
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    rect(this.x, this.y, 50);
    pop();
  }
    collision (frogX, frogY) {
   let frogDistance = dist(this.x,this.y, frogX, frogY);
   if (frogDistance < frogWidth){
    return true;} 
  else{
   return false;
  }
}
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    frogY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    frogY += 5;
  }
  if (keyCode == RIGHT_ARROW) {
    frogX += 5;
  }
  if (keyCode == LEFT_ARROW) {
    frogX -= 5;
  }
}
// Create a function,draw my sprite.
function addFrog(x, y, size) {
  push();
  fill("greenyellow");
  // translate(x, y);
  scale(size);
  rect(x, y, 50);
  pop();
}
