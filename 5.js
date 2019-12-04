console.log("hello");
var canvas=document.querySelector("canvas");
console.log(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
c.strokeStyle="rgba(0,26,100,0.6)";
c.fillStyle="rgba(0,220,100,0.4)";
function Circle(x,y,dx,dy,radius)
{
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,Math.PI*2,false);
    c.fill();
    c.stroke();   
    }
    this.update=function(){
    this.x+=this.dx;
    this.y+=this.dy;
    if(this.x+this.radius>=window.innerWidth || this.x<=this.radius)
    {
    this.dx=-this.dx;
    }
    if(this.y+this.radius>=window.innerHeight || this.y<=this.radius)
    {
    this.dy=-this.dy;
    }
    }
}


var circle=[];
for(var i=0;i<100;i++)
{
    var radius=Math.random()*40;
    var x=Math.random()*(innerWidth-2*radius)+radius;
    var y=Math.random()*(innerHeight-2*radius)+radius;
    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;
    circle[i]=new Circle(x,y,dx,dy,radius);
    circle[i].draw();
}

var rect=[];
for(var i=0;i<100;i++)
{
    var len=(window.innerWidth/6)*Math.random();
    var bre=(window.innerHeight/6)*Math.random();
    var a=(window.innerWidth-len)*Math.random();
    var b=(window.innerHeight-bre)*Math.random();
    var da=(Math.random()-0.5)*16;
    var db=(Math.random()-0.5)*16;
    rect[i]=new Rectangle(a,b,da,db,len,bre);
}

c.stroke();
function animate()
{
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animate);
    
    for(var i=0;i<100;i++)
    {
    circle[i].update();
    circle[i].draw();
    }
    for(var i=0;i<100;i++)
    {
       
        rect[i].draw();
        rect[i].update();
    }
}
animate();

function Rectangle(a,b,da,db,len,bre)
{
    this.a=a;
    this.b=b;
    this.da=da;
    this.db=db;
    this.len=len;
    this.bre=bre;
    this.draw=function(){
    c.beginPath();
    c.rect(a,b,len,bre);
    c.fill();
    c.stroke();
    }
    
    this.update=function(){
        a+=da;
        b+=db;
        if(a+len>=window.innerWidth || a<=0)
        {
        da=-da;
        }
        if(b+bre>=window.innerHeight || b<=0)
        {
        db=-db;
        }
    }


}




