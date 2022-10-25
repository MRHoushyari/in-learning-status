const canvas = document.querySelector("canvas");
// canvas full screen

const WInW = window.innerWidth;
const WInH = window.innerHeight;
canvas.width = WInW;
canvas.height = WInH;

const ctx = canvas.getContext("2d");
console.log (Math.random() * WInW)
console.log (Math.random() * WInH)

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let r = randomIntFromInterval(5,100);
let vx = randomIntFromInterval(-20, 20);
let vy = randomIntFromInterval(-20, 20);
let x = randomIntFromInterval(r, (WInW - r));
let y = randomIntFromInterval(r, (WInH - r));
let color = `rgb(${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)},${randomIntFromInterval(0,254)})`;

function anim()
{
    ctx.beginPath();
    ctx.clearRect(0, 0, WInW, WInH);
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = color;
    ctx.fill();
    x += vx;
    y += vy;
    if ((x > (WInW - r)) || (x < r))
    {
        vx = -vx;
    }
    if ((y > (WInH - r)) || (y < r))
    {
        vy = -vy;
    }
    requestAnimationFrame(anim);
}
anim()