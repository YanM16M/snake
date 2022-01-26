class Food {
  
  constructor() {
     this.x = round(random(0, width / gridSize)) - 1;
     this.y = round(random(0, height / gridSize)) - 1;
  }
  
  show() {
      fill(255, 15, 15);
      noStroke();
      rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize);
  }
  
  
}