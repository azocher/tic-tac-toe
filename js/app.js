/*---------------- DOM REFERENCES ------------------*/
let playerBox = document.getElementById('playerBox');
let grid = document.querySelector('.grid')
let turn = 1;
let playerX = "X";
let playerO = "O";
/*------------------- GAME LOGIC -------------------*/


/*---------------- EVENT LISTENERS -----------------*/

grid.addEventListener('click', checkCell);



/*----------------- FUNCTIONS ---------------------*/

function checkCell(e) {
    if (e.target.textContent.value == null) {
        cellClick(e);
        turn++;
    }else {
        console.log("Try again");
    }
}


function cellClick(e) {
    if (turn % 2 == 0) {
        playerBox.textContent = "It is player X's turn";
        e.target.textContent = playerO;
        // turn++;
    }else {
        playerBox.textContent = "It is player O's turn";
        e.target.textContent = playerX;
        // turn++;
    }
}










