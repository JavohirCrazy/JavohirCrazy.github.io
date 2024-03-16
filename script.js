setInterval(() => {
    let a = new Date()
    let b = a.getMonth() + 1
    let con = document.querySelector('.container')
    con.innerHTML = `
    <p class="two">${(a.getDate() < 10)?'0' + a.getDate(): a.getDate()}.${(b < 10)?'0' + b: b}.${a.getFullYear()}</p>
    <h2 class="one">${(a.getHours() < 10)?'0' + a.getHours(): a.getHours()}:${(a.getMinutes() < 10)?'0' + a.getMinutes(): a.getMinutes()}:${(a.getSeconds() < 10)?'0' + a.getSeconds(): a.getSeconds()}</h2>`
}, 1000)

// BACKGROUND ANIMATION

//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#112";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
    //Random position and size of stars;
    let x = W * Math.random();
    let y = H * Math.random();
    let r = 2.5 * Math.random();

    //Draw the stars;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
    setTimeout(animate, 100);
}
animate();