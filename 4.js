
var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");

function Rectangle(x,y,len,bre,dx,dy,str)
{
    this.x=x;
    this.y=y;
    this.len=len;
    this.bre=bre;
    this.dx=dx;
    this.dy=dy;
    this.str=str;
    this.draw=function()
    {  
        
        c.fillRect(this.x,this.y,this.len,this.bre);
    }
    this.update=function()
    {
        
        if(this.x+this.len>=window.innerWidth || this.x<=0)
        {
            this.dx=-this.dx;
        }
        if(this.y+this.bre>=window.innerHeight || this.y<=0)
        {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        
        this.draw();
    }
}

var rect=[];
var str="red";
for(var i=0;i<30;i++)
{
var len=100*Math.random();
var bre=100*Math.random();
var x=Math.random()*(window.innerWidth-len);
var y=Math.random()*(window.innerHeight-bre);
var dx=(Math.random()-0.5)*16;
var dy=(Math.random()-0.5)*16;
rect[i]=new Rectangle(x,y,len,bre,dx,dy,str);
rect[i].draw();
}
str="#8fa8fA";
for(var i=30;i<60;i++)
{
var len=100*Math.random();
var bre=100*Math.random();
var x=Math.random()*(window.innerWidth-len);
var y=Math.random()*(window.innerHeight-bre);
var dx=(Math.random()-0.5)*8;
var dy=(Math.random()-0.5)*8;
rect[i]=new Rectangle(x,y,len,bre,dx,dy,str);
rect[i].draw();
}


function animate()
{ 
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(animate);
    
    for(var i=0;i<60;i++)
    {
    rect[i].update();
    c.fillStyle=rect[i].str;
    }
    
}
animate();

console.log(canvas);