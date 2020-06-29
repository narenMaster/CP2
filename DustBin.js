class DustBin{
    
    constructor(x , y ){

        btmline=createSprite(width/2, height-50, 200,20);
	btmline.shapeColor = color(255,0,0);

	side1=createSprite(500, height-90, 20,100);
	side1.shapeColor = color(255,0,0);
	
	side2=createSprite(300, height-90, 20,100);
	side2.shapeColor = color(255,0,0);

	this.image =loadImage(".vscode/dustbingreen.png");

        World.add(world,body);

    }
}
display() ; {

    
}
