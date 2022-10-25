const canvas = document.querySelector("canvas");
c = canvas.getContext("2d");

WInX = window.innerWidth;
WInY = window.innerHeight;

canvas.width = WInX;
canvas.height = WInY;

class Ball{
    constructor(radius){
        this.r = randomIntFromInterval(5, radius);
        this.x = randomIntFromInterval(this.r, WInX - this.r);
        this.y = randomIntFromInterval(this.r, WInY - this.r);
        this.color = `rgb(${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)})`;
        this.vx = randomIntFromInterval(-10, 10);
        this.vy = randomIntFromInterval(-10, 10);
    };
    draw(){
        c.beginPath();
        // c.moveTo(this.x, this.y);
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = this.color;
        c.fill()
        // requestAnimationFrame(this.update());
    };
    update(){
        if ((this.x > (WInX - this.r)) || (this.x < this.r))
        {
            this.vx *= -1;
        }
        if ((this.y > (WInY - this.r)) || (this.y < this.r))
        {
            this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    };
    };
    let balls = [];
    for(let i = 0;i < 200; i++){
        balls.push(new Ball(50));
    }
    // ball = new Ball(50);
    // balls.forEach(animate)
    animate()

function animate()
{
    c.clearRect(0, 0, WInX, WInY);
    balls.forEach((bal)=>{
        bal.update()
    });
    requestAnimationFrame(animate);
};
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };
  