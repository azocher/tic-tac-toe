/*---------------- DOM REFERENCES ------------------*/
let playerBox = document.getElementById('playerBox');
let grid = document.querySelector('.grid')
let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let turn = 1;
let playerX = "X";
let playerO = "O";
let currentX = [];
let currentO = [];

/*------------------- GAME LOGIC -------------------*/

console.log(cell1.textContent.value)

let winConditions = [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9],
    [cell1, cell4, cell7],
    [cell2, cell5, cell8],
    [cell3, cell6, cell9],
    [cell1, cell5, cell9]
    [cell3, cell5, cell9]
];



/*---------------- EVENT LISTENERS -----------------*/

grid.addEventListener('click', checkCell);



/*----------------- FUNCTIONS ---------------------*/

function checkCell(e) {
    if (e.target.textContent.value == !null) {
        console.log("Try again");
    }else {
        cellClick(e);
        turn++;
    }
}


function cellClick(e) {
    if (turn % 2 == 0) {
        playerBox.textContent = "It is player X's turn";
        e.target.textContent = playerO;
        currentX.push(e.target.id);
        console.log(currentX);

    }else {
        playerBox.textContent = "It is player O's turn";
        e.target.textContent = playerX;
        currentO.push(e.target.id);
        console.log(currentO);
    }
}

function checkWin(e) {
    currentX.includes(winConditions)
}