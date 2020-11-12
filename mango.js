class Mango {
    constructor(x,y){
        var option = {
            'isStatic':true,
            'restitution':0,
            'friction':1
            
        }
        this.body = Bodies.rectangle(x,y,5,5,option);
    
        
        this.image = loadImage("mango.png");

        World.add(world,this.body);

    }
 displaymango(){
     var position = this.body.position;
     imageMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     image(this.image,position.x,position.y);
 }
}