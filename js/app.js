document.addEventListener('DOMContentLoaded', function(){
    console.log("in js file!");

    // get DOM refs
   const gameSpace = document.querySelector('.gameSpace');
   const resetButton = document.getElementById('reset');
   const undoButton = document.getElementById('undo');
   const messageBox = document.getElementById('message');
   const squares = [];

   // initialize game globals
   const WIN_CONDITIONS_MASTER = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0 ,4, 8], [6, 4, 2]];
   let remainingWinConditions = [];
   let activeGame = false;
   let currentTurn = ""; // marks which player's turn it is
   let turnCount = null; // marks the number of the current turn
   let moveHistory = [];


   // event listeners
   resetButton.addEventListener("click", reset);
   undoButton.addEventListener("click", undo);
   let squareCount = gameSpace.children.length;
   for (let i = 0; i < squareCount; i++){
       let thisSquare = gameSpace.children[i];
       thisSquare.addEventListener("click", squareClick);
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
    messageBox.innerHTML = "Current turn: Player X"
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
       if (activeGame && e.target.id){ // clicking on the margins between squares triggers an event that lacks a square id
           console.log(`Square ${e.target.id} has been clicked!`);
           e.target.children[0].innerHTML = currentTurn;
           advanceTurn();
       }
    }

    function advanceTurn(){
        turnCount++;
        if (currentTurn === "X"){
            currentTurn = "O";
            messageBox.innerHTML = "Current turn: Player O";
        } else {
            currentTurn = "X";
            messageBox.innerHTML = "Current turn: Player X";
        }
    }
})