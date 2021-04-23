//Global Variable Area
let mainGrid; 
let gridSize = { 
    rows: 20, 
    columns:20
};
let isPlaying = true;
let showMsg = true;
let snake;

function setup() {
    createCanvas(300,300);
    frameRate(10);
    mainGrid = new Grid(gridSize.rows,gridSize.columns);
    snake = new Snake(gridSize.rows,gridSize.columns);
}
function draw() {
    background(100);
    snake.display();
    snake.move();
    mainGrid.drawGrid();
}

gameOver = (index) => {
    console.log('go');
    let message = ['You Pressed Back Button!'];
    background(100);
    noLoop();
    console.log('go2');
    stroke(255,0,0);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(message[index], width/2,height/2);
}