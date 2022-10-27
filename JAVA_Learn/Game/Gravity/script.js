let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

let winSize = {
  x: window.innerWidth,
  y: window.innerHeight,
};

canvas.width = winSize.x;
canvas.height = winSize.y;

//----------------------------------------------------------- Ball Class
class Ball {
  constructor(radius) {
    this.color = `rgb(${randomRange(0, 255)},${randomRange(
      0,
      255
    )},${randomRange(0, 255)})`;
    this.r = radius;
    this.x = randomRange(0, winSize.x);
    this.y = randomRange(0, winSize.y);
    this.ySpeed = 0.01;
    this.xSpeed = randomRange(-1, 1);
    this.gravity = 0.5;
    this.reboundForce = 0.8;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
  }
  move() {
    if (this.y < winSize.y - this.r) {
      this.y += this.ySpeed;
      this.ySpeed += this.gravity;
    } else {
      this.ySpeed = -this.ySpeed * this.reboundForce;
      this.y += this.ySpeed;
    }
    if (this.x < winSize.x - this.r || this.x > 0) {
      this.x += this.xSpeed;
    } else {
      this.xSpeed = -this.xSpeed;
    }
    this.draw();
  }
}
//----------------------------------------------------------- Ball Class    -end-

//----------------------------------------------------------- make Balls
let balls = [];
for (let i = 0; i < 20; i++) {
  balls.push(new Ball(20));
}
//----------------------------------------------------------- make Balls    -end-

//----------------------------------------------------------- move Balls
animate();
function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  balls.forEach((ball) => {
    ball.move();
  });
  requestAnimationFrame(animate);
}
//----------------------------------------------------------- move Balls    -end-

//----------------------------------------------------------- random maker
function randomRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
//----------------------------------------------------------- random maker -end