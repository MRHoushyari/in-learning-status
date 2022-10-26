const canvas = document.querySelector("canvas");
c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball{
    constructor(radius, x ,y){
        this.normalR = 50;
        this.r = randomIntFromInterval(5, radius);
        this.x = x || randomIntFromInterval(this.r, window.innerWidth - this.r);
        this.y = y || randomIntFromInterval(this.r, window.innerHeight - this.r);
        this.color = `rgb(${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)})`;
        this.vx = 5;
        this.vy = 5;
    };
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fillStyle = this.color;
        c.fill()
    };
    update(){
        if ((this.x > (window.innerWidth - (this.r + 2))) || (this.x < (this.r + 2)))
        {
            this.vx *= -1;
        }
        if ((this.y > (window.innerHeight - (this.r + 2))) || (this.y < (this.r + 2)))
        {
            this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    };
    };
// End of ball object

// Event Event section
    document.querySelector("body").addEventListener("click", (e)=>{
        balls.push(new Ball(50, e.clientX,e.clientY))
    });

    document.querySelector("body").addEventListener("mousemove", (e)=>{
        balls.forEach((ball)=>{
            if (((Math.sqrt(Math.pow((e.clientX - ball.x), 2) + Math.pow((e.clientY - ball.y), 2))) < 100 ) && (ball.r < (ball.normalR * 2))){
                ball.r += 1;}
            else 
            if (ball.r > (ball.normalR)){
                ball.r -= 1;}
            })});
    document.querySelector("body").addEventListener('resize', (event) => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    })
// ENd of Event Section

    // Create Balls
    let balls = [];
    for(let i = 0;i < 10; i++){
        balls.push(new Ball(50));
    }
    
    // Starter Function
    animate()
function animate()
{
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    balls.forEach((bal)=>{
        bal.update()
    });
    requestAnimationFrame(animate);
};

// Random Maker Function
function randomIntFromInterval(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)};