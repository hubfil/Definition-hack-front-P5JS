//what do u want to tell people
var welcomeText = "сделал кнопки. и таймер высыхания земли"


//images close map glScale
var imgBack
var imgLemon;
var imgOrange;
var imgPomelo;
var imgTree
var imgSoilGood;
var imgSoilBad
var imgWin

//image far map glScale
var imgLemonFar;
var imgTreeFar;
var imgSoilGoodFar;
var imgSoilBadFar;

// instruments
var imgwaterCan
var imgharvester

//arrays
var fruitCount = 50
var fruitArr = []

//Core values
var allPlaced;
var chosenLeaf = 0;
var scoreCount = 0
var isCollected = []
var isPlaced = []
var isWatered = true
var waterTimer = 8
var maxWaterTimer = 8
let allCollected = false


//GUI values
var bgScale = 200 //background scale
var glScale = 1   //global scale


var circs = [];
var numCircs = 30;
var treeСrown = 0.4
var cir;


var ranVector = diam => number * number;

class Fruit {
  constructor(type, x, y, d) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.d = d;
  }
}


function preload() {
	console.log("preload Started")
    imgBack = loadImage('background.png'); 
	imgLemon = loadImage('lemon.png');
    imgLemon = loadImage('lemon.png');
    imgLemon = loadImage('lemon.png');
  	imgTree = loadImage('tree_big.png'); 
	imgSoilGood = loadImage('ground_good_big.png'); 
  	imgSoilBad = loadImage('ground_bad_big.png'); 
    imgWin = loadImage('win.jpg'); 

	imgLemonFar = loadImage('leaf.png'); 
  	imgTreeFar = loadImage('tree_big.png'); 
	imgSoilGoodFar = loadImage('ground_good_big.png'); 
  	imgSoilBadFar = loadImage('ground_bad_big.png'); 
  
  //instr
  imgwaterCan  = loadImage('leaf.png');
  imgharvester = loadImage('waterCan.png');


}


function setup() {
	
	
	createCanvas(displayWidth - 20, displayHeight - 20);
    glScale = 1500 / displayHeight
    console.log("glScale = " + glScale)
  createFruits()
  instrumentPlace()


  

}


function drawBackImages() {
  for (j = 0; j < height; j += bgScale)
    {
        for (i = 0; i < width; i += bgScale )
          image(imgBack, i,j,bgScale,bgScale)
    }
  push()
  scale(1/glScale)
  image(imgTree, 100,200, 800,800)
  if (isWatered)
    {
      image (imgSoilGood,250, 500, 500,800)
    }
  else
    {
      image (imgSoilBad, 250, 500, 500,800)
    }
  strokeWeight(10)
  point(100 + 400,200+ 400) //центральная точка кроны
  pop()
}


function createFruits(){
  for (i = 0; i < fruitCount; i++){
    tempVector = randomVector(500/glScale)
    fruitArr[i] = new Fruit(1, tempVector.x, tempVector.y, random(12,60)); 
    //console.log(tempVector)
  }
}

function drawFruits()
{
  push()
  
  scale(1/glScale)
  translate(100 + 400,70+ 400)
  for (i = 0; i < fruitCount; i++){
  if (fruitArr[i].type == 1)
      image(imgLemon, fruitArr[i].x, fruitArr[i].y, fruitArr[i].d,fruitArr[i].d)
  }
  pop()
}


function draw(){
    drawBackImages()
	drawFruits()
	
  
    UI()

    instrumentDraw()
    isWatered = waterTimer > 0
  if (waterTimer > 0){
        waterTimer -= deltaTime/1000;
    }
}


function instrumentPlace()
{
  harButton = new Clickable();
  harButton.locate(20, height-194);  
  harButton.text = "harButton"  
  harButton.textScaled = true;       
  harButton.image = imgharvester
  harButton.fitImage = true; 
  harButton.resize(250, 90);
  waterButton = new Clickable(); 
  waterButton.locate(20, height-92); 
  waterButton.text = "waterButton" 
  waterButton.textScaled = true;       
  waterButton.image = imgwaterCan
  waterButton.fitImage = true; 
  waterButton.resize(250, 90);
  
  harButton.onPress = function(){
  if (fruitCount > 0)
    {
      fruitCount--
      scoreCount += random(1,3)
    }  
  console.log("harButton have been pressed!");
  }
  
  waterButton.onPress = function(){
  isWatered = true
  waterTimer = maxWaterTimer
  console.log("waterButton have been pressed!");
}
}

function instrumentDraw()
{
  fill (400)
  rect (0, height-200 , width , 200)
  harButton.draw()
  waterButton.draw()
 
  
  scale(1/glScale)
  textSize(28)
  fill (0)
  text (welcomeText, 20,20,width * 0.5 , 130)
  

}




function keyPressed() {
  if (fruitCount > 0)
    fruitCount--
}




function UI()
{
  push()
  scale(1/glScale)
  textSize(28)
  fill (200)
  rect (0, 0 , width * 0.5 , 150)
  fill (0)
  text (welcomeText, 20,20,width * 0.5 , 130)
  
  noStroke()
  fill (200)
  rect (width - 200, 0 , width * 0.2 , 200)
  
  fill(0)
  text("Score = " + round(scoreCount), width - 180 , 40, 200)
  text("isWatered = " + isWatered, width - 180 , 70, 200)
    text("waterTimer = " + waterTimer, width - 180 , 130, 200)
  
  pop()
}
  
  
function randomVector(diam) {
  let angle = Math.random() * 2 * PI;
  let length = random(0, diam);
  return {x: length * Math.cos(angle), y: length * Math.sin(angle)};
}