
var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");



function Circle(a,b,r,dxx,dyy,str){
    var x,y,radius,dx,dy;
    this.x=a;
    this.y=b;
    this.radius=r;
    this.dx=dxx;
    this.dy=dyy;
    this.str=str;
    
    this.draw=function(){
        c.fillStyle=str;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI*2,false);
        c.stroke();
        c.fill();
    }

    this.update=function()
    {
        
        if(this.x>=window.innerWidth-this.radius || this.x<=this.radius)
        {
            this.dx=-this.dx;
        }
        if(this.y>=window.innerHeight-this.radius || this.y<=this.radius)
        {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
    }
}
var str="#8bd8bd";
var circle=[];
for(var i=0;i<50;i++)
{
    var radius=30*Math.random();
    var x=Math.random()*(window.innerWidth-2*radius)+radius;
    var y=Math.random()*(window.innerHeight-2*radius)+radius;
    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;;
    circle[i]=new Circle(x,y,radius,dx,dy,str);
    circle[i].draw();
}
var str="#243665";
for(var i=50;i<100;i++)
{
    var radius=30*Math.random();
    var x=Math.random()*(window.innerWidth-2*radius)+radius;
    var y=Math.random()*(window.innerHeight-2*radius)+radius;
    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;;
    circle[i]=new Circle(x,y,radius,dx,dy,str);
    circle[i].draw();
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(animate);
    
    for(var i=0;i<100;i++)
    {
        circle[i].update();
        circle[i].draw();
    }
}
animate();