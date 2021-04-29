class VisualCard {
  constructor(card) {
    this.card = card;
  }

  x = 50;
  y = 50;
  isDragging = false;
  xOffset = 0;
  yOffset = 0;

  dragging() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 150 &&
      mouseY > this.y &&
      mouseY < this.y + 200
    ) {
      this.isDragging = true;
      this.xOffset = mouseX - this.x;
      this.yOffset = mouseY - this.y;
      return true;
    } else {
      return false;
    }
  }

  drag() {
    if (this.isDragging) {
      this.x = mouseX - this.xOffset;
      this.y = mouseY - this.yOffset;
    }
  }

  getIcon() {
    //this.card.suit
    //♥ ♦ ♠ ♣
    if (this.card.suit === "Diamonds") {
      return "♦";
    } else if (this.card.suit === "Hearts") {
      return "♥";
    } else if (this.card.suit === "Spades") {
      return "♠";
    } else if (this.card.suit === "Clubs") {
      return "♣";
    }
  }

  draw() {
    this.drag();
    push();

    translate(this.x, this.y);

    fill("white");
    rect(0, 0, 150, 200, 7);

    fill(this.card.color);
    textSize(100);
    textAlign(CENTER);
    text(this.getIcon(), 70, 130);

    textSize(30);
    textAlign(LEFT);
    text(this.card.name, 10, 30);

    textAlign(RIGHT);
    text(this.card.name, 140, 180);

    pop();
  }
}

let dealer = new Dealer();
let hand = dealer.getHand();
let visualhand = [];

for (let index = 0; index < hand.length; index++) {
  const card = hand[index];
  let visualcard = new VisualCard(card);
  visualcard.x = index * 180 + 20;
  visualhand.push(visualcard);
}

var setup = function () {
  createCanvas(1000, 800);
};

var draw = function () {
  background("forestgreen");
  for (let index = 0; index < visualhand.length; index++) {
    const visualcard = visualhand[index];
    visualcard.draw();
  }
};

window.mousePressed = function () {
  for (let index = 0; index < visualhand.length; index++) {
    const xyz = visualhand[index];
    xyz.dragging();
  }
};

window.mouseReleased = function () {
  for (index = 0; index < visualhand.length; index++) {
    visualhand[i].isDragging = false;
  }
};
