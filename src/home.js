let correctNumber = getRandomNumber();
let guesses = [] ;



window.onload = function () {
    document.getElementById("number-submit").addEventListener("click" , playGame);
    document.getElementById("restart").addEventListener("click" , initGame)
     
}

function playGame () {
    let numberGuess = document.getElementById("submit-guess").value;
    console.log(correctNumber);
    theResult(numberGuess);
    saveGuessHistory(numberGuess) ;
    displayHistory();
   
}

function theResult (numberGuess) {
    if (numberGuess > correctNumber) {
        showHigh();
    } else if (numberGuess < correctNumber) {
        showLow();
    } else {
        showYouWon();
    }

}

function getDialog (dialogType , text) {
    let dialog  ;
    switch (dialogType) {
        case "warning":
            dialog = "<div class = 'alert alert-danger' role = 'alert'>"
            break;
        case "won":
            dialog = "<div class = 'alert alert-primary' role = 'alert'>"    
            break;  
        case "danger":
            dialog = "<div class = 'alert alert-warning' role = 'alert'>"
            break;
         
             
    }
    dialog += text;
    dialog += "</div>"
    return dialog;  
}
function showYouWon () {
    const text = "Awesome Job , You Get It."

    let dialog = getDialog('won' , text);
    
    document.getElementById("result").innerHTML = dialog;
}
function showHigh () {
    const text = "Your guess is too high."

    let dialog = getDialog('warning' , text);
    document.getElementById("result").innerHTML = dialog;
}
function showLow () {
    const text = "Your guess is too low."

    let dialog = getDialog('danger' , text);
    document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess) {
    guesses.push(guess) ;
   // console.log(guesses) ;

}
function displayHistory () {
    let index = guesses.length - 1 ; //todo
    let list = "<ul class = 'list-group'>" ;
    
    while (index >= 0) {
        list += "<li class = 'list-group-item'>" + 
        "Your guessed is " + guesses[index] + "</li>" ;
        index -= 1 ;
    }
    list += '</ul>' ;

    
    document.getElementById("history").innerHTML = list ;
}
function initGame () {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = '' ;
    guesses = [] ;
    displayHistory();

}

function getRandomNumber () {
    let randomNumber = Math.random() ;
    let wholeNumber = Math.floor (randomNumber * 100) + 1;
    return(wholeNumber);
}