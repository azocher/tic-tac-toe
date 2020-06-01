var markers = ["X", "O"];
var players = [];
players[0] = prompt("Enter Player 1");
players[1] = prompt("Enter Player 2");

let gameover = 0
var whoseTurn = 0;
let xplayer= [];
let oplayer = [];

function playGame(clickedDiv)
{
    if (gameover == 0){
    clickedDiv.innerText = markers[whoseTurn];
    if(whoseTurn) whoseTurn =0;
     else whoseTurn = 1;
    clickedDiv.onclick = "";
    document.getElementById("message").innerText = "It's " + players[whoseTurn] +"'s turn!";
    evaluateXCombinations();
    evaluateOCombinations();
    }
}




// THIS IS WHERE I LOST IT


const winCombo = [
    ["cell-0", "cell-1", "cell-2"],
    ["cell-3", "cell-4", "cell-5"],
    ["cell-6", "cell-7", "cell-8"],
    ["cell-0", "cell-3", "cell-6"],
    ["cell-1", "cell-4", "cell-7"],
    ["cell-2", "cell-5", "cell-8"],
    ["cell-0", "cell-4", "cell-8"],
    ["cell-2", "cell-4", "cell-6"] 
  ]

// cell that have been clicked
//compare them to the list
// if any of the list hits length 3 win state
// if 9 turns no win state / tie
// loop compare each list at a time



function evaluateXCombinations() {
    for (let i = 0; i < winCombo.length; i++) {
        let winningCombo = winCombo[i];
        let match = 0;
        xplayer.push(e.target.id)
        for (let j = 0; j < winningCombo.length; j++) {
            if (xPlayer.includes(winningCombo[i][j])) {
                match++;
            } if (match === 3) {
                document.getElementById("gameMessage").innerText = "player x wins!"
                gameover = 1;
                
            }
        }
    }
    if (xPlayer.length >= 4 && oPlayer.length >= 4) {
        gameDraw();
    }
}

function evaluateOCombinations() {
    for (let i = 0; i < winCombo.length; i++) {
        let winningCombo = winCombo[i];
        let match = 0;
        oplayer.push(e.target.id)
        for (let j = 0; j < winningCombo.length; j++) {
            if (oPlayer.includes(winningCombo[i][j])) {
                match++;
            } if (match === 3) {
                document.getElementById("gameMessage").innerText = "player o wins!"
                gameover = 1;
                
            }
        }
    }
}

function gameDraw() {
    document.getElementById("gameMessage").innerText = "It's a draw!";
}