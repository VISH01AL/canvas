var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");

var len=20;
var bre=30;
var x=100;
var y=100;
var dx=10;
var dy=10;
function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    requestAnimationFrame(animate);
    c.fillRect(x,y,len,bre);
    console.log("hello");
    if(x+len>=window.innerWidth || x<=0)
    {
        dx=-dx;
    }
    if(y+bre>=window.innerHeight || y<=0)
    {
        dy=-dy;
    }
    x+=dx;
    y+=dy;
}
animate();