window.addEventListener("load", function()
{
var ctx = document.
querySelector("canvas").getContext("2d");
var brushWidth = 200;
var brushOffset = brushWidth;
var speed = 7;
var txt = "Opportunities multiply when seized.";
var x = 30, i = 0;
ctx.font = "1cm cursive";
ctx.lineWidth = 3;
ctx.fillStyle = "#000";
if (brushOffset > 0)
requestAnimationFrame(draw);
else {
brushOffset = brushWidth;
x += ctx.measureText(txt[i++]).width +
ctx.lineWidth * Math.random();
if (i < txt.length)
requestAnimationFrame(draw);
}



});
