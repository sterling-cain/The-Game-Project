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
var rainX = 10;
var rainY = 20;
var rainX2 = 10;
var rainY2 = 20;
var collect = false

var canyon = {x_pos: 300, width: 100};
var coin = {x_pos: 107, y_pos: 432, size: 50, isFound: false};

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
        
    //the ground
    stroke(1);
    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y);
    
    //draw the canyon
    fill(50,50,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);
    
    //the game character
    if(isLeft && isJumping)
    {
        // add your jumping-left code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26, 20,20) // head

        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y, 20,30) // body

        fill(0)
        ellipse(gameChar_x +4,gameChar_y +27, 20,10) // right foot
        ellipse(gameChar_x -6,gameChar_y +27, 20,10) // left foot 
        fill(255,182,193)
        ellipse(gameChar_x-11,gameChar_y -15, 10,10) // left hand
        ellipse(gameChar_x +9,gameChar_y -15, 10,10) // right hand
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26, 20,20) // head

        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y, 20,30) // body

        fill(0)
        ellipse(gameChar_x +9,gameChar_y +27, 20,10) // right foot
        ellipse(gameChar_x -1,gameChar_y +27, 20,10) // left foot 
        fill(255,182,193)
        ellipse(gameChar_x -11,gameChar_y -15, 10,10) // left hand
        ellipse(gameChar_x +9,gameChar_y -15, 10,10) // right hand
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)

    }
    else if(isLeft)
    {
        // add your walking left code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26, 20,20) // head
        
        ellipse(gameChar_x -10,gameChar_y, 10,10) // right hand
        
        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y, 20,30) // body

        fill(0)
        ellipse(gameChar_x -1,gameChar_y +22, 20,10) // right foot
        ellipse(gameChar_x -11,gameChar_y +22, 20,10) // left foot 
        
        fill(255,182,193)
        ellipse(gameChar_x +10,gameChar_y, 10,10) // left hand
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)

    }
    else if(isRight)
    {
        // add your walking right code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26, 20,20) // head
        ellipse(gameChar_x +10,gameChar_y, 10,10) // right hand

        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y , 20,30) // body
        
        fill(255,182,193)
        ellipse(gameChar_x -10,gameChar_y, 10,10) // left hand

        fill(0)
        ellipse(gameChar_x +9,gameChar_y +22, 20,10) // right foot
        ellipse(gameChar_x -1,gameChar_y +22, 20,10) // left foot 
        fill(255,182,193)
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)
        

    }
    else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
        stroke(0)

        fill(255,182,193)
        ellipse(gameChar_x,gameChar_y -26, 20,20) // head

        fill(0,0,255)
        ellipse(gameChar_x,gameChar_y, 20,30) // body

        fill(0)
        ellipse(gameChar_x +9,gameChar_y +27, 20,10) // right foot
        ellipse(gameChar_x -6,gameChar_y +27, 20,10) // left foot 
        fill(255,182,193)
        ellipse(gameChar_x -16,gameChar_y-15, 10,10) // left hand
        ellipse(gameChar_x +16,gameChar_y-15, 10,10) // right hand
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)


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
        console.log("X: ",gameChar_x)
        console.log("Y: ",gameChar_y)
    }
    
//    //fall down canyon
//    if(gameChar_x == canyon.x_pos)
//    {
//       isFalling = true
//       gameChar_y += 10
//    }
    
    //coin creation
    if(!coin.isFound)
    {
        noStroke()
        fill(255,255,0);
        ellipse(coin.x_pos,coin.y_pos,50,50);
        fill(238,177,17);
        rect(coin.x_pos -5,coin.y_pos -15,10,30);    
    }
    
    //coin collection
    if(gameChar_x == coin.x_pos && gameChar_y == coin.y_pos)
    {
        collect = true
        coin.isFound = true
    }
    
    //character movement
    if(isLeft)
    {
        gameChar_x -= 5
    }
    
    if(isRight)
    {
        gameChar_x += 5
    }
    if(isJumping)
       {
            gameChar_y -= 10;
       }
    if(!isJumping && gameChar_y != floorPos_y)
    {
        gameChar_y += 10
    }
}


function keyPressed()
{
    
    if(key == 'A')
    {
        isLeft = true;
        //console.log("Left");
    }
    else if(key == 'D')
    {   
        isRight = true;
        //console.log("Right");
    }
    else if(key == 'W')
    {
        isJumping = true;
        //console.log("Jump");
    }
    
}


function keyReleased()
{
    if(key == 'A')
    {
        isLeft = false;
        //console.log("Left Off")
    }
    else if(key == 'D')
    {   
        isRight = false;
        //console.log("Right Off")
    }
    else if(key == 'W')
    {
        isJumping = false;
        //console.log("Jump Off")
    }
    
}
