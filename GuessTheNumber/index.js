let random = parseInt(Math.random() * 100 + 1)

let results = document.querySelector('#results')

let submit = document.querySelector('#subt')

let userInput = document.querySelector('#guessField')
let guess = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')

let lowOrHigh = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        let guesss = parseInt(userInput.value)
        if (guesss == '' || guesss < 0 || isNaN(guesss)){
            results.innerHTML = `Please Give a valid height. ${guesss}`
        }
        else {
        console.log(guesss)
        validateGuess(guesss)
        }
    })
}

function validateGuess(guesss){
    if (isNaN(guesss)){
        alert('Please enter a valid number')
    }
    else if (guesss < 1){
        alert('Please enter a greater than 1')
    }
    else if (guesss > 100){
        alert('Please enter a less than 100')
    }
    else{
        prevGuess.push(guesss)
        if(numGuess == 11){
            displayGuess(guesss)
            displayMessage(`Game Over. Ramdom Number was ${random}`)
        }
        else{
            displayGuess(guesss)
            checkGuess(guesss)
        }
    }
}

function checkGuess(guesss){
    if (guesss == random){
        displayMessage(`You guessed it right`)
        endgame()
    }
    else if (guesss < random){
        displayMessage(`Number is too low`)   
    }
    else if (guesss > random){
        displayMessage(`Number is too high`)   
    }
}

function displayGuess(guesss) {
    userInput.value = ''
    guess.innerHTML += `${guesss}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}   

function newGame(){
    let newGameButton= document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guess.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start new game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}