var bg, car, cone, ground
var sadCar, tongueCar, finish
var Play=1
var End=0
var gameState=Play

function preload(){
carImg=loadImage("car.png")
bgImg=loadImage("bg.jpg")
coneImg=loadImage("cone.png")
sadCarImg=loadImage("sadMcqueen.png")
finishImg=loadImage("finish-line.png")
happyCarImg=loadImage("happyMcqueen.png")
}

function setup() {
  createCanvas(1400,700);


  bg=createSprite(750,350,50,50)
  bg.addImage(bgImg)
  bg.scale=6

  car=createSprite(100,650,50,50)
  car.addImage(carImg)
  car.scale=.5
  car.setCollider("rectangle",0,0,200,80)
  car.debug=true

  cone=createSprite(2000,650,50,50)
  cone.addImage(coneImg)
  cone.scale=.4
  cone.setCollider("rectangle",0,0,200,80)
  cone.debug=true

  ground=createSprite(700,700,1400,10)

  sadCar=createSprite(700,350,50,50)
  sadCar.addImage(sadCarImg)
  sadCar.scale=.9 

  finish=createSprite(2500,650,50,50)
  finish.addImage(finishImg)
  finish.scale=.7

  tongueCar=createSprite(700,350,50,50)
  tongueCar.addImage(happyCarImg)
}

function draw() {
  if(gameState===Play){
 
    car.visible=true

    if(bg.x<600){
      bg.x=700
    }

    bg.velocityX=-6

    cone.visible=true

    cone.velocityX=-3

    finish.velocityX=-3

    ground.visible=false

    sadCar.visible=false

    tongueCar.visible=false

    if(keyDown("Up") && car.y>=400){
      car.velocityY=-3
    }

    car.velocityY=car.velocityY+0.2

    if(keyDown("Right")){
      car.velocityX=3
    }

    if(car.isTouching(cone)){
      sadCar.visible=true
      gameState=End
    }

    if(car.isTouching(finish)){
     tongueCar.visible=true
     gameState=End
    }

    




  }

  if(gameState===End){

    bg.velocityX=0
    car.velocityX=0
    car.velocityY=0

    cone.velocityX=0
    finish.velocityX=0

    cone.visible=false
    car.visible=false
    finish.visible=false




  }



car.collide(ground)



  drawSprites();
}