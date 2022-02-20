//what do u want to tell people
var welcomeText = "масштаб бета"

/*
FruitTypes
0 - нет фруктов
1 - лимон
2 - оранж
3 - помело

//treeTypes
0 - засохшее
1 - семечко
2 - росток
3 - взрослое
4 - кнопка AddTree
*/

//images close map glScale
var imgBack
var imgLemon;
var imgOrange;
var imgPomelo;
var imgTree
var imgSoilGood;
var imgSoilBad
var imgWin
var imgPot

//image far map glScale
var imgLemonFar;
var imgTreeFar;
var imgSoilGoodFar;
var imgSoilBadFar;
var imgPotFar

// instruments
var imgwaterCan
var imgharvester

//arrays
var fruitCount = 10
var fruitArr = []
var treeCount = 5
var treeArr = []
var treeChosen = 0
var treeButton = []

//Core values
var isCloseScale = false
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

class Tree {
    constructor(type, fruitCount, waterTimer, state) {
    this.type = type;
    this.fruitCount = fruitCount;
    this.waterTimer = waterTimer;
    this.state = state;
  }
}

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
    imgOrange = loadImage('orange.png');
    imgPomelo = loadImage('pomelo.png');
  	imgTree = loadImage('tree_big.png'); 
	imgSoilGood = loadImage('ground_good_big.png'); 
  	imgSoilBad = loadImage('ground_bad_big.png'); 
    imgPot = loadImage('pot_big.png');
    imgWin = loadImage('win.jpg'); 

	imgLemonFar = loadImage('leaf.png'); 
  	imgTreeFar = loadImage('tree_small.png'); 
	imgSoilGoodFar = loadImage('ground_good_big.png'); 
  	imgSoilBadFar = loadImage('ground_bad_big.png'); 
    imgPotFar = loadImage('pot_small.png');

  
  
  //instr
  imgwaterCan  = loadImage('leaf.png');
  imgharvester = loadImage('waterCan.png');


}

//============================================
//===================SETUP==================
//============================================

function setup() {
	
	
	createCanvas(displayWidth - 20, displayHeight * 0.7 - 20);
    glScale = 2000 / displayHeight
    console.log("glScale = " + glScale)
  if (!isCloseScale)
    {
      placeTrees()
      instrumentPlace() 
    }
  
  //createFruits()
  

}

function placeTrees(){
  tempScale = 6*0.45/glScale
  for (i = 0; i < treeCount; i++){
    treeArr[i] = new Tree(1, round(random(0,10)), maxWaterTimer, round(random(4))); 
    //console.log(treeArr[i])
    treeButton[i] = new Clickable();
    treeButton[i].onPress = function(){  
      console.log(i)
      treeButton[i].text = "dfsdf"
    }
    xOffset = i*1000 * tempScale
    treeButton[i].locate(xOffset * tempScale,2000 * tempScale);
    treeButton[i].resize(800* tempScale, 300 * tempScale)
    treeButton[i].text = "Inspect tree"+ i  
    treeButton[i].textSize = 90; 
    
  
    
  }
}

//============================================
//===================DRAW=====TREES===========
//============================================


function drawTrees(){
  push()
  scale(0.45/glScale)
  translate(0,400)
   for (i = 0; i < treeCount; i++){
    let xOffset = i*1000
    if (treeChosen == i)
      {
      fill(0,0)
      stroke(200,20,20)
      strokeWeight(40)
      rect(100 + xOffset,190, 800,1200)
        stroke(0)
        strokeWeight(1)

      }
    image(imgTreeFar, 100 + xOffset,200, 800,800)
  if (treeArr[i].waterTimer > 0)
    {
      image (imgSoilGoodFar,250 + xOffset, 500, 500,800)
    }
  else
    {
      image (imgSoilBadFar, 250 + xOffset, 500, 500,800)
    }
  image(imgPotFar, 100 + xOffset,500, 800,800)
  strokeWeight(10)
  point(100 + 400 + xOffset,200+ 400)
  fill(100)
  textSize(200)
  text ("tree #" + i, 150 + xOffset,1500)
  text (typeName(treeArr[i].type), 150 + xOffset,1700)
  text ((treeArr[i].fruitCount) + " шт", 150 + xOffset,1900)
treeButton[i].draw()

   }
  let xOffset = i*1000
  //addButton
  pop()

}

function drawBack()
{
    for (j = 0; j < height; j += bgScale)
    {
        for (i = 0; i < width; i += bgScale )
          image(imgBack, i,j,bgScale,bgScale)
    }
}


function drawCloseTree() {


  
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
  image(imgPot, 100,500, 800,800)
  strokeWeight(10)
  point(100 + 400,200+ 400) //центральная точка кроны
  pop()
}


function createFruits(){
  for (i = 0; i < fruitCount; i++){
    tempVector = randomVector(700/glScale)
    fruitArr[i] = new Fruit(1, tempVector.x, tempVector.y, random(12,60)); 
    //console.log(tempVector)
  }
  //удалим слишком высокие фрукты
  for (i = 0; i < fruitCount; i++){
    if (fruitArr[i].y < 300/glScale)
      fruitArr[i].y += 100;
  }
    for (i = 0; i < fruitCount; i++){
    if (fruitArr[i].y < 300/glScale)
      fruitArr[i].y += 50;
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

//============================================
//===================DRAW==================
//============================================


function draw(){

  if (window.trees) {
    treeArr = window.trees
  } else {
    treeArr = []
  }

  manageTrees()
    drawBack()
  if (!isCloseScale){
    drawTrees()
  }
  else {
    drawFruits()
    drawCloseTree()
  }
	
  
    UI()
  if (isCloseScale){
    instrumentDraw()
  }
  

}

function manageTrees()
{
  for (i = 0; i < treeCount; i++){

  if (treeArr[i].waterTimer > 0){
        treeArr[i].waterTimer -= deltaTime/1000;
    }
  }
    isWatered = treeArr[treeChosen].waterTimer > 0
  if (treeArr[treeChosen].waterTimer > 0){
        treeArr[treeChosen].waterTimer -= deltaTime/1000;
    }
}


function instrumentPlace()
{
  harButton = new Clickable();
  harButton.locate(20 + width/2, height-194);  
  harButton.text = "HARVEST"  
  harButton.textScaled = true;       
  //harButton.image = imgharvester
  //harButton.fitImage = true; 
  harButton.resize(250, 90);
  waterButton = new Clickable(); 
  waterButton.locate(20 + width/2, height-92); 
  waterButton.text = "WATER" 
  waterButton.textScaled = true;       
  //waterButton.image = imgwaterCan
  //waterButton.fitImage = true; 
  waterButton.resize(250, 90);
  
  harButton.onPress = function(){
  if (fruitCount > 0)
    {
      treeArr[treeChosen].fruitCount--
      scoreCount += random(1,3)
    }  
  console.log("harButton have been pressed!");
  }
  
  waterButton.onPress = function(){
  isWatered = true
  treeArr[treeChosen].waterTimer = maxWaterTimer
  console.log("waterButton have been pressed!");
}
}

function instrumentDraw()
{
  fill (400)
  rect (width/2, height-200 , width/2 , 200)
  harButton.draw()
  waterButton.draw()
 
  translate(width/2,0)
  
  scale(1/glScale)
  textSize(28)
  fill (0)
  text (welcomeText, 20,20,width * 0.5 , 130)
  

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    treeChosen = max(0, treeChosen - 1)
  } else if (keyCode === RIGHT_ARROW) {
    treeChosen = min(treeCount-1, treeChosen + 1)
  }
  else if (keyCode === ENTER) {
    isCloseScale = !isCloseScale
    console.log("isCloseScale = " + isCloseScale)
    if (isCloseScale)
        CloseScaleSetup() 
  }
    
}


function CloseScaleSetup() {
  createFruits()
  fruitCount = treeArr[treeChosen].fruitCount
  waterTimer = treeArr[treeChosen].waterTimer

}



//============================================
//===================UI=======================
//============================================


function UI()
{
  push()
  scale(1/glScale)
  
  textSize(28)
  fill (200)
  rect (0, 0 , width * 0.5 , 150)
  fill (0)
  text (welcomeText, 20,20,width * 0.5 , 130)
  
  translate(300,0)
  noStroke()
  fill (200)
  rect (width - 200, 0 , width * 0.2 , 300)
  
  fill(0)
  waterTimer = treeArr[treeChosen].waterTimer
  fruitCount = treeArr[treeChosen].fruitCount
  treestate = treeArr[treeChosen].state

  text("Score = " + round(scoreCount), width - 180 , 40, 200)
  text("isWatered = " + isWatered, width - 180 , 70, 200)
    text("waterTimer = " + waterTimer, width - 180 , 130, 200)
    text("treeChosen = " + treeChosen, width - 180 , 160, 200)
  text("fruitCount = " + fruitCount, width - 180 , 190, 200)
    text("state = " + treestate, width - 180 , 220, 200)
  pop()
}
  
  
function randomVector(diam) {
  let angle = Math.random() * 2 * PI;
  let length = random(0, diam);
  return {x: length * Math.cos(angle), y: length * Math.sin(angle)};
}

/*
FruitTypes
0 - нет фруктов
1 - лимон
2 - оранж
3 - помело
*/
function typeName(typeNum) {
  if (typeNum == 1)
    return "лимон";
  if (typeNum == 2)
    return "апель";
  if (typeNum == 3)
    return "помело";
}