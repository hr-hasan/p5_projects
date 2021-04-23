class Grid {
    constructor(rows,columns) {
        this.rows = rows;
        this.columns = columns;
        this.cellHeight = height/rows;
        this.cellWidth = width/columns;
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