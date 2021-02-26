//Variables
let choice1
let choice2
const displayResult = document.querySelector('.displayresult')
var result = results()
const playerChoices = document.querySelectorAll('.player')
const computerChoice = document.querySelector('.displayComp')
const randomNum = Math.floor(Math.random() * (3))
const playAgain = document.querySelector('.playagain')


//Functions Player to decide
playerChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    choice1 = e.target.id

    //Computer Play function call
    computerPlay()

    //Results function call
    results()

    computerChoice.innerHTML = choice2
    displayResult.innerHTML = result

}))


//Functions Computer to decide using random number
function computerPlay() {
    if (randomNum === 0) {
        return choice2 = "Rock"
    } else if (randomNum === 1) {
        return choice2 = "Paper"
    } else if (randomNum === 2) {
        return choice2 = "Scissors"
    }
}


//Function Results (if else statements)
function results() {
    if (choice1 === "Rock" && choice2 === "Scissors") {
        return result = "You Win"
    } else if (choice1 === "Paper" && choice2 === "Rock") {
        return result = "You Win"
    } else if (choice1 === "Scissors" && choice2 === "Paper") {
        return result = "You Win"
    } else if (choice1 === "Scissors" && choice2 === "Rock") {
        return result = "You Lose"
    } else if (choice1 === "Paper" && choice2 === "Scissors") {
        return result = "You Lose"
    } else if (choice1 === "Rock" && choice2 === "Paper") {
        return result = "You Lose"
    } else if (choice1 === choice2) {
        return result = "It's a Tie Play Again"
    }
}


//Function
playAgain.addEventListener('click', reload)

function reload() {
    location.reload()
}

