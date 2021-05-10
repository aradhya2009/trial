//Create variables here
var Dog, happyDog, database, foodS, foodStock;
var food;

function preload()
{
  //load images here
  Dog= loadImage("Dog.png");
  happyDog= loadImage("happydog.png");

}

function setup() {
  database=firebase.database;

  createCanvas(500, 500);

  dog= createSprite(50,50,20,25);
  dog.addImage(Dog);
  dog.scale= 0.2

foodStock = database.ref('Food');
foodStock.on("value",readStock);
textSize=20;

}

function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  
  fill(255,255,254);
  text("Food remaining:" + foodS,170,200);
  textSize(13);

  //add styles here

  fill("white");
  stroke(2);
  text("Note: Press UP ARROW KEY TO FEED DRAGO MILK");
 
}

   function readStock(data) {
     foodS= data.val();
   }

   function writeStock(x) {

    if(x<0) {
      x=0;
    } else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })

   }

