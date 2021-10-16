var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieIMG, zombie, zombieGroup, zombieFasterGroup, zombieGiantGroup;
var zombieFaster,zombieFasterIMG, zombieGiant, zombieGiantIMG;
var bulletIMG,bullet,bulletGroup;
var score = 0;

function preload(){
  
  shooterImg = loadAnimation("assets/shooter_1.png","assets/shooter_2.png","assets/shooter_5.png");

  bgImg = loadImage("assets/graveyard2.jpg");

  zombieIMG = loadImage("assets/zombie.png");

  zombieFasterIMG  = loadImage("assets/faster.png");

  zombieGiantIMG = loadImage("assets/giant.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;
bg.velocityX = -2;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-200, 50, 50);
 player.addAnimation("shooter",shooterImg);
   //player.scale = 0.3
 //  player.debug = true
   player.setCollider("rectangle",0,0,300,300);

   zombieGroup = new Group();
   zombieFasterGroup = new Group();
   zombieGiantGroup = new Group();
   bulletGroup = new Group();

}

function draw() {
  background(0); 

console.log(bg.x);
  
if(bg.x < 170){

  bg.x= width;
}

spawnBullets();

spawnZombie();

spawnZombieFaster();

spawnZombieGiant();

if(zombieGroup.isTouching(bulletGroup)){

  bulletGroup.destroyEach();
  zombieGroup.destroyEach();
  score = score + 5;

}

if(zombieFasterGroup.isTouching(bulletGroup)){

  bulletGroup.destroyEach();
  zombieFasterGroup.destroyEach();
  score = score + 5;

}
if(zombieGiantGroup.isTouching(bulletGroup)){

  bulletGroup.destroyEach();
  zombieGiantGroup.destroyEach();
  score = score + 10;

}

drawSprites();

textSize(40);
fill("white");
text("SCORE : "+ score, width-300, 100);

}

function spawnZombie(){

  if(frameCount % 225 === 0 ){
  zombie = createSprite(width-200,height-500);
  zombie.addImage(zombieIMG);
  zombie.scale = 0.4;
  zombie.velocityX = -4;
  zombie.lifeTime = 300;
  zombie.debug = true;
  zombie.setCollider('rectangle',0,0,200,400);
  zombieGroup.add(zombie);
  }
}

function spawnBullets(){

if(keyWentDown("space")){
 bullet = createSprite(550,550,25,10);
 bullet.shapeColor = "red";
 bullet.velocityX = 20;
 bullet.lifeTime = 200;
 bulletGroup.add(bullet);
 bullet.debug = true;

}
}

function spawnZombieFaster(){

  if(frameCount % 500 === 0 ){
  zombieFaster = createSprite(width-200,height-500);
  zombieFaster.addImage(zombieFasterIMG);
  zombieFaster.scale = 0.5;
  zombieFaster.velocityX = -8;
  zombieFaster.lifeTime = 200;
  zombieFaster.debug = true;
  zombieFaster.setCollider('rectangle',0,0,200,400);
  zombieFasterGroup.add(zombieFaster);
  }
}

function spawnZombieGiant(){

  if(frameCount % 700 === 0 ){
  zombieGiant = createSprite(width-200,height-500);
  zombieGiant.addImage(zombieGiantIMG);
  zombieGiant.scale = 0.9
  zombieGiant.velocityX = -4;
  zombieGiant.lifeTime = 500;
  zombieGiant.debug = true;
  zombieGiant.setCollider('rectangle',0,0,200,400);
  zombieGiantGroup.add(zombieGiant);
  }
}
