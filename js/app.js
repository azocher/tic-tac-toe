const classX = "x"
const classO = "o"
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8],
]
const allCells = document.querySelectorAll(".cell")
const winningText = document.querySelector("#resultText")
const restart = document.getElementById('reset')
let xTurn

gameStart()

restart.addEventListener('click', gameStart)

function gameStart() {
    xTurn = false
    allCells.forEach(cell => {
        cell.classList.remove(classO)
        cell.classList.remove(classX)
        cell.removeEventListener('click', registerClick)
        cell.addEventListener('click', registerClick, {once: true})
    })
    winningText.innerHTML = ""
}
/* registerClick function should: 
place X or O depending on turn,
check for win,
check for draw,
switch turn*/
function registerClick(e) {
    const cell = e.target
    const currentClass = xTurn ? classX : classO //turnary operator, if its x's turn make it o's turn on click
    makeMark(cell, currentClass)
    if (checkForWin(currentClass)) {
        gameEnd(false)
    } else if (isDraw()) {
        gameEnd(true)
    } else {
        swapTurn()
    }
}
function gameEnd(draw) {
    if (draw) {
        winningText.innerHTML = "Draw!"
    } else {
        winningText.innerHTML = `${xTurn ? "X's" : "O's"} Win!`// `` seem to be a third type of "" or '' the $ in my mind is a shortcut for querySelector
    }
}
function isDraw() {
    return [...allCells].every(cell => {
        return cell.classList.contains(classX) || cell.classList.contains(classO)
    })
}
function makeMark (cell, currentClass) {
    cell.classList.add(currentClass)
}
function swapTurn() {
    xTurn = !xTurn
}
function checkForWin(currentClass) {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return allCells[index].classList.contains(currentClass)
        })
    })
}