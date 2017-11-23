/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x = 250;
var gameChar_y = 250;
var floorPos_y;
var isLeft = false;
var isRight = false;
var isJumping = false;
var isFalling = false;

var jewel = {x_pos: 100, y_pos: 100, size: 50, isFound: false};
var canyon = {x_pos: 300, width: 100};

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
}

function draw()
{
    background(100,155,255); //fill the sky blue

    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


    //draw the canyon
    fill(50,50,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);


    //the game character
    if(isLeft && isJumping)
    {
        // add your jumping-left code
        stroke(0)

        fill(255,182,193)
        ellipse(46+200,74+400, 20,20) // head

        fill(0,0,255)
        ellipse(46+200,100+400, 20,30) // body

        fill(0)
        ellipse(55+195,122+405, 20,10) // right foot
        ellipse(40+200,122+405, 20,10) // left foot 
        fill(255,182,193)
        ellipse(30+200,100+385, 10,10) // left hand
        ellipse(62+195,100+385, 10,10) // right hand

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
        stroke(0)

        fill(255,182,193)
        ellipse(46,74+400, 20,20) // head

        fill(0,0,255)
        ellipse(46,100+400, 20,30) // body

        fill(0)
        ellipse(55,122+405, 20,10) // right foot
        ellipse(40+5,122+405, 20,10) // left foot 
        fill(255,182,193)
        ellipse(30+5,100+385, 10,10) // left hand
        ellipse(62,100+385, 10,10) // right hand

    }
    else if(isLeft)
    {
        // add your walking left code
        stroke(0)

        fill(255,182,193)
        ellipse(46,74+200, 20,20) // head
        ellipse(65-30,100+200, 10,10) // right hand
        fill(0,0,255)
        ellipse(46,100+200, 20,30) // body

        fill(0)
        ellipse(55-10,122+200, 20,10) // right foot
        ellipse(45-10,122+200, 20,10) // left foot 
        fill(255,182,193)
        ellipse(30+25,100+200, 10,10) // left hand

    }
    else if(isRight)
    {
        // add your walking right code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x ,74, 20,20) // head
        ellipse(gameChar_x -16,100, 10,10) // left hand

        fill(0,0,255)
        ellipse(gameChar_x,100, 20,30) // body

        fill(0)
        ellipse(gameChar_x +9,122, 20,10) // right foot
        ellipse(gameChar_x -1,122, 20,10) // left foot 
        fill(255,182,193)
        ellipse(gameChar_x +19,100, 10,10) // right hand

    }
    else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
        stroke(0)

        fill(255,182,193)
        ellipse(46+200,74, 20,20) // head

        fill(0,0,255)
        ellipse(46+200,100, 20,30) // body

        fill(0)
        ellipse(55+200,122+5, 20,10) // right foot
        ellipse(40+200,122+5, 20,10) // left foot 
        fill(255,182,193)
        ellipse(30+200,100-15, 10,10) // left hand
        ellipse(62+200,100-15, 10,10) // right hand


    }
    else
    {
        // add your standing front facing code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26,20,20) // head

        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y,20,30) // body

        fill(0)
        ellipse(gameChar_x +9,gameChar_y +22,20,10) // right foot
        ellipse(gameChar_x -6,gameChar_y +22,20,10) // left foot 
        fill(255,182,193)
        ellipse(gameChar_x -16,gameChar_y,10,10) // left hand
        ellipse(gameChar_x +16,gameChar_y,10,10) // right hand


    }
    
    if(isLeft)
    {
        
    }
}


function keyPressed()
{
    
    if(key == 'A')
    {
        isLeft = true;
        console.log("Left")
    }
    else if(key == 'D')
    {   
        isRight = true;
        console.log("Right")
    }
    else if(key == 'W')
    {
        isThrust = true;
    }
    
}


function keyReleased()
{
    if(key == 'A')
    {
        isLeft = false;
        console.log("Left Off")
    }
    else if(key == 'D')
    {   
        isRight = false;
        console.log("Right Off")
    }
    
}
