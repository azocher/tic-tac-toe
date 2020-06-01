document.addEventListener('DOMContentLoaded', function() {

/*--Dom Refs--*/
let gameBoard = document.getElementById('gameBoard');
let resetBtn = document.getElementById('reset');
let resultDiv = document.getElementById('resultsText');
let playerTurnDiv = document.getElementById('playerTurn');
/*--Game Logic--*/
let gameOver = false;
let player = 0;
let winningCombos = [
    ["upperLeft", "upperCenter", "upperRight"],
    ["middleLeft", "middleLeft", "middleRight"],
    ["lowerLeft", "lowerCenter", "lowerRight"],
    ["upperLeft", "middleLeft", "lowerLeft"],
    ["upperCenter", "middleCenter", "lowerCenter"],
    ["upperRight", "middleRight", "lowerRight"],
    ["upperLeft", "middleCenter", "lowerRight"],
    ["upperRight", "middleCenter", "lowerLeft"]
    ];
let boxesToMark = {
    upperLeft: null,
    upperCenter: null,
    upperRight: null,
    middleLeft: null,
    middleCenter: null,
    middleRight: null,
    lowerLeft: null,
    lowerCenter: null,
    lowerRight: null
}
let playerOneChoices = [];
let playerTwoChoices = [];
let winState = false; 

/*--Event Listeners--*/
resetBtn.addEventListener('click', reset);
gameBoard.addEventListener('click', boxClick);

/*--Functions--*/

function reset() {
    for (let box in boxesToMark) {
        boxesToMark[box] = null;
    }

    init();
}

function init() {
    gameOver = false;
   
}


function winCheck() {
    let sum = 0
    for (let key in boxesToMark) {
        sum += boxesToMark[key];
    }
    for (let i =0; i < winningCombos.length; i++) {
        let matchCountX = 0;
        let matchCountO = 0;
        for (let j = 0; j < winningCombos[i].length; j++) {
            console.log(playerOneChoices);
            console.log(winningCombos[i][j]);
            if (playerOneChoices.includes(winningCombos[i][j])) {
                console.log("player one check");
                matchCountX++;
                console.log("match count = " + matchCountX);
            }  if  (playerTwoChoices.includes(winningCombos[i][j])) {
                console.log("player two check");
                matchCountO++;
                console.log(matchCountO);
           }  if  (playerOneChoices.includes(winningCombos[i][j]) && matchCountX === 3) {    
                resultDiv.innerText = "Player One wins, Player Two dies"; 
                playerTurnDiv.innerText = "Play again?";
                gameOver = true;
           } if (playerTwoChoices.includes(winningCombos[i][j]) && matchCountO === 3) {
                resultDiv.innerText = "Player Two wins, Player One dies";
                playerTurnDiv.innerText = "Play again?";
                gameOver = true;
            } if (sum === 4) {
                resultDiv.innerText = "Tie!";
                gameOver = true;
                playerTurnDiv.innerText = "Play again?";
            } 

         }
    
     }
}



function boxClick(e) {
    let box = e.target.id;
    if (gameOver === false && player === 0 && boxesToMark[box] === null) {
        e.target.innerText = "X";
        boxesToMark[box] = 0;
        console.log(boxesToMark[box])
        playerOneChoices.push(e.target.id)
        console.log(playerOneChoices) 
        playerTurnDiv.innerText = "Player Two- you're up!";
        player = 1;
        
    } 
     if (gameOver === false && player === 1 && boxesToMark[box] === null) {
        e.target.innerText = "O";
        boxesToMark[box] = 1;
        console.log(boxesToMark[box])
        playerTwoChoices.push(e.target.id)
        console.log(playerTwoChoices) 
        playerTurnDiv.innerText = "Your turn Player One!"
         player = 0;
    }
    winCheck();
}



})
