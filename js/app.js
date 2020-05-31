document.addEventListener('DOMContentLoaded', function() {
    /*-----------> DOM REFS <-------------------*/ 
    let gameFace = document.getElementById('gameFace');
    let topLeftText = document.getElementById('topLeft')
    // let button

    /*-----------> Game Logic Variables <-----------*/ 
    let userTurn = null;
    let computerTurn = null;

    /*-----------> Event Listener <-----------*/ 
    gameFace.addEventListener('click', user);
    
    function user() {
        var myMove = document.getElementById('TopLeftText');
        myMove.innerHTML = "X";
    }
})