////////////////////////////////////////////////////
//--------------------Computer solution-----------//
////////////////////////////////////////////////////

const  game = new Game();

game.start();

function Game() {
    const board = new Board();
    const player = new Player(board);
    const complay = new Complay(board);
    let turn = 0;

    this.start = function() {
        const config = {childList: true };
        const observer = new MutationObserver(() => takeTurn());
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }

    function takeTurn() {
        if (board.checkForWinner()) {
            return;
        }
        turn % 2 === 0 ? player.takeTurn() : complay.takeTurn() ;
        turn ++;
    }
}

function Board() {
    this.positions = Array.from(document.querySelectorAll('.cell'));   
    
    this.checkForWinner = function() {
        let winner = false;
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
        const positions = this.positions;
        winIndices.forEach((winCombo) => {
            const pos0InText = positions[winCombo[0]].innerText;
            const pos1InText = positions[winCombo[1]].innerText;
            const pos2InText = positions[winCombo[2]].innerText;
            const isWinCombo = pos0InText !== '' && 
                  pos0InText === pos1InText && 
                  pos1InText === pos2InText;
            if (isWinCombo) {
                winner = true;
                winCombo.forEach((index) => {
                    positions[index].className += ' winner';
                })
            }

        });
        return winner;
    }
}

function Player(board) {
    this.takeTurn = function() {
        board.positions.forEach(el => el.addEventListener('click', handleTurnTaken));
    }

    function handleTurnTaken(e) {
        e.target.innerText = 'X';
        board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken));
    }
}

function Complay(board) {
    this.takeTurn = function() {
        const avaiPositions = board.positions.filter((p) => {
            return p.innerText === '';
        } );
        const move = Math.floor(Math.random() * avaiPositions.length) ;
        avaiPositions[move].innerText = 'O';
    }
}

function restartGame() {
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
document.querySelector('.reset').addEventListener('click', restartGame);


////////////////////////////////////////////////////
//------------------Player solution---------------//
////////////////////////////////////////////////////

/*

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `Player ${currentPlayer} won!`;
const drawMessage = () => `Game draw!`;
const playerTurn = () => `It's ${currentPlayer}'s turn`;
const gameStatus = document.querySelector('.result');
gameStatus.innerHTML = playerTurn();

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

function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    validation();
}

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function takeTurn() {
    currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = playerTurn();
}

function validation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winIndices[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        gameStatus.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    takeTurn();
}

function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = playerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.reset').addEventListener('click', restartGame);

*/