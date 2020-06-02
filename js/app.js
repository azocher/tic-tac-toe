// Reference: 
// - https://www.youtube.com/watch?v=TD5EaIkhSTQ&t=1137s
// - https://codepen.io/vedbhawsar/pen/NWGgXPB
// - https://medium.com/automationschool/create-a-basic-tic-tac-toe-in-7-steps-for-absolute-beginners-to-html-css-javascript-jquery-55c3277dd68a

/***** Thank you Yoshi for helping me implement code work perfectly *****/


let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let currentPlayer = "X";

const winMessage = () => `${currentPlayer} Win!`;
const drawMessage = () => `Game Tie!`;
const playerTurn = () => `${currentPlayer}'s turn`;
const gameStatus = document.querySelector('.result');
//  winning condition 
const winIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.reset').addEventListener('click', restartGame);
gameStatus.innerHTML = playerTurn();

//  Start the game
function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('index'));
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    cellPlayed(clickedCell, clickedCellIndex);
    validation();
}

//  player play game
function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

//  Player take the turn
function takeTurn() {
    console.log("changingPlayer", currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = playerTurn();
}

// check winning player
function validation() {
    let checkWin = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winIndices[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            checkWin = true;
            break
        }
    }

    if (checkWin) {
        gameStatus.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    let checkTie = !gameState.includes("");
    if (checkTie) {
        gameStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    takeTurn();
}

// Restart game 
function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = playerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}




