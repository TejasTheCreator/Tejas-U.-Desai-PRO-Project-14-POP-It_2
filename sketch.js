var bow , arrow,  scene, arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var golden_balloonImage, birdAnimation, bombImage;
var red, blue, green, pink, golden, bomb, bird, redB, greenB, pinkB, blueB, goldenB ,birdGroup, bombGroup;
var score=0;
var color, random_color;
var lives= 3;


function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  bombImage = loadImage("bomb.png");
  birdAnimation = loadAnimation("bird0.png", "bird1.png", "bird2.png", "bird3.png", );
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  golden_balloonImage = loadImage("golden_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  goldenB= new Group();
  bombGroup= new Group();
  birdGroup= new Group();
  arrowGroup= new Group();   
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  var odds = Math.round(random(1, 25));

  color = ["Red","Orange","yellow","green","cyan","blue","magenta","violet", "purple"]
  random_color = Math.round(random(0, 8))

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    } 
    }
    if (World.frameCount % 130 == 0) {
      print("Current odd number is " + odds + ".");
      if (odds == 1) {
        goldenBalloon();
        if (World.frameCount % 30 == 0)
        {
          golden.visible = true;
        }
        else{
          golden.visible = false;
        }
      }
      else if (odds >= 2 && odds < 13) {
        createBird();
      }
      else if (odds >= 13){
        createBomb();
      }  
  }
    
  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(goldenB)) {
    goldenB.destroyEach();
    score=score+100
  }
  
  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(bombGroup)) {
    bombGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  }

  if (arrowGroup.isTouching(birdGroup)) {
    birdGroup.destroyEach();
    score=score-10;
  }

  drawSprites();
  if (score >= 100){
    fill(color[random_color]);
  }
  text("Score: "+ score, 300,50);
}

// Creating  arrows for bow
 function createArrow() {
  if(frameCount % 25 == 0){
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  }
}

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
 }

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}

function createBomb() {
  bomb = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bomb.addImage(bombImage);
  bomb.velocityX = 5;
  bomb.lifetime = 150;
  bomb.scale = 0.2;
  bombGroup.add(bomb);
 }

 function goldenBalloon() {
  golden = createSprite(0,Math.round(random(20, 370)), 10, 10);
  golden.addImage(golden_balloonImage);
  golden.velocityX = 9;
  golden.lifetime = 100;
  golden.scale = 1.2;
  goldenB.add(golden);
 }

 function createBird() {
  bird = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bird.addAnimation("bird_flying",birdAnimation);
  bird.velocityX = 3;
  bird.lifetime = 150;
  bird.scale = 0.15;
  birdGroup.add(bird);
 }
