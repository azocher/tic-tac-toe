/* ------------------ DOM REFS ---------------- */
let gameBoard = document.getElementById("gameBoard");
let resetBtn = document.getElementById("reset");
let showTurn = document.getElementById("displayTurn")

/* ----------------- GAME Logic Variables --------------- */
let turnNum = 0;
let displayTurn = 0;
//let endGame = [];
let playerX = [];
let playerO = [];

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

// winning combinations

/* ------------------ Event Listeners ----------------- */
gameBoard.addEventListener("click", boxClick);
resetBtn.addEventListener("click", reset);


/* ---------------- FUNCTIONS MAH DUDE ------------------- */

// click box, display x or o, add class to div, display whose turn is next, and log it to appropriate player array
function boxClick(e) {
    //console.log(e.target)
    let boxSpot = e.target;
    // plays x or o
    if (boxSpot.classList.contains("turnX") || boxSpot.classList.contains("turnO")) {
        alert("sorry please click an open box")
    } else {
        if (turnNum % 2 !== 0) {
            boxSpot.classList.add("turnX");
            showTurn.innerText = "O is going next"
            let choice = boxSpot.id;
            if (playerX.indexOf(choice) < 0) {
                playerX.push(choice)
                console.log(playerX)
            }
        }; 
        if (turnNum % 2 == 0) {
            boxSpot.classList.add("turnO");
            showTurn.innerText = "X is going next"
            let choice = boxSpot.id;
            if (playerO.indexOf(choice) < 0) {
                playerO.push(choice)
                console.log(playerO);
            }
        };
        turnNum++
        
    }  
    endGame();
};

// function for check for game winning results

function endGame(playerX, playerO, winCombo) {
    if (playerX.includes("topL", "topM", "topR")) {
        console.log("player X wins")
    }
}
// if in both playerX and winCombo then add to new array. If new array = combo then declare winner
// if else to check for all classes attached to a div 

// for (length of winCombo, var i) { 
//     // create and set matchCombo = 0
//   ​
//     for (length of current i/nestedArr, var j) {
//       // check if playerX or playerO array.includes(nestedArr[j])
//       // if true, increase matchCombo++ 
//       // else, do nothing
//     }
//   ​
//   } 





