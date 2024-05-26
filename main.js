let randomNumber;
let trialsLeft = 10;

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('submitGuess').addEventListener('click', submitGuess);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trialsLeft = 10;
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('resultMessage').html = '';
    document.getElementById('trialsLeft').textContent = 'Trials left: 10';
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').disabled = false;
    document.getElementById('submitGuess').disabled = false;
}

function generateRandomNumber(){



}


function hide(isHide){

}

function disable(isDisabled){

}

function setText(cssClass,text){
    
}

function setValue(cssClass,text){
    
}

function clearScreen(){

}

function submitGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    trialsLeft--;

    if (userGuess === randomNumber) {
        document.getElementById('resultMessage').textContent = 'Congratulations! You guessed the correct number!';
        document.getElementById('userGuess').disabled = true;
        document.getElementById('submitGuess').disabled = true;
    } else if (trialsLeft === 0) {
        document.getElementById('resultMessage').textContent = `Game Over! The correct number was ${randomNumber}.`;
        document.getElementById('userGuess').disabled = true;
        document.getElementById('submitGuess').disabled = true;
    } else {
        if (userGuess > randomNumber) {
            document.getElementById('resultMessage').textContent = 'Your guess is larger than the correct number.';
        } else {
            document.getElementById('resultMessage').textContent = 'Your guess is less than the correct number.';
        }
     
    }

    document.getElementById('trialsLeft').textContent = `Trials left: ${trialsLeft}`;
}

en-statemstns.js
ar-statements.js

let translationsEN={
    gessingGame:"gissing Game"
}


let translationsAR={
    gessingGame:"لعبة التحزير"
}


// take current langualge from local storage, if not exist, default is english
let currentLanguage=languages.en;

let translations=translationsEN;

function loadTranslation(){
    if (currentLanguage) {
        translations=translationsEN;
    }
    else {
        translations=translationsAR;
    }
}



let languages={
    en:0,
    ar:1
}

