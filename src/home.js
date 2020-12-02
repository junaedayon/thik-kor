let correctNumber = getRandomNumber();



window.onload = function () {
    document.getElementById("number-submit").addEventListener("click" , playGame);
   // document.getElementById("restart").addEventListener("click" , initGame)
     
}

function playGame () {
    let numberGuess = document.getElementById("submit-guess").value;
    console.log(correctNumber);
    theResult(numberGuess);
   
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
         
             
    }
    dialog += text;
    dialog += "</div>"
    console.log(getDialog)
    return dialog;  
}
function showYouWon () {
    const text = "Awesome Job , You Get It."

    let dialog = getDialog('won' , text);
    
    document.getElementById("result").innerHTML = 'hello boss';
}
function showHigh () {
    const text = "Your guess is too high."

    let dialog = getDialog('warning' , text);
    //document.getElementById("result").innerHTML = dialog;
}
function showLow () {
    const text = "Your guess is too low."

    let dialog = getDialog('warning' , text);
   // document.getElementById("result").innerHTML = dialog;
}


function getRandomNumber () {
    let randomNumber = Math.random() ;
    let wholeNumber = Math.floor (randomNumber * 100) + 1;
    return(wholeNumber);
}