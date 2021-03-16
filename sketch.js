//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage;
var database;

function preload()
{
	dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  
  dog =createSprite(300,300,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.2

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyIsDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  }
  drawSprites();
  textSize(13)
  fill('white');
  text('FOOD REMAINING:'+foodS, 170,200);
  
}




function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0 ;
}
else{
  x = x-1
}
  database.ref('/').update({
    food:x
  })
}

