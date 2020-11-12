class Stone{
    constructor(x,y){
        var option = {
            'isStatic':false,
            'restitution':0,
            'friction':0.2,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,5,5,option);
    
        
        this.image = loadImage("stone.png");

        World.add(world,this.body);

    }
 displaystone(){
     var position = this.body.position;
     imageMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     image(this.image,position.x,position.y);
 }
}