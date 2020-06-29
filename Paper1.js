class Paper1 {

    constructor(x,y,r){

        var options = {
            friction : 0.5 ,
            density :1.2,
            restitution :0.3 ,
            isStatic : false
        }
        this.body = Bodies.circle(this.x , this.y ,this.r , options);
        World.add(world,this.body);

        this.image = loadImage(".vscode/paper.png" );
        
    }
    display(){

        push();
        translate(this.body.position.x , this.body.position.y);
        rectMode();
        strokeWeight(5);
        stroke(0,0,0);
        ellipse(this.x , this.y  , this.r,this.r);
        pop();
    }
}