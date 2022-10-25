let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = "white";
let c = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);
        
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;}

c.beginPath();
// c.arc(300,300,50,0,Math.PI);
// c.fillStyle = "red";
// c.lineWidth = 40;
// c.stroke();
// c.fill();
for (let i = 0; i<800; i++)
{
    let x = (Math.random() * window.innerWidth) - 20;
    let y = (Math.random() * window.innerHeight) - 20;
    c.beginPath();
    c.arc(x + 10, y + 10, 20, 0, Math.PI * 2)
    c.strokeStyle = `rgba(${(Math.random() * 254)}, ${(Math.random() * 254)}, ${(Math.random() * 254)}, 1)`;
    c.stroke();
    // c.fill();
}
c.clearRect(0,0,window.innerWidth,window.innerHeight)

