let left = 10;
let ball = document.querySelector("#ball");
function anim(){
    ball.style.left = left + "px";
    left += 0.5;
    requestAnimationFrame(anim);
}
anim();
