class Tree {
    constructor(x,y){
        var option = {
            'isStatic':true,
            'restitution':0.8,
            'friction':0.2,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,20,20,option);
    
        
        this.image = loadImage("tree.png");

        World.add(world,this.body);

    }
 displaytree(){
     var position = this.body.position;
     imageMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     image(this.image,position.x,position.y);
 }
}