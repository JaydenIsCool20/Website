let canvas = { width: 1000, height: 800 };
let box = { x: 100, y: 100, w: 150, h: 200 };

var setup = function () {
  createCanvas(canvas.width, canvas.height);

  var box = rect(100, 100, 150, 200);
};

var draw = function () {
  background(100);

  box.x = random(box.x - 10, box.x + 10);
  box.y = random(box.y - 10, box.y + 10);

  rect(box.x, box.y, box.w, box.h);
};
