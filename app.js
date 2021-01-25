
/*
  function computerPlay (){

  }
   let playerSelection;
  let computerSelection;

  "You Lose! Paper beats Rock"  */

  const selectionButtons = document.querySelectorAll('[data-selection]')

  selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        makeSelection(selectionName)
    })
  })

  function makeSelection(selection) {
    console.log(selection)
  }





  /*
  function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  function game(){

  } */