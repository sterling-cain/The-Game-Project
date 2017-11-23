/*

The Game Project 5 - Making a complete level

Week 7

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var realPos;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var clouds;
var mountains;
var trees;
var housexs;
var houseY

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    houseY = floorPos_y-200;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	realPos = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;

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
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.
    push();
    translate(scrollPos*0.1, 0);
    
    for (i = 0; i < clouds.length; i++)
    {
        noStroke();
        fill(255);
        ellipse(clouds[i].pos_x,clouds[i].pos_y,100,100);
        ellipse(clouds[i].pos_x +50,clouds[i].pos_y,80,80);
        ellipse(clouds[i].pos_x -50,clouds[i].pos_y,80,80);
    //        console.log("Drew cloud", i)
    }
    
    // Draw mountains.
    push();
    translate(scrollPos*0.25, 0);
    for (i = 0; i < mountains.length; i++)
    {
        stroke(100);
        fill(150);
        triangle(
            mountains[i].pos_x-200,floorPos_y,
            mountains[i].pos_x,floorPos_y-mountains[i].height,
            mountains[i].pos_x+200,floorPos_y);
//        console.log("Drew mountiain", i)

    }
    pop();
    
    // Draw trees.
    push();
    translate(scrollPos*0.5, 0);
    for (i = 0; i < trees.length; i++)
    {
        noStroke();
        fill(128, 0, 0);
        rect(trees[i].pos_x, trees[i].height, 50, (floorPos_y - trees[i].height)) // base
        
        fill(0, 255, 0);
        ellipse(trees[i].pos_x+25,trees[i].height+70,100,100);
        ellipse(trees[i].pos_x-20,trees[i].height+50,100,100);
        ellipse(trees[i].pos_x+70,trees[i].height+50,100,100);
        ellipse(trees[i].pos_x-20,trees[i].height-0,100,100);
        ellipse(trees[i].pos_x+70,trees[i].height-0,100,100);
        ellipse(trees[i].pos_x+25,trees[i].height-30,100,100);
//        console.log("Drew tree", i)
    }
    pop();

    // Draw houses.
    push();
    translate(scrollPos, 0);
    for (i = 0; i < houseXs.length; i++)
    {
        noStroke();
        fill(255,182,193);
        rect(houseXs[i],houseY,200,200);
        fill(255,0,0);
        rect(houseXs[i]+90,houseY+140,30,60);
        fill(100,155,255);
        rect(houseXs[i]+20,houseY+50,60,50);
        rect(houseXs[i]+120,houseY+50,60,50);
//        console.log("Drew House ", i)
    }
    pop();

	// Draw canyons.

	// Draw pickup items.

	//the game character
    drawGameChar()
    

	// Update real position of gameChar for collision detection.
	realPos = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

		// console.log(keyCode);
		// console.log(key);

	if(key == 'A' || keyCode == 37)
	{
			isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
			isRight = true;
	}

	if(key == ' ' || key == 'W')
	{
			if(!isJumping)
			{
					gameChar_y -= 100;
			}
	}
}

function keyReleased(){

	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)

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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)

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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)

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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)
        

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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)


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
//        console.log("X: ",gameChar_x)
//        console.log("Y: ",gameChar_y)
    }
	// Logic to make the game character move or the background scroll.
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

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
			gameChar_y += 2;
			isJumping = true;
	}
	else
	{
			isJumping = false;
	}

	if(isFalling)
	{
			gameChar_y += 5;
	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

// Function to draw mountains objects.

// Function to draw trees objects.

// Function to draw houses objects.


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

}

// ----------------------------------
// Pick-up render and check functions
// ----------------------------------

// Function to draw pick-up objects.

// Function to check character has picked up an item.
