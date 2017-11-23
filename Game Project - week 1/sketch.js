/*

The Game Project

Week 1 - part b

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the comments below. The items should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.


*/

function setup() 
{
    createCanvas(innerWidth,innerHeight);
}

function draw() 
{    
    background(100,155,255);//fill the sky blue
    
    noStroke();
    fill(0,155,0); 
    rect(0, height * 3/4,width, height/4); //draw some green ground

    
    //1. a cloud in the sky 
    
    noStroke();
    fill(255);
    ellipse(200,100,100,100);
    ellipse(250,100,80,80);
    ellipse(150,100,80,80);
    
    //To-Do: Make cloud into a function
    
    //2. a mountain in the distance
    
    noStroke();
    fill(150);
    triangle(520,497, 650,200, 780,497);
    fill(255);
    triangle(607,300, 650,200, 692,300);
    
    //3. a tree 
    
    noStroke();
    fill(128, 0, 0);
    rect(800, 300, 50, 230)
    fill(0, 255, 0);
    ellipse(825,340,100,100);
    ellipse(780,320,100,100);
    ellipse(870,320,100,100);
    ellipse(780,270,100,100);
    ellipse(870,270,100,100);
    ellipse(825,240,100,100);
    
    //4. a house
    //... add your code here
    
    noStroke();
    fill(128);
    //fill(139,69,19);
    rect(0,300,200,200);
    fill(139,69,19);
    rect(169,440,30,60);
    fill(100,155,255);
    rect(25,350,75,50);
    rect(150,350,50,50);
    
    //5. another foreground item of your choice
    //... add your code here
   
    fill(255);
    fill(255,255,0);
    ellipse(400,450,50,50);
    fill(238,177,17);
    rect(395,435,10,30);
    
    
    
}