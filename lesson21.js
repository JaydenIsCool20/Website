class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = random(canvas.width);
    this.y = random(canvas.height);
  }

  x = 100;
  y = 100;
  w = 50;
  h = 50;

  vx = random(-5, 5);
  vy = random(-5, 5);

  c = random(255);

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vy = -this.vy;
    }
  }

  draw() {
    throw "Nothing to draw!";
  }
}

class Square extends Shape {
  draw() {
    this.x += 2;
    circle(this.x, this.y, this.w);
  }
}

let shapes = [];
let canvas = { width: 800, height: 600 };

var setup = function () {
  createCanvas(800, 600);
  for (let index = 0; index < 200; index++) {
    let box = new Square(canvas);
    shapes.push(box);

    let cir = new Circle(canvas);
    shapes.push(cir);
  }
};

var draw = function () {
  background(200);
  for (let index = 0; index < shapes.length; index++) {
    let shape = shapes[index];
    shape.draw();
  }
};

class Circle extends Shape {
  draw() {
    this.move();
    circle(this.x, this.y, this.w);
  }
}
