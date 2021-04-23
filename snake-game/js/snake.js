class Snake {
    
    constructor(rows,columns) {
        // let grid = mainGrid.getGridData();
        //Grid System Data Here
        this.rows = rows;
        this.columns = columns;
        this.cellHeight = height/rows;
        this.cellWidth = width/columns;
        //Grid System Data

        this.position = createVector(
            round(this.rows/2) * this.cellWidth, 
            round(this.columns/2) * this.cellHeight
        );
        this.velocity = createVector(0,0);
        //console.log(this.position.x,this.position.y);
    }
    display = () => {
        rect(this.position.x,this.position.y, this.cellWidth,this.cellHeight);
    }
    changeDirection = (direction) => {
        if(direction == 'up') {
            this.velocity.x = 0;
            this.velocity.y = -this.cellHeight;
        } else if(direction == 'down') {
            this.velocity.x = 0;
            this.velocity.y = this.cellHeight;
        } else if(direction == 'left') {
            this.velocity.x = -this.cellWidth;
            this.velocity.y = 0;
        }else if(direction == 'right') {
            this.velocity.x = this.cellWidth;
            this.velocity.y = 0;
        }
    }
    gameOver = (index) => {
        console.log('go');
        let message = ['You Pressed Back Button!'];
        background(100);
        stroke(255,0,0);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(message[index], width/2,height/2);
        noLoop();
        console.log('go2');         
    }
    isValidMove = (dirX,dirY) => {
        if (dirX == 0) {
            if(this.velocity.y == -dirY * this.cellHeight)  {
                return false;
            }else {
                return true;
            }
        } else if (dirY == 0){
            if(this.velocity.x == -dirX * this.cellWidth)  {
                return false;
            }else {
                return true;
            }
        }
    }

    move = () => {
        this.position.add(this.velocity);
    }
}