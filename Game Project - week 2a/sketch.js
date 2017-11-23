/*

The Game Project

Week 2 - part a

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used lots of shape functions to create a detailed
game character

** Only submit your sketch.js **

*/

function setup()
{
    createCanvas(400, 600);
}

function draw()
{
    background(255);

    //Standing, facing frontwards
    stroke(100);
    noFill();
    rect(20, 60, 50, 80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    //Add your code here ...
    stroke(0)

    fill(255,182,193)
    ellipse(46,74, 20,20) // head
    
    fill(0,0,255)
    ellipse(46,100, 20,30) // body
    
    fill(0)
    ellipse(55,122, 20,10) // right foot
    ellipse(40,122, 20,10) // left foot 
    fill(255,182,193)
    ellipse(30,100, 10,10) // left hand
    ellipse(62,100, 10,10) // right hand

    //Jumping facing forwards
    stroke(100);
    noFill();
    rect(220, 60, 50, 80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 220, 160);

    //Add your code here ...
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



    //Walking, turned left
    stroke(100);
    noFill();
    rect(20, 260, 50, 80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    //Add your code here ...
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
    


    //Walking, turned right
    stroke(100);
    noFill();
    rect(220, 260, 50, 80);
    noStroke();
    fill(0);
    text("4. Walking right", 220, 360);

    //Add your code here ...
    stroke(0)

    fill(255,182,193)
    ellipse(46+200,74+200, 20,20) // head
    ellipse(30+225,100+200, 10,10) // left hand

    fill(0,0,255)
    ellipse(46+200,100+200, 20,30) // body
    
    fill(0)
    ellipse(55+200,122+200, 20,10) // right foot
    ellipse(45+200,122+200, 20,10) // left foot 
    fill(255,182,193)
    ellipse(65+170,100+200, 10,10) // right hand



    //Jumping right
    stroke(100);
    noFill();
    rect(20, 460, 50, 80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    //Add your code here ...
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


    //Jumping to the left
    stroke(100);
    noFill();
    rect(220, 460, 50, 80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 220, 560);

    //Add your code here ...
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
