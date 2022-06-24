'use strict';
// selcting element
  const score0El =document.getElementById('score--0');
  const score1El = document.getElementById('score--1');
  
  const  diceEl = document.querySelector('.dice');
  
  var btnNew = document.querySelector('.btn--new');
  var btnRoll = document.querySelector('.btn--roll');
  var btnHold =document.querySelector('.btn--hold');
  
  var current0El= document.getElementById('current--0');
  var current1El =document.getElementById('current--1');

  var player0El =document.querySelector('.player--0');
  var player1El = document.querySelector('.player--1');

  score0El.textContent=0;
  score1El.textContent=0;
  diceEl.classList.add('hidden');

  var switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer= activePlayer=== 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  
  let score = [0,0];
  let currentScore=0;
  let activePlayer = 0;
 let playing=true;

  //rolling dice

  btnRoll.addEventListener('click',function() {
    if(playing){

    

    //generating random dice number 
    var  dice =  Math.trunc(Math.random()*6)+1;

    // display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore

    }
    else{
        switchPlayer();
    }
  }

  })

  btnHold.addEventListener('click',function(){
    if(playing){

    
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];


    //winner 
    if(score[activePlayer]>=10){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    else{
//Switch player
    switchPlayer();
    }
  }
  })
  btnNew.addEventListener('click',function(){
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    playing=true;
    
  })
