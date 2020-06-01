/* ------------------ DOM REFS ---------------- */
let gameBoard = document.getElementById("gameBoard");
let resetBtn = document.getElementById("reset");
let showTurn = document.getElementById("displayTurn")
let displayResults = document.getElementById("displayResults")

/* ----------------- GAME Logic Variables --------------- */
let turnNum = 0;
let displayTurn = 0;
let playerX = [];
let playerO = [];

let winCombo = [
    ["topL", "topM", "topR"],
    ["midL", "midM", "midR"],
    ["botL", "botM", "botR"],
    ["topL", "midM", "botR"],
    ["topR", "midM", "botL"],
    ["topR", "midR", "botR"],
    ["topM", "midM", "botM"],
    ["topL", "midL", "botL"]
];

/* ------------------ Event Listeners ----------------- */
gameBoard.addEventListener("click", boxClick);
resetBtn.addEventListener("click", reset);


/* ---------------- FUNCTIONS MAH DUDE ------------------- */

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
                //console.log(playerX)
            }
        }; 
        if (turnNum % 2 == 0) {
            boxSpot.classList.add("turnO");
            showTurn.innerText = "X is going next"
            let choice = boxSpot.id;
            if (playerO.indexOf(choice) < 0) {
                playerO.push(choice)
                //console.log(playerO);
            }
        };
        turnNum++
        if (turnNum === 9) {
            showTurn.innerText = "Cat's game"
        }
        endGame();
    }  
};


 /* ------------- We're in the endGame now --------------- */
function endGame() {
for (let i = 0; i < winCombo.length; i++) { 
    let matchComboX = 0;
    let matchComboO = 0;
    for (let j = 0; j < winCombo[i].length; j++) {
        if (playerX.includes(winCombo[i][j])) {
            matchComboX++
            //console.log(matchComboX)
        }
        if (playerO.includes(winCombo[i][j])) {
            matchComboO++
            //console.log(matchComboO)
        } 
        if (playerX.includes(winCombo[i][j]) && matchComboX === 3) {
            //alert("we have a winner")
            showTurn.innerText = "Congrats X wins"
            stopPlay();
        }
        if (playerO.includes(winCombo[i][j]) && matchComboO === 3) {
            //alert("O wins")
            showTurn.innerText = "Congrats O wins"
            stopPlay();
        }
    }
  } 
}

function stopPlay() {
    gameBoard.removeEventListener("click", boxClick);
    document.getElementById("reset").disabled = false;
    //reset();
}

// function reset() {
//     if ()

// //    div.classList.remove("turnO");
// //    div.classList.remove("turnX");
// }



