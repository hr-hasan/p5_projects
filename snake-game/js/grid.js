class Grid {
    constructor(gridSize) {
        this.rows = gridSize.rows;
        this.columns = gridSize.columns;
        this.cellHeight = height/gridSize.rows;
        this.cellWidth = width/gridSize.columns;
    }
    // getGridData = () => {
    //     return {
    //         cellHeight : this.cellHeight,
    //         cellWidth : this.cellWidth,
    //         rows : this.rows,
    //         columns : this.columns
    //     }
    // }
    drawGrid = () => {
        stroke(255,0,0);
        for (let i = 0; i< this.rows; i++) {
            line(i*this.cellWidth,0,i*this.cellWidth,height);
        }
        stroke(0,255,0);
        for (let i = 0; i< this.rows; i++) {
            line(0,i*this.cellHeight,width,i*this.cellHeight);
        }
    }

}