class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector((width / gridSize) / 2, (height / gridSize) / 2);
    this.total = 1;
    this.lastMove = 0;
  }

  lose() {
    this.body = [];
    this.body[0] = createVector((width / gridSize) / 2, (height / gridSize) / 2);
    this.total = 1;
    this.lastMove = 0;
    score = 0;
  }

  show() {
    for (var i = 0; i < this.total; i++) {
      fill(103, 183, 255);
      noStroke();
      rect(this.body[i].x * gridSize, this.body[i].y * gridSize, gridSize, gridSize);
    }

  }
  

  move() {
    var tmpX = 0;
    var tmpY = 0;

    // on fait bouger le serpent
    if (keyIsDown(UP_ARROW) && this.canMove(UP_ARROW)) {
      tmpY--;
      this.lastMove = UP_ARROW;
    } else if (keyIsDown(DOWN_ARROW) && this.canMove(DOWN_ARROW)) {
      tmpY++;
      this.lastMove = DOWN_ARROW;
    } else if (keyIsDown(LEFT_ARROW) && this.canMove(LEFT_ARROW)) {
      tmpX--;
      this.lastMove = LEFT_ARROW;
    } else if (keyIsDown(RIGHT_ARROW) && this.canMove(RIGHT_ARROW)) {
      tmpX++;
      this.lastMove = RIGHT_ARROW;
    } 
    else {
       if (this.lastMove == UP_ARROW) {
        tmpY--;
      } else if (this.lastMove == DOWN_ARROW) {
        tmpY++;
      } else if (this.lastMove == LEFT_ARROW) {
        tmpX--;
      } else if (this.lastMove == RIGHT_ARROW) {
        tmpX++;
      }
    }

    // check if head touch the tail
    for (var i = 1; i < this.total; i++) {
      if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
        this.lose();
        return;
      }
    }

    // move all the tail
    for (var i = this.total - 1; i > 0; i--) {
      this.body[i] = this.body[i - 1];
    }

    this.body[0] = createVector(this.body[0].x + tmpX, this.body[0].y + tmpY);

    // bounds
    if (this.body[0].x * gridSize >= width) {
      this.body[0].x = 0;
    } else if (this.body[0].x * gridSize <= 0) {
      this.body[0].x = width / gridSize;
    } else if (this.body[0].y * gridSize >= height) {
      this.body[0].y = 0;
    } else if (this.body[0].y * gridSize <= 0) {
      this.body[0].y = height / gridSize;
    }

  }

  eat(food) {
    if (this.body[0].x == food.x && this.body[0].y == food.y) {

      let newX = this.body[this.total - 1].x;
      let newY = this.body[this.total - 1].y;

      switch (this.lastMove) {
        case UP_ARROW:
          newY++;
          break;
        case DOWN_ARROW:
          newY--;
          break;
        case LEFT_ARROW:
          newX++;
          break;
        case RIGHT_ARROW:
          newX--;
          break;
      }

      this.body[this.total] = createVector(newX, newY);

      this.total++;
      score++;
      return true;
    }
    return false;
  }

  canMove(direction) {
    
    if (this.total < 2) { return true; }
    
    switch (direction) {
      case UP_ARROW:
        if(this.lastMove == DOWN_ARROW) { return false; }
        break;
      case DOWN_ARROW:
        if(this.lastMove == UP_ARROW) { return false; }
        break;
      case LEFT_ARROW:
        if(this.lastMove == RIGHT_ARROW) { return false; }
        break;
      case RIGHT_ARROW:
        if(this.lastMove == LEFT_ARROW) { return false; }
        break;
    }
    
    return true;
  }

}