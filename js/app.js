document.addEventListener('DOMContentLoaded', function(){
    console.log("in js file!");

    // get DOM refs
   const gameSpace = document.querySelector('.gameSpace');
   const resetButton = document.getElementById('reset');
   const undoButton = document.getElementById('undo');
   const messageBox = document.getElementById('message');
   const boxes = [];

   // initialize game constants
   const WIN_CONDITIONS_MASTER = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0 ,4, 8], [6, 4, 2]];

   // event listeners
   resetButton.addEventListener("click", reset);
   undoButton.addEventListener("click", undo);
   let boxCount = gameSpace.children.length;
   for (let i = 0; i < boxCount; i++){
       let thisBox = gameSpace.children[i];
       thisBox.addEventListener("click", boxClick);
   }

   // stub out event listener functions
   function reset() {
       console.log("Reset button clicked!");
   }

   function undo() {
       console.log("Undo button clicked!");
   }

   function boxClick(e) {
       console.log(`Box ${e.target.id} has been clicked!`);
   }
})