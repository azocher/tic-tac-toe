
/* ------------------ DOM REFS ---------------- */
let gameBoard = document.getElementById("gameBoard");
let resetBtn = document.getElementById("reset");
let showTurn = document.getElementById("displayTurn")
let displayResults = document.getElementById("displayResults")
//let loadAudio = document.getElementById("audio")

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
//loadAudio.addEventListener("load", playSound);

/* ---------------- FUNCTIONS MAH DUDE ------------------- */

// window.onload = function() {
//     document.getElementById("audio").play();
// }

function boxClick(e) {
    //console.log(e.target)
    let boxSpot = e.target;
    // plays x or o
    if (boxSpot.classList.contains("turnX") || boxSpot.classList.contains("turnO")) {
        alert("sorry please click an open box")
    } else {
        if (turnNum % 2 !== 0) {
            boxSpot.classList.add("turnX");
            showTurn.innerText = "Morty play your turn already..."
            let choice = boxSpot.id;
            if (playerX.indexOf(choice) < 0) {
                playerX.push(choice)
                //console.log(playerX)
            }
        }; 
        if (turnNum % 2 == 0) {
            boxSpot.classList.add("turnO");
            showTurn.innerText = "Ah geez Rick, you're up."
            let choice = boxSpot.id;
            if (playerO.indexOf(choice) < 0) {
                playerO.push(choice)
                //console.log(playerO);
            }
        };
        turnNum++
        if (turnNum === 9) {
            showTurn.innerText = "Cat's game dawg!"
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
            showTurn.innerText = "Rick wins (of course)"
            stopPlay();
        }
        if (playerO.includes(winCombo[i][j]) && matchComboO === 3) {
            //alert("O wins")
            showTurn.innerText = "Really, well, Morty wins, I guess"
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

function reset(e) {
    //console.log("test")
    //let board = gameBoard.children[i].className("turnO")

    // top row removal
    if (topL.classList.contains("turnO")) {
        topL.classList.remove("turnO")
    } else if (topL.classList.contains("turnX")) {
        topL.classList.remove("turnX")
    };
    if (topM.classList.contains("turnO")) {
        topM.classList.remove("turnO")
    } else if (topM.classList.contains("turnX")) {
        topM.classList.remove("turnX")
    };
    if (topR.classList.contains("turnO")) {
        topR.classList.remove("turnO")
    } else if (topR.classList.contains("turnX")) {
        topR.classList.remove("turnX")
    };

    // mid row removal
    if (midL.classList.contains("turnO")) {
        midL.classList.remove("turnO")
    } else if (midL.classList.contains("turnX")) {
        midL.classList.remove("turnX")
    };
    if (midM.classList.contains("turnO")) {
        midM.classList.remove("turnO")
    } else if (midM.classList.contains("turnX")) {
        midM.classList.remove("turnX")
    };
    if (midR.classList.contains("turnO")) {
        midR.classList.remove("turnO")
    } else if (midR.classList.contains("turnX")) {
        midR.classList.remove("turnX")
    };

    // bottom row removal
    if (botL.classList.contains("turnO")) {
        botL.classList.remove("turnO")
    } else if (botL.classList.contains("turnX")) {
        botL.classList.remove("turnX")
    };
    if (botM.classList.contains("turnO")) {
        botM.classList.remove("turnO")
    } else if (botM.classList.contains("turnX")) {
        botM.classList.remove("turnX")
    };
    if (botR.classList.contains("turnO")) {
        botR.classList.remove("turnO")
    } else if (botR.classList.contains("turnX")) {
        botR.classList.remove("turnX")
    };
    // reset arrays and turns
    playerO = [];
    playerX = [];
    turnNum = 0;
    displayTurn = 0;

    gameBoard.addEventListener("click", boxClick);

};
