
var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");
mouse={
    x:undefined,
    y:undefined
}
colorArray=[
    "#A61C28",
    "#131626",
    "#132B40",
    "#326773",
    "#F27127"
]
window.addEventListener("mousemove",
function(event){
mouse.x=event.x;
mouse.y=event.y;
})
class Circle
{
    constructor(x,y,radius,dx,dy)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.dx=dx;
        this.dy=dy;
        this.color=colorArray[Math.floor(colorArray.length*Math.random())];
    }
    draw()
    {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle=this.color;
        c.fill();
        c.stroke();
        
    }
    update()
    {
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
        if(((mouse.x-this.x)**2+(mouse.y-this.y)**2)**0.5<=150)
        {
            if(this.radius<=50)
            {
                this.radius+=1;
            }
            
        }
        else{
            if(this.radius>=radius)
            {
                this.radius-=1;
            }
            if(this.radius<=radius)
            {
                this.radius+=1;
            }
        }
    }
}


var circle=[];
for(var i=0;i<200;i++)
{
    var radius=Math.random()*7+1;
    var x=Math.random()*(window.innerWidth-2*radius)+radius;
    var y=Math.random()*(window.innerHeight-2*radius)+radius;
    var dx=(Math.random()-0.5)*6;
    var dy=(Math.random()-0.5)*6;
    circle[i]=new Circle(x,y,radius,dx,dy);
    circle[i].draw();
}
window.addEventListener("resize",
function(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
for(var i=0;i<200;i++)
{
    var radius=Math.random()*3+1;
    var x=Math.random()*(window.innerWidth-2*radius)+radius;
    var y=Math.random()*(window.innerHeight-2*radius)+radius;
    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;
    circle[i]=new Circle(x,y,radius,dx,dy);
    circle[i].draw();
}
}
)


function animate()
{
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(animate);
    for(var i=0;i<200;i++)
    {
    circle[i].update();
    circle[i].draw();
    }
}
animate();