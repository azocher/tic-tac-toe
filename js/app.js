document.addEventListener('DOMContentLoaded', function(){
    console.log("in js file!");

    // get DOM refs
   const gameSpace = document.querySelector(".gameSpace");
   const resetButton = document.getElementById("reset");
   const undoButton = document.getElementById("undo");
   const messageBox = document.getElementById("message");
   const nameInputs = {};
   nameInputs.X = document.getElementById("nameX");
   nameInputs.O = document.getElementById("nameO");
   const computerPlayerCheckboxes = {};
   computerPlayerCheckboxes.X = document.getElementById("computerX");
   computerPlayerCheckboxes.O = document.getElementById("computerO");

   // initialize game globals
   const WIN_CONDITIONS_MASTER = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0 ,4, 8], [6, 4, 2]];
   let remainingWinConditions = [];
   let activeGame = false;
   let currentTurn = ""; // marks which player's turn it is
   let turnCount = null; // marks the number of the current turn
   let moveHistory = [];
   let playerNames = {
       X: "",
       O: ""
   }


   // event listeners
   resetButton.addEventListener("click", reset);
   undoButton.addEventListener("click", undo);
   let squareCount = gameSpace.children.length;
   for (let i = 0; i < squareCount; i++){
       let thisSquare = gameSpace.children[i];
       thisSquare.addEventListener("click", squareClick);
   }
   computerPlayerCheckboxes.X.addEventListener("click", toggleComputerPlayer);
   computerPlayerCheckboxes.O.addEventListener("click", toggleComputerPlayer);

   // if the user checks a computer-player checkbox, give that player the name of "Computer"
   function toggleComputerPlayer(e){
       console.log(e);
       let relevantTextBox = nameInputs[e.target.value];
       if (e.target.checked){
           relevantTextBox.value = "Computer"
           relevantTextBox.disabled = true;
       } else {
           relevantTextBox.value = "";
           relevantTextBox.disabled = false;
       }
   }

   function init(){
    console.log("in init");
    //repopulate win conditions.  Lines that receive a mix of Xs and Os as the game gets played will be spliced from this copy
    remainingWinConditions = [];
    for (condition of WIN_CONDITIONS_MASTER){
        remainingWinConditions.push(condition);
    }
    //clear all board values (for game reset)
    for (square of gameSpace.children){
        square.children[0].innerHTML = "";
    }
    playerNames.X = nameInputs.X.value;
    nameInputs.X.disabled = true;
    playerNames.O = nameInputs.O.value;
    nameInputs.O.disabled = true;
    messageBox.innerHTML = `Current turn: ${playerNames.X}`
    currentTurn = "X";
    moveHistory = [];
    turnCount = 1;
    activeGame = true;
}

   // stub out event listener functions
   function reset() {
       console.log("Reset button clicked!");
       init();
   }

   function undo() {
       console.log("Undo button clicked!");
   }

   function squareClick(e) {
       // verify that a game is active, that the player hasn't clicked the margin between squares, and that the square is empty
       if ((activeGame && e.target.id) && !e.target.children[0].innerHTML){ 
           console.log(`Square ${e.target.id} has been clicked!`);
           e.target.children[0].innerHTML = currentTurn;
           advanceTurn();
           checkForWin();
           pruneWinConditions();
       }
    }

    function checkForWin(){
        console.log("in CheckForWin");
        if (turnCount >= 5){ //turn 5 is the earliest anyone can win
            console.log("It's turn " + turnCount + ", continuing with win check");
            for (let i = 0; i < remainingWinConditions.length; i++){ //iterate through every remaining winnable stripe
                let thisStripe = [];
                for (let j = 0; j < remainingWinConditions[i].length; j++){ // make a list of all the values in that stripe
                    thisStripe.push(gameSpace.children[remainingWinConditions[i][j]].children[0].innerHTML);
                    if (j === 2){
                        console.log("Done with a stripe: " + JSON.stringify(thisStripe));
                        if (thisStripe[0] === "X" || thisStripe[0] === "O"){ // if all values are the same and are not blank
                            if ((thisStripe[0] === thisStripe[1]) && thisStripe[0] === thisStripe[2]){ 
                                console.log("Ending game with a win for " + thisStripe[0]);
                                endGame(thisStripe[0]); // end the game, player holding this stripe wins.
                            }
                        }
                    }
                }
            }
        }
    }

    function advanceTurn(){
        console.log("In advanceTurn");
        turnCount++;
        if (currentTurn === "X"){
            currentTurn = "O";
            messageBox.innerHTML = `Current turn: ${playerNames.O}`;
        } else {
            currentTurn = "X";
            messageBox.innerHTML = `Current turn: ${playerNames.X}`;
        }
    }
    //check whether each winning stripe has both Xs and Os.  If so, remove it from the list of possible win conditions.
    function pruneWinConditions(){
        //console.log("In Prune Function");
        for (i = 0; i < remainingWinConditions.length; i++){
            let hasX = false;
            let hasO = false;
            let thisRow = [];
            if (remainingWinConditions[i]){
                //console.log(JSON.stringify(remainingWinConditions));
                for (j = 0; j < remainingWinConditions[i].length; j++){
                    let thisSquareValue = gameSpace.children[remainingWinConditions[i][j]].children[0].innerHTML;
                    switch (thisSquareValue){
                        case "X":
                            hasX = true;
                            break;
                        case "O":
                            hasO = true;
                    }
                    thisRow.push(thisSquareValue);
                    if (j === 2){ // if it's evaluated an entire triplet
                       // console.log("Row " + remainingWinConditions[i] + " has values " + thisRow);
                        if (hasX && hasO){
                            let removedStripe = remainingWinConditions.splice(i, 1);
                            //console.log("removed " + removedStripe);
                            i--;
                            break;
                        }
                    }

                }
            }                    
            if (remainingWinConditions.length === 0){
                break;
            }
        }
        checkForTies();
    }

    function checkForTies(){
        // if all possible winning stripes currently have an X and an O, end the game in a tie.
        if (remainingWinConditions.length < 1){
            console.log("Game should end");
            endGame("tie");
        } 
        // this function does not currently look forward to see if a win is still possible, only backward.
    }

    function endGame(result){
        console.log("In endGame with result = " + result);
        if (result === "tie"){
            console.log("Game really should be over");
            messageBox.innerHTML = "It's a tie!  Neither player can win.";
        } else {
            console.log("Game should be over");
            messageBox.innerHTML = "WTF";
            messageBox.innerHTML = `${playerNames[result]} wins!  Congratulations!`;
        }
        activeGame = false;
        nameInputs.X.disabled = false;
        nameInputs.O.disabled = false;
    }
})