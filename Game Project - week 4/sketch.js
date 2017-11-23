/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;
var clouds;
var mountains;
var trees;
var houseXs;
var houseY;

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    houseY = floorPos_y-200;
    // Boolean variables to control the movement of the game character.
    isLeft = false;
    isRight = false;

    // Variable to control the background scrolling.
    scrollPos = 0;

    // Initialise arrays of scenery objects.
    houseXs = [0,600];
    
    clouds = [];
    var c1 = {pos_x:100, pos_y:100};
    var c2 = {pos_x:500, pos_y:50};
    var c3 = {pos_x:800, pos_y:150};
    clouds.push(c1);
    clouds.push(c2);
    clouds.push(c3);
    
    mountains = [];
    var m1 = {pos_x: 100, height: (Math.random() * 300) + 200};
    var m2 = {pos_x: 228, height: (Math.random() * 300) + 200};
    var m3 = {pos_x: 250, height: (Math.random() * 300) + 200};
    var m4 = {pos_x: 390, height: (Math.random() * 300) + 200};
    var m5 = {pos_x: 515, height: (Math.random() * 300) + 200};
    var m6 = {pos_x: 677, height: (Math.random() * 300) + 200};
    var m7 = {pos_x: 800, height: (Math.random() * 300) + 200};
    var m8 = {pos_x: 950, height: (Math.random() * 300) + 200};
    var m1l = {pos_x: 100-1000, height: (Math.random() * 300) + 200};
    var m2l = {pos_x: 228-1000, height: (Math.random() * 300) + 200};
    var m3l = {pos_x: 250-1000, height: (Math.random() * 300) + 200};
    var m4l = {pos_x: 390-1000, height: (Math.random() * 300) + 200};
    var m5l = {pos_x: 515-1000, height: (Math.random() * 300) + 200};
    var m6l = {pos_x: 677-1000, height: (Math.random() * 300) + 200};
    var m7l = {pos_x: 800-1000, height: (Math.random() * 300) + 200};
    var m8l = {pos_x: 950-1000, height: (Math.random() * 300) + 200};
    var m1r = {pos_x: 100+1000, height: (Math.random() * 300) + 200};
    var m2r = {pos_x: 228+1000, height: (Math.random() * 300) + 200};
    var m3r = {pos_x: 250+1000, height: (Math.random() * 300) + 200};
    var m4r = {pos_x: 390+1000, height: (Math.random() * 300) + 200};
    var m5r = {pos_x: 515+1000, height: (Math.random() * 300) + 200};
    var m6r = {pos_x: 677+1000, height: (Math.random() * 300) + 200};
    var m7r = {pos_x: 800+1000, height: (Math.random() * 300) + 200};
    var m8r = {pos_x: 950+1000, height: (Math.random() * 300) + 200};

    mountains.push(m1);
    mountains.push(m1r);
    mountains.push(m1l)
    mountains.push(m2);
    mountains.push(m2r);
    mountains.push(m2l)
    mountains.push(m3);
    mountains.push(m3r);
    mountains.push(m3l)
    mountains.push(m4);
    mountains.push(m4r);
    mountains.push(m4l)
    mountains.push(m5);
    mountains.push(m5r);
    mountains.push(m5l)
    mountains.push(m6);
    mountains.push(m6r);
    mountains.push(m6l)
    mountains.push(m7);
    mountains.push(m7r);
    mountains.push(m7l)
    mountains.push(m8);
    mountains.push(m8r);
    mountains.push(m8l)
    trees = [];
    var t1 = {pos_x: 100, height:175};
    var t2 = {pos_x: 256, height:182};
    var t3 = {pos_x: 500, height:153};
    var t4 = {pos_x: 700, height:125};
    trees.push(t1);
    trees.push(t2);
    trees.push(t3);
    trees.push(t4);
}

function draw()
{
    background(100, 155, 255); //fill the sky blue

    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height/4); //draw some green ground
    
    
    }
    pop();

    // Draw the game character.
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


    if(isLeft)
    {
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 5;
        }
        else
        {
            scrollPos += 5;
        }
    }

    if(isRight)
    {
        if(gameChar_x < width * 0.8)
        {
            gameChar_x  += 5;
        }
        else
        {
            scrollPos -= 5; // negative for moving against the background
        }

    }
}

function keyPressed()
{

    if(key == "A" || keyCode == 37)
    {
        isLeft = true;
    }

    if(key == "D" || keyCode == 39)
    {
        isRight = true;
    }

}

function keyReleased()
{
    if(key == "A" || keyCode == 37)
    {
        isLeft = false;
    }

    if(key == "D" || keyCode == 39)
    {
        isRight = false;
    }
}
