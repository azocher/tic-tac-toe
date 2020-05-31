document.addEventListener('DOMContentLoaded', function() {
    /*-----------> DOM REFS <-------------------*/ 
    let everyMove = document.querySelectorAll('.moveSpace');
    let gameSpace = document.querySelector('.gameFace');


    /*-----------> Game Logic Variables <-----------*/ 
    let userTurn = null;
    let computerTurn = null;
    let playerMove = "X";
    let compMove = "O"
    let winConditions = [[0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,4,8], 
    [6,4,2], 
    [0,3,6],
    [1,4,7]
    [2,5,8]];

    let gameState = ["", "", "", "", "", "", "", "", ""]

    /*-----------> Event Listener <-----------*/ 
    function init() {
        for (var i = 0; i < everyMove.length; i++) {
            everyMove[i].innerText = '';
            everyMove[i].addEventListener('click', click)
        }
    }

    function click(e) {
        console.log(e.target.id);
    }

})