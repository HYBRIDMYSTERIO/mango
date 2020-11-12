class Boy {
    constructor(x,y){
        var option = {
            'isStatic':true,
            'restitution':0.8,
            'friction':0.2,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,5,5,option);
    
        
        this.image = loadImage("boy.png");

        World.add(world,this.body);

    }
 displayboy(){
     var position = this.body.position;
     imageMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     image(this.image,position.x,position.y);
 }
}