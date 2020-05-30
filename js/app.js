/* ------------------ DOM REFS ---------------- */
let gameBoard = document.getElementById("gameBoard");
let resetBtn = document.getElementById("reset");
let showTurn = document.getElementById("displayTurn")

/* ----------------- GAME Logic Variables --------------- */
// whose turn is it
    // let playerTurn = [];
let turnNum = 0;
let displayTurn = 0;
let playerX = [];
let playerO = [];
// box state (clicked or unclicked)
// gameOver state - declare win/lose/tie
    // win arr = []
let winCombo = [
    ["topL", "topM", "topR"],
    ["midL", "midM", "midR"],
    ["botL", "botM", "botR"],
    ["topL", "midM", "botR"],
    ["topR", "midM", "botL"]
];
// winning combinations

/* ------------------ Event Listeners ----------------- */
gameBoard.addEventListener("click", boxClick);
resetBtn.addEventListener("click", reset);


/* ---------------- FUNCTIONS MAH DUDE ------------------- */

function boxClick(e) {
    console.log(e.target)
    let boxSpot = e.target;
    turnNum++
    // plays x or o
    if (turnNum % 2 !== 0) {
        boxSpot.classList.add("turnX");
        showTurn.innerText = "O is going next"
        console.log("test for false turnNum condition")
    } else if (turnNum % 2 == 0) {
        boxSpot.classList.add("turnO");
        showTurn.innerText = "X is going next"
    }

}



