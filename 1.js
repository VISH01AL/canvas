var canvas=document.querySelector("canvas");

canvas.width=innerWidth;
canvas.height=innerHeight;

var c=canvas.getContext("2d");
c.fillStyle="red";
c.strokeStyle="red";

var radius=30;
var x=(innerWidth-2*radius)*Math.random()+radius;
var y=(innerHeight-2*radius)*Math.random()+radius;
var dx=10;
var dy=10;
function animate()
{
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x,y,radius,Math.PI*2,false);
    c.stroke();
    c.fill();
    x+=dx;
    y+=dy;
    if(x>=innerWidth-radius || x<=radius)
    {
        dx=-dx;
    }
    if(y>=innerHeight-radius || y<=radius)
    {
        dy=-dy;
    }
}
animate();