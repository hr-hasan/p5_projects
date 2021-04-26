function keyPressed() {
    //Going to use switch instead if-else for fun!
    //Not writing any validation code 
     console.log(key);
    // console.log(keyCode);
 
        
    switch(key) {
        case 'ArrowUp':
            if(snake.isValidMove(0,-1)) {
                snake.changeDirection('up');
            } else { snake.gameOver(0); }

            break;
        case 'ArrowDown':
            if(snake.isValidMove(0,1)) {
                snake.changeDirection('down');
            } else { snake.gameOver(0); }
            break;
        case 'ArrowLeft':
            if(snake.isValidMove(-1,0)) {
                snake.changeDirection('left');
            } else { snake.gameOver(0); }
            break;
        case 'ArrowRight':
            if(snake.isValidMove(1,0)) {
                snake.changeDirection('right');
            } else { gameOver(0); }
            break;
        //Pause/Resume Option
        case ' ':
            if (isPlaying) { 
                noLoop();
                isPlaying =false;
           } else {
               loop();
               isPlaying = true;
           }
           
            break;
            case 'a':
                food.pickNewLocation();
                break;


    }
}
