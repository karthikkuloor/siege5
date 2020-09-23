class Box{
    constructor(x,y,width,height){
var options={restitution:0,friction:1,density:1.2,isStatic:false}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
this.image = loadImage("sprites/square.png");
World.add(world,this.body); 
this.visibility=255;
    }
    display(){
        //console.log(this.body.speed)
        if(this.body.speed<3){
            imageMode(CENTER)
            image(this.image,this.body.position.x,this.body.position.y,40,40)
            
        }
       else{
         World.remove(world,this.body);
         push()
         this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,40,40)
      pop()
       }
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
      score++
      console.log("bye")
        }
      }
}