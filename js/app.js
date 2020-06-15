
/*-----------> DOM REFS <-------------------*/ 
    let everyBox = document.getElementsByClassName('moveSpace');

    let restartBtn = document.getElementById('restart');

    
    let topLeft = document.getElementById("0");
    let topMid = document.getElementById("1");
    let topRight = document.getElementById("2");
    let midLeft = document.getElementById("3");
    let center = document.getElementById("4");
    let midRight = document.getElementById("5");
    let bottomLeft = document.getElementById("6");
    let bottomMid = document.getElementById("7");
    let bottomRight = document.getElementById("8");

    /*-----------> Game Logic Variables <-----------*/ 
    
    const playerTurn = "X";
    const compTurn = "O";
    let activePlayer = playerTurn;
    let playerMoves = [];
    let compMoves = [];
    let winConditions = [['0','1','2'], 
    ['3','4','5'], 
    ['6','7','8'], 
    ['0','4','8'], 
    ['6','4','2'], 
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8']];
    let turn = 0;
    var isGameOver = false;
    

    // let gameState = ["", "", "", "", "", "", "", "", ""]

    /*-----------> Event Listener <-----------*/ 
    // restartBtn.addEventListener('click', resetGame);
    

    function switchTurns() {
        if (turn % 2 === 0) {
            activePlayer = playerTurn;
        } else {
            activePlayer = compTurn;
        }
        turn++;

    }
        
    function updateBoxContent(targetBox) {
        //allows for activePlayer to 
        targetBox.innerHTML = activePlayer;
    }

    function trackPlayerMoves (targetBox) {
       if (activePlayer === playerTurn) {
           playerMoves.push(targetBox.id)
       } else {
           compMoves.push(targetBox.id)
       }
    //    console.log(playerMoves);
    //    console.log(compMoves);
    }

    function gameOver (message) {
        for (var i = 0; i < everyBox.length; i++) {
            everyBox[i].removeEventListener('click', clickCheck);
        }
        document.getElementById('gameResult').innerHTML = message
        
        isGameOver = true;
    }
    
    function checkWin () {
        //this funciton increments points based on match of moves vs winCondi
        //double loop through the winConditions and check IF 
        // the 
        // this loop is looking at a row, checking the first win row
        for (var i = 0; i < winConditions.length; i++) {
            let playerPoints = 0;
            let compPoints = 0;
            //this loop looks over each individual box
            console.log(winConditions[i]);
            for (var j = 0; j < winConditions[i].length; j++) {
                if(playerMoves.includes(winConditions[i][j])) {
                    playerPoints++
                } 
                if(compMoves.includes(winConditions[i][j])){
                    compPoints++
                }
            }
            //we need to reset score and end game if points hit 3
            if(playerPoints === 3 || compPoints === 3) {
                console.log("Game Over! " + activePlayer + " wins!");
                gameOver("Game Over! " + activePlayer + " wins!");
                return 
            }
       
        }
        
    }

    function checkDraw() {
        if (turn === 9 && !isGameOver) {
            gameOver("Game is a draw");
        }
    }

    function clickCheck (e) {
        console.log(e);
        console.log('Hey I just clicked ' + e.target);
        
        // Whose turn it is
        switchTurns();

        //UPdate the box with a picture/text for move
        updateBoxContent(e.target)
        
        //track the player moves
        trackPlayerMoves(e.target)

        // check if our win condition is met
        checkWin()

        // draw check
        checkDraw();

    }

    function init () { 
        for (var i = 0; i < everyBox.length; i++) {
            everyBox[i].addEventListener('click', clickCheck);
        }
    }
    init();


    function removeBoxContent () {
        for (var i = 0; i < everyBox.length; i++) {
            everyBox[i].innerHTML = ""
        }
        document.getElementById('gameResult').innerHTML = "";

    }

    function resetGame () {
         //reset
        turn = 0;
        activePlayer = playerTurn;
        playerMoves = [];
        compMoves = [];
        isGameOver = false;

        // add event listeners back and remove x and o's from board
        init();
        removeBoxContent();
    }

    restartBtn.addEventListener('click', resetGame)

    // ----------> stretch goal:
    // How to make a draw check to make a draw before the last turn
    // Automation 