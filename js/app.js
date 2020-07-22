let playerOne = "x";
let playerTwo = "o";

let oWins = 0;
let xWins = 0;
  

var block_1 = document.getElementById('block_1');
var block_2 = document.getElementById('block_2');
var block_3 = document.getElementById('block_3');
var block_4 = document.getElementById('block_4');
var block_5 = document.getElementById('block_5');
var block_6 = document.getElementById('block_6');
var block_7 = document.getElementById('block_7');
var block_8 = document.getElementById('block_8');
var block_9 = document.getElementById('block_9');
var reset = document.getElementById('reset');

function setup(){
  block_1.addEventListener('click', clickblock_1); //the setup fuction so we dont have to reuse these lines of code
  block_2.addEventListener('click', clickblock_2);
  block_3.addEventListener('click', clickblock_3);
  block_4.addEventListener('click', clickblock_4);
  block_5.addEventListener('click', clickblock_5);
  block_6.addEventListener('click', clickblock_6);
  block_7.addEventListener('click', clickblock_7);
  block_8.addEventListener('click', clickblock_8);
  block_9.addEventListener('click', clickblock_9);
}
setup()

reset.addEventListener('click', clickReset);
const result = document.querySelector(".score-board")
let playerTurn = 1//fist players turn
function clickReset() {
 let allBlocks = document.querySelectorAll('.row div ')//reset page
    for(i = 0; i< allBlocks.length; i++){//choose all item
      allBlocks[i].className = ''


    }
   setup()//called the setup function again instead of having to type all the lines of code




  
  
}

function hasWon(symbol){
  if(symbol ==="playerx"){
    xWins++//add to the scoreboard for x
  //  result.innerText = `${playerOne} has won` //turned lines 54,56 into the function with back ticks on 61
  } else {
   // result.innerText = `${playerTwo} has won`
    oWins++//add to the scoreboard for o
    

  } 
  result.querySelector('.x').innerText = `X has won ${xWins} times`;
  result.querySelector('.o').innerText = `O has won ${oWins} times`;//scoreboard increments in two different lines
   
  block_1.removeEventListener('click', clickblock_1);//to be able to use the classes again
  block_2.removeEventListener('click', clickblock_2);
  block_3.removeEventListener('click', clickblock_3);
  block_4.removeEventListener('click', clickblock_4);
  block_5.removeEventListener('click', clickblock_5);
  block_6.removeEventListener('click', clickblock_6);
  block_7.removeEventListener('click', clickblock_7);
  block_8.removeEventListener('click', clickblock_8);
  block_9.removeEventListener('click', clickblock_9);
  result.className = 'score-board show' 
}



function clickblock_1(){ 
  if (playerTurn % 2 == 0){
  block_1.setAttribute('class', "playero");

  }
  else{block_1.setAttribute('class', "playerx");}
  playerTurn++;
  let result = whosWinner()
    if (result ){
       hasWon(result)
    }
  block_1.removeEventListener("click", clickblock_1);
  
}
function clickblock_2(){
  if (playerTurn % 2 == 0){
    block_2.setAttribute('class', "playero");
  
    }
    else{block_2.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_2.removeEventListener("click", clickblock_2);
   

  
}
function clickblock_3(){
  if (playerTurn % 2 == 0){
    block_3.setAttribute('class', "playero");
  
    }
    else{block_3.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_3.removeEventListener("click", clickblock_3);
    
}
function clickblock_4(){
  if (playerTurn % 2 == 0){
    block_4.setAttribute('class', "playero");
  
    }
    else{block_4.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_4.removeEventListener("click", clickblock_4);
  
}
function clickblock_5(){
  if (playerTurn % 2 == 0){
    block_5.setAttribute('class', "playero");
  
    }
    else{block_5.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_5.removeEventListener("click", clickblock_5);
    
}
function clickblock_6(){
  if (playerTurn % 2 == 0){
    block_6.setAttribute('class', "playero");
  
    }
    else{block_6.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_6.removeEventListener("click", clickblock_6);
  
}
function clickblock_7(){
  if (playerTurn % 2 == 0){
    block_7.setAttribute('class', "playero");
  
    }
    else{block_7.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_7.removeEventListener("click", clickblock_7);
  
}
function clickblock_8(){
  if (playerTurn % 2 == 0){
    block_8.setAttribute('class', "playero");
  
    }
    else{block_8.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_8.removeEventListener("click", clickblock_8);
  
}
function clickblock_9(){
  if (playerTurn % 2 == 0){
    block_9.setAttribute('class', "playero");
  
    }
    else{block_9.setAttribute('class', "playerx");}
    playerTurn++;
    let result = whosWinner()
    if (result ){
       hasWon(result)
    }
    block_9.removeEventListener("click", clickblock_9);
  
}



function whosWinner(){
  let one =document.querySelector('#block_1').className;
  let two =document.querySelector('#block_2').className;
  let three =document.querySelector('#block_3').className;
  let four =document.querySelector('#block_4').className;
  let five =document.querySelector('#block_5').className;
  let six =document.querySelector('#block_6').className;
  let seven =document.querySelector('#block_7').className;
  let eight =document.querySelector('#block_8').className;
  let nine =document.querySelector('#block_9').className;
  if (one === two && one === three) {
     return one;
  }
  else if (four === five && four === six) {
     return four;
  }
  else if (  seven === eight && four === nine) {
       return seven;
  }
  else if (  one === five && one === nine) {
       return one;
  }
  else if (  three === five && three === seven) {
       return three;
  }
  else if (  one === four && one=== seven) {
       return one;
  }
  else if (two === five && two === eight) {
       return two;
   }
  else if (three === six && three=== nine) {
       return three
     
   }
  }

   
  




