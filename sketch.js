let randX = 0;
let randY = 0;
let randColor;
function setup() {
  randColor = color(255,255,255)
  createCanvas(400, 400);


}

function draw() {
  background(randColor);
  

  
  
// info for cat's head and ears
fill(220, 176, 29)
ellipse(200,200,100,100,100)
triangle(150, 190, 150, 140, 200, 150);
triangle(250, 190, 250, 140, 200, 150);

//info for cat's mouth
fill(1);  
ellipse(200, 230, 50, 20);

//info for cats left/right eye
fill(255, 255, 255);  
ellipse(175, 190, 20, 20);
ellipse(225, 190, 20, 20);


//info for cats pupils

fill(1)  
ellipse(175 , 190, 10, 10);
ellipse(225, 190, 10, 10);
  
// Move the mouse across the page
// to change its value
} 
function mouseMoved(){
  randColor = color(random(255), random(255), random(255));
  

}