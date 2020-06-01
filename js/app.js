document.addEventListener('DOMContentLoaded', function() {

//* ---- DOM References ---*//

var aa = document.getElementById("boxOne");
var ab = document.getElementById("boxTwo");
var ac = document.getElementById("boxThree");
var ba = document.getElementById("boxFour");
var bb = document.getElementById("boxFive");
var bc = document.getElementById("boxSix");
var ca = document.getElementById("boxSeven");
var cb = document.getElementById("boxEight");
var cc = document.getElementById("boxNine");

let boxes =  [
    aa,
    ab,
    ac,
    ba,
    bb,
    bc,
    ca,
    cb,
    cc
];

let xTurn;

let text = document.getElementById("turnText");

let playerX = "x";
let playerO = "o";

var winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

let winningPopUp = document.getElementById("winningPop");
let popUp = document.getElementById("winPop");

let resetButton = document.getElementById("reset");

//* ---- Event Listeners ---- *//

//resetButton.addEventListener("click", reset);

aa.addEventListener("click", markBox, { once: true });
ab.addEventListener("click", markBox, { once: true });
ac.addEventListener("click", markBox, { once: true });
ba.addEventListener("click", markBox, { once: true });
bb.addEventListener("click", markBox, { once: true });
bc.addEventListener("click", markBox, { once: true });
ca.addEventListener("click", markBox, { once: true });
cb.addEventListener("click", markBox, { once: true });
cc.addEventListener("click", markBox, { once: true });

resetButton.addEventListener("click", reset)

//* ---- Game Logic ----- *//

let gameCells = [];

let cellStates = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false
}

//* ----- Functions ----- *//

//for the markBox function, I had help from this youtube video:
// https://www.youtube.com/watch?v=Y-GkMjUZsmM

function reset() {
    popUp.classList.remove("show");
}

function markBox(e) {
    let gameCell = e.target;
    let currentTurn = xTurn ? playerX : playerO;
    placeMark(gameCell, currentTurn);
    if (winCheck(currentTurn)) {
        endGame(false);
    } else if (tieTown()) {
        endGame(true)
    } else {
        takeTurns();
    }
}

function placeMark(gameCell, currentTurn) {
    gameCell.classList.add(currentTurn);
}

function takeTurns() {
    xTurn = !xTurn;
    if (xTurn) {
        text.innerText = "Now it's X time, my friend."
    } else {
        text.innerText = "O ho ho! Now it's O time again."
    }
}

// I also got some help from that YouTube video for my winCheck function - 
// specifically, the .some, .every, and .contains commands and arrow functions.
// I didn't know how to iterate through all combinations in an array.
// After some research, I now have a decent understanding of all of those commands.

function winCheck(currentTurn){
    return winCombos.some(combination => {
        return combination.every(index => {
            return boxes[index].classList.contains(currentTurn)
        })
    })
}

// the function below does not work.

function tieTown() {
    return boxes.every(gameCell => {
        return gameCell.classList.contains(playerX) ||
        gameCell.classList.contains(playerO)
    })
}

function endGame(tie) {
    if(tie) {
        winningPopUp.innerText = "It's a tic-tac-tie!"
    } else {
        if (xTurn) {
            winningPopUp.innerText = "X beats the odds!"
        } else {
            winningPopUp.innerText = "O takes the day!"
        }
        popUp.classList.add("show");
    }
}

})
