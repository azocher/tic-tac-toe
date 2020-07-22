

# Tic Tac Toe

## Objectives

* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript

### Technologies
- HTML
- CSS
- Javascript

### Code snippets I am happy with
 
 I was really happy with his css stylings, because I was able to creat a class in JS to call these CSS selectors as well as store the x and o images and put a border around the image. The border prevented the white background from encroaching the grid border lines.
```css
  .playerx {
  background-image: url('x.png');
  background-size: contain;
  height:125px;
  width: 125px;
  border: solid 5px black;

}

.playero {
  background-image: url('circle.jpeg');
  background-size: contain;
  height:125px;
  width: 125px;
  border: solid 5px black;
```

This particular code was to control the player turns and help the Dom decide which player symbol(I used images for x and o) to place in box. if player turn mod 2 == 0 then call on the CSS class for playero above, Else I called on the playerx class. Both classes were already styled and sized.

  ``` javascript
  function clickblock_1(){ 
  if (playerTurn % 2 == 0){
  block_1.setAttribute('class', "playero");

  }
  else{block_1.setAttribute('class', "playerx");}
  playerTurn++;
  block_1.removeEventListener("click", clickblock_1);
  
}


```
### Code Snippets that I felt very challenged with

The code block below shows my attempt to select a win condition Function. I was only successful at making it say "win" every time I clicked an individual block.
``` javascript

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


 if (one === two && one === three){
     whosWinner(one);
  }
  else if (four === five && four === six){
     whosWinner(four);
  }
  else if (seven === eight && four === nine){
    whosWinner(seven);
  }
  else if (one === five && one === nine){
     whosWinner(one);
  }
  else if (three === five && three === seven){
     whosWinner(two);
  }
  else if (one === four && one=== seven);{
     whosWinner(three);
  }
   if (two === five && two === eight){
     whosWinner(one);
   }
   if (three === six && three=== nine);{
     whosWinner(three)
   }

  }
```
   