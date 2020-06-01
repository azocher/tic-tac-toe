//Play The Game
var gameOver = false;
var gamers = [];
var marks = ["X","O"];
var playerTurn = 0;
var scoring = [0,0];
var winNumber = [7,56,73,84,146,84,146,273,292,448];
gamers[0] = "Goku";
gamers[1] = "Frieza";
//alert([playersTurn]);

// Check For Winners
function checkWinner() {
    for (var i = 0; i < winNumber.length; i++) {
        if ((scoring[playerTurn] & winNumber[i]) == winNumber[i]) {
            document.getElementById("game-alert").innerText = gamers[playerTurn] + " Wins!"
            //alert (players[playerTurn] + " Wins!")
            gameOver = true;
        } 
    }// Check For A Draw
    if (((scoring[0] + scoring[1]) === 511) && !gameOver) {
        document.getElementById("game-alert").innerText = "Draw!"
        gameOver = true;
    }
}
// Make a funcetion that listens to a click by using onclick event and this keyword
function game(clickBox, boxValue) {
      if (!gameOver) {
        scoring[playerTurn] += boxValue;
        clickBox.onclick = "";
        clickBox.innerHTML = "<span>" + marks[playerTurn] + "</span>";
        checkWinner();
         if (!gameOver) {
             toggle();
            }
    }
}
//Toggle between X / O
function toggle() {
    if (playerTurn === 0) playerTurn = 1;
    else playerTurn = 0;
    document.getElementById("game-alert").innerText = gamers[playerTurn] + "'s Turn";
};