var gridSize = 10;
let food;
let snake;
let score = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
  
  food = new Food();
  snake = new Snake();
}

function draw() {
  background(220);
  
  textSize(16);
  fill(0);
  text("Score : " + score,5, 20);
  
  // on affiche la nourriture
  food.show();
  
  // on affiche le serpent
  snake.show();
  
  // on fait bouger le serpent
  snake.move();
  
  // on vérifie que le serpent mange la nourriture
  if (snake.eat(food)) {
     food = new Food(); 
  }
  
}