/* ------------------ DOM REFS ---------------- */
let gameBoard = document.getElementById("gameBoard");
let resetBtn = document.getElementById("reset");
let showTurn = document.getElementById("displayTurn")

/* ----------------- GAME Logic Variables --------------- */
let turnNum = 0;
let displayTurn = 0;

// box state (clicked or unclicked)
// gameOver state - declare win/lose/tie
// win arrays and player arrays that check against win arrays
let winCombo = [
    ["topL", "topM", "topR"],
    ["midL", "midM", "midR"],
    ["botL", "botM", "botR"],
    ["topL", "midM", "botR"],
    ["topR", "midM", "botL"]
];
let playerX = [];
let playerO = [];
// winning combinations

/* ------------------ Event Listeners ----------------- */
gameBoard.addEventListener("click", boxClick);
resetBtn.addEventListener("click", reset);


/* ---------------- FUNCTIONS MAH DUDE ------------------- */

function boxClick(e) {
    console.log(e.target)
    let boxSpot = e.target;
    // plays x or o
    if (boxSpot.classList.contains("turnX") || boxSpot.classList.contains("turnO")) {
        alert("sorry please click an open box")
    } else {
        if (turnNum % 2 !== 0) {
            boxSpot.classList.add("turnX");
            showTurn.innerText = "O is going next"
            //console.log("test for false turnNum condition")
        }; 
        if (turnNum % 2 == 0) {
            boxSpot.classList.add("turnO");
            showTurn.innerText = "X is going next"
        };
        turnNum++
    }  
}



