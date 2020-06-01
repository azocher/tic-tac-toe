console.log('Hello frontend');
//HTML element variables: who's turn it is, the replay button, and gameboard
const statusDiv  = document.querySelector('.status');
const replayDiv = document.querySelector('.replay');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let gameIsLive = true; 
let xIsNext = true;
let winner = null;

//game constants
const xSymbol = '✖';
const oSymbol = '○';

//funtion to duplicate possible win combinations (8)
const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(winner)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letterToSymbol(winner)} has won!</span>`;
    }
}

//function
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

//functions to check if there is an x or an o in each cell
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

//function to check if there is a winner in each row/column combo
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }

};
//EVENT HANDLERS

//handler for click replay button
    const handleReplay = () => {
        xIsNext = true;
        winner = null;
        gameIsLive = true;
        statusDiv.innerHTML = `${xSymbol} is next`;
        for (const cellDiv of cellDivs) {
            cellDiv.classList.remove('x');
            cellDiv.classList.remove('o');
            
        }
    };

//handler for click location on gameboard
    const handleCellClick = (e) => {
        const classList = e.target.classList;

        //formula to determine turns. First statement will determine if box has been clicked with x or o.
        //If neither has been clicked, turn starts with x, it will recheck and then when it's not true, it's o's turn.

        if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
            return;
        }
        if (xIsNext) {
            classList.add('x');
            checkGameStatus();

        } else {
            classList.add('o');
            checkGameStatus();
        }
    };

// event listeners
    replayDiv.addEventListener('click', handleReplay);

    for (const cellDiv of cellDivs) {
        cellDiv.addEventListener('click', handleCellClick)
    }