class Food {
  constructor(gridSize) {
    // let grid = mainGrid.getGridData();
    //Grid System Data Here
    this.rows = gridSize.rows;
    this.columns = gridSize.columns;
    this.cellHeight = height / gridSize.rows;
    this.cellWidth = width / gridSize.columns;
    this.position = createVector(
      floor(random(this.rows)) * this.cellWidth,
      floor(random(this.columns)) * this.cellHeight
    );
    this.color = color(255, 0, 0);
    //Grid System Data
  }
  show = () => {
    fill(this.color);
    rect(this.position.x, this.position.y, this.cellHeight, this.cellWidth);
  };
  pickNewLocation = () => {
    let newPosition = createVector(
      floor(random(this.rows)) * this.cellWidth,
      floor(random(this.columns)) * this.cellHeight
    );
    this.position = newPosition;
  };
}
