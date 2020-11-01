
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200); 
  console.log(score)
 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale= 0.1


  ground = createSprite(200,190,10000,20);
  ground.x = ground.width /2; 
  
  FoodGroup= createGroup();
  obstacleGroup= createGroup();
  
}


function draw() {
  background ("white")
//  console.log(monkey.y)
  
  stroke ("Black")
  fill ("black")
  textSize (20)
  textFont ("Poppins")
  score = Math.ceil(frameCount/frameRate())
  text ("Survival Time: "+ score, 200, 50)
  
  ground.velocityX = -6
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  

  
  if(keyDown("space")&& monkey.y >= 145) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)

 spawnObstacles();  
 spawnBananas() 
 drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.scale = 0.2
   obstacle.velocityX = -6 
  
   obstacle.addImage(obstaceImage);   
  
    }

}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 110 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1 ;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
 
   FoodGroup.add(banana)
 
  }
}

