var markers = ["X", "O"];
var players = [];
players[0] = prompt("Enter Player 1");
players[1] = prompt("Enter Player 2");

let gameOver = 0
var whoseTurn = 0;
let xPlayer = [];
let oPlayer = [];

function playGame(clickedDiv)
{
    if (gameOver == 0){
    clickedDiv.innerText = markers[whoseTurn];
    if(whoseTurn) whoseTurn =0;
     else whoseTurn = 1;
    clickedDiv.onclick = "";
    document.getElementById("message").innerText = "It's " + players[whoseTurn] +"'s turn!";
   
    if(whoseTurn === 0){
        evaluateXCombinations(clickedDiv);
    }else{
        evaluateOCombinations(clickedDiv);
    }
    }
}




// PETE IS A SAINT


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



function evaluateXCombinations(clickedDiv) {
    xPlayer.push(clickedDiv.id)
    
    for (let i = 0; i < winCombo.length; i++) {
        let winningCombo = winCombo[i];
        let match = 0;     
        for (let j = 0; j < winningCombo.length; j++) {
            if (xPlayer.includes(winningCombo[j])) {
                match++;
            } if (match === 3) {
                document.getElementById("gameMessage").innerText = "player o wins!"
                gameOver = 1;
                
            }
        }
    }
    
}

// checking for x win
// checking for game draw after x

function evaluateOCombinations(clickedDiv) {
    oPlayer.push(clickedDiv.id)
    for (let i = 0; i < winCombo.length; i++) {
        let winningCombo = winCombo[i];
        let match = 0;      
        for (let j = 0; j < winningCombo.length; j++) {
            if (oPlayer.includes(winningCombo[j])) {
                match++;
            } if (match === 3) {
                document.getElementById("gameMessage").innerText = "player x wins!"
                gameOver = 1;
                
            }
        }
    }
    if (oPlayer.length === 5 && gameOver === 0) {
        gameDraw();
    }
}

function gameDraw() {
    document.getElementById("gameMessage").innerText = "It's a draw!";
}