//Global Variable Area
let mainGrid;
let snake;
let food;
let gridSize = {
  rows: 20,
  columns: 20,
};
let isPlaying = true;
let showMsg = true;

function setup() {
  let maincanvas = createCanvas(300, 300);
  frameRate(10);
  maincanvas.class("canva");
  mainGrid = new Grid(gridSize);
  snake = new Snake(gridSize);
  food = new Food(gridSize);
}
function draw() {
  background(100);
  snake.display();
  snake.move();
  mainGrid.drawGrid();
  food.show();
}
