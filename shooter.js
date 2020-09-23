class Shooter{
    constructor(x,y,radius,diameter){
var options={restitution:1.5,friction:100,density:20,isStatic:false}
this.body=Bodies.rectangle(x,y,radius,diameter,options);
this.radius=radius;
this.diameter=diameter;
World.add(world,this.body)
} 
display(){
    var angle=this.body.angle
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle)
fill("orange");
ellipseMode(CENTER);
ellipse(0,0,this.radius,this.diameter);
pop();
}  
}
    
