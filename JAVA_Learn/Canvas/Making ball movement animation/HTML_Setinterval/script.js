let x = 40;
setInterval(() => {
    x += 0.2;
    console.log(x);
    document.querySelector("div").style.left = `${x}px`;
},0.9);