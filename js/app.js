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

let winConditions = [
    ["cell1", "cell2", "cell3"],
    ["cell4", "cell5", "cell6"],
    ["cell7", "cell8", "cell9"],
    ["cell1", "cell4", "cell7"],
    ["cell2", "cell5", "cell8"],
    ["cell3", "cell6", "cell9"],
    ["cell1", "cell5", "cell9"],
    ["cell3", "cell5", "cell9"]
];



/*---------------- EVENT LISTENERS -----------------*/

grid.addEventListener('click', checkCell);



/*----------------- FUNCTIONS ---------------------*/
/* Source: I REALLY struggled with getting checkCell() to work, so my friend, Josh helped me and let me 
know that I need to check multiple falsey values at the same time to get it it work properly */

function checkCell(e) {
    if (e.target.textContent !== '' && e.target.textContent !== null && e.target.textContent !== undefined) {
        playerBox.textContent = "This box is taken.  Play somewhere else."
    } else {
        cellClick(e);
        turn++;
    }
}
/* This was my code before my friend helped me:
function checkCell(e) {
    if (e.target.textContent.value == !null) {
        console.log("Try again");
    }else {
        cellClick(e);
        turn++;
    }
}
*/
function cellClick(e) {
    if (turn % 2 == 0) {
        playerBox.textContent = "It is player X's turn";
        e.target.textContent = playerO;
        currentX.push(e.target.id);
        // console.log(currentX);
        checkWin();

    }else {
        playerBox.textContent = "It is player O's turn";
        e.target.textContent = playerX;
        currentO.push(e.target.id);
        // console.log(currentO);
        checkWin();
    }
}


function checkWin() {
    for (let i = 0; i < winConditions.length; i++) { 
        let matchingComboX = 0;
        let matchingComboO = 0;
        // console.log(winConditions[i])
        for (let j = 0; j < winConditions[i].length; j++) {
            if (currentX.includes(winConditions[i][j])){
                matchingComboX++
                console.log(matchingComboX);
            } 
            if (currentO.includes(winConditions[i][j])) {
                // console.log("O check")
                matchingComboO++;
                console.log(matchingComboO);
            } 
            if (currentX.includes(winConditions[i][j]) && matchingComboX === 3) {
                playerBox.textContent = "PLAYER O WINS!";
            }
            if (currentO.includes(winConditions[i][j]) && matchingComboO === 3) {
                playerBox.textContent = "PLAYER X WINS!"
                return
            }  
        
         }
    }

}


/*
function newCheckWin(playerArray) {
    for (i = 0' i < winConditions.length; i++ ) {
        let counter = 0;
        for (j = 0; j < winCondition[i]; j++) {
            console.log("counter" + counter)
            console.log("win element" + winConditions[i][j])
            if (playerArray.includes(winCondition[i][j])) {
                counter ++
                if (counter == 3) {
                    console.log("Player wins");
                    return
                }
            }
        }
}
}
*/





// function checkWin() {
//     for (let i = 0; i < winConditions.length; i++) {
//         let matchingCombo = 0;
//         console.log('first step');
//         for (let j = 0; j <winConditions[i].length; j++) {
//             console.log('second step');
//             if (currentX.includes(winConditions[i][j])) {
//                 console.log('third step');
//                 matchingCombo++;
//             }
//                 if (currentX.includes(winConditions[i]) && matchingCombo === 3) {
//                     console.log('Game Over');
//                 }
//         }
//     }
// }





// if(playerTurn) {
//     playerX.push
// } 
// */