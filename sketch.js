var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
//  drawimage(ball.png);
  ball=loadImage("ball.png");
  paddle=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball1=createSprite(50,200,30,30);
  ball1.addImage("ball2",ball);
  paddle1=createSprite(350,200,15,100);
  paddle1.addImage("paddle2",paddle);
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball1.velocityX=7;
  ball1.velocityY=-7;
  

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /*topEdge=createEdgeSprites;
  bottomEdge=createEdgeSprites;
  leftEdge=createEdgeSprites;*/
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 ball1.bounceOff(edges[0]);
 ball1.bounceOff(edges[2]);
 ball1.bounceOff(edges[3]); 
/* Allow the ball to bounceoff from the paddle */
  ball1.bounceOff(paddle1);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle1.bounceOff(edges[2]);
  paddle1.bounceOff(edges[3]);
  if(keyDown(UP_ARROW))
  {
    paddle1.velocityY=-6;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle1.velocityY=6;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

