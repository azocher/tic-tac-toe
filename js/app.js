//pretty much copied https://www.youtube.com/watch?v=XwPVlXb5thI

// and https://www.youtube.com/watch?v=YOViDMVWac8&amp;t=2712s

// JAVASCRIPT STUFF
var players=[];
var markers=["X","O"];
var scores = [0,0];
players[0] = "player one";
players[1] = "player two";
var whoseTurn = 0;
var winValues = [7,56,73,84,146,273,292,448];
var gameOver = false;



function pointCount(userPoints)
{
    scores[whoseTurn] += userPoints;
}

//DRAW BOARD
function play(clickedDiv, divPoints)
{
    if(!gameOver)
    {
    if (clickedDiv.innerHTML == "&nbsp;")
    {
        pointCount(divPoints);
        clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
        winCheck();
        if (!gameOver) {togglePlayer();}
    }
  }
}

// WHOS TURN

function togglePlayer()
{
    if(whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;

    document.getElementById("game-display").innerText = players[whoseTurn] + "'s turn";
}

//win tester
function winCheck()
{
    console.log (scores[0] + " " + scores[1]);
    for (var i = 0; i < winValues.length; i++)
    {
        if ((winValues[i] & scores[whoseTurn]) == winValues[i])
        {
            gameOver = true;
            document.getElementById("game-display").innerText = players[whoseTurn] + " wins!";
        }
    }

    if (((scores[0] + scores[1]) == 511) && !gameOver)
    {
        document.getElementById("game-display").innerText = "Cat's game";
        gameOver = true;
    }
}

// RESET
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);