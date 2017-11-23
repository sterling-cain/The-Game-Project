/*

The Game Project

Week 2 part b

*/

var floorPos_y;
var posX;
var posY;
var housX;
var housY;
var Mountain;
var Tree;
var Snow;

function setup() 
{
    createCanvas(1024, 576);
    floorPos_y = height*3/4; //NB. we are now using a variable for the floor position
    posX = width/2;
    posY = floorPos_y;
    houseX = random(0,500);
    houseY = floorPos_y-200;
    
    Mountain = {x_pos:800, height:400}
    Snow = {Ypos: floorPos_y - Mountain.height}

    Tree = {x_pos: 500, height: 100};
    Tree2 = {x_pos: 300, height: 200};
    Tree3 = {x_pos: 100, height: 150};


}

function draw() 
{    
    background(100, 155, 255); //fill the sky blue
    
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    { // mountain
    noStroke();
    fill(150);
    triangle(
        Mountain.x_pos-200,floorPos_y, Mountain.x_pos,floorPos_y-Mountain.height, Mountain.x_pos+200,floorPos_y);
    fill(255);
    triangle(
        Mountain.x_pos-35,Snow.Ypos+70, Mountain.x_pos,Snow.Ypos, Mountain.x_pos+35,Snow.Ypos+70);
    }
    
    { // cloud
    noStroke();
    fill(255);
    ellipse(200,100,100,100);
    ellipse(250,100,80,80);
    ellipse(150,100,80,80);
    
    noStroke();
    fill(170);
    ellipse(200+200,100-30,100,100);
    ellipse(250+200,100-30,80,80);
    ellipse(150+200,100-30,80,80);
    

    noStroke();
    fill(128);
    ellipse(200+450,100+30,100,100);
    ellipse(250+450,100+30,80,80);
    ellipse(150+450,100+30,80,80);
    }
    
    { //tree
    noStroke();
    fill(128, 0, 0);
    rect(Tree.x_pos, Tree.height, 50, (floorPos_y - Tree.height)) // base
    fill(255,165,0);
    ellipse(Tree.x_pos+25,Tree.height+70,100,100);
    ellipse(Tree.x_pos-20,Tree.height+50,100,100);
    ellipse(Tree.x_pos+70,Tree.height+50,100,100);
    ellipse(Tree.x_pos-20,Tree.height-0,100,100);
    ellipse(Tree.x_pos+70,Tree.height-0,100,100);
    ellipse(Tree.x_pos+25,Tree.height-30,100,100);
    
    
    noStroke();
    fill(128, 0, 0);
    rect(Tree2.x_pos, Tree2.height, 50, (floorPos_y - Tree2.height)) // base
    fill(50, 0, 13);
    ellipse(Tree2.x_pos+25,Tree2.height+70,100,100);
    ellipse(Tree2.x_pos-20,Tree2.height+50,100,100);
    ellipse(Tree2.x_pos+70,Tree2.height+50,100,100);
    ellipse(Tree2.x_pos-20,Tree2.height-0,100,100);
    ellipse(Tree2.x_pos+70,Tree2.height-0,100,100);
    ellipse(Tree2.x_pos+25,Tree2.height-30,100,100);
    
    
    noStroke();
    fill(128, 0, 0);
    rect(Tree3.x_pos, Tree3.height, 50, (floorPos_y - Tree3.height)) // base
    fill(0, 255, 0);
    ellipse(Tree3.x_pos+25,Tree3.height+70,100,100);
    ellipse(Tree3.x_pos-20,Tree3.height+50,100,100);
    ellipse(Tree3.x_pos+70,Tree3.height+50,100,100);
    ellipse(Tree3.x_pos-20,Tree3.height-0,100,100);
    ellipse(Tree3.x_pos+70,Tree3.height-0,100,100);
    ellipse(Tree3.x_pos+25,Tree3.height-30,100,100);
    }
    
    { // house
    noStroke();
    fill(128);
    rect(houseX,houseY,200,200);
    fill(139,69,19);
    rect(houseX+169,houseY+140,30,60);
    fill(100,155,255);
    rect(houseX+25,houseY+50,75,50);
    rect(houseX+150,houseY+50,50,50);
    }
    

    
    { // charles
    stroke(0)

    fill(255,182,193)
    ellipse(posX,posY-26, 20,20) // head
    
    fill(0,0,255)
    ellipse(posX,posY, 20,30) // body
    
    fill(0)
    ellipse(posX+9,posY+22, 20,10) // right foot
    ellipse(posX-6,posY+22, 20,10) // left foot 
    fill(255,182,193)
    ellipse(posX-16,posY, 10,10) // left hand
    ellipse(posX+16,posY, 10,10) // right hand
    }
    
}

function mousePressed()
{
    posX = mouseX
    posY = mouseY
}

