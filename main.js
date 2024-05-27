let randomNumber;
let trialsLeft = 10;

function init() {
    document.querySelector('.startButton').addEventListener('click', startGame);
    document.querySelector('.submitGuess').addEventListener('click', submitGuess);
    startGame();
}

function startGame() {
    randomNumber = generateRandomNumber();
    trialsLeft = 10;
    hide('.gameArea', false);
    setText('.resultMessage', '');
    setText('.trialsLeft', 'Trials left: 10');
    setValue('.userGuess', '');
    disable('.userGuess', false);
    disable('.submitGuess', false);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function hide(className, isHide) {
    document.querySelector(className).style.display = isHide ? 'none' : 'block';
}

function disable(className, isDisabled) {
    document.querySelector(className).disabled = isDisabled;
}

function setText(className, text) {
    document.querySelector(className).textContent = text;
}

function setValue(className, value) {
    document.querySelector(className).value = value;
}

function clearScreen() {
    setText('.resultMessage', '');
    setValue('.userGuess', '');
}

function submitGuess() {
    const userGuess = parseInt(document.querySelector('.userGuess').value);
    trialsLeft--;

    if (userGuess === randomNumber) {
        setText('.resultMessage', 'Congratulations! You guessed the correct number!');
        disable('.userGuess', true);
        disable('.submitGuess', true);
    } else if (trialsLeft === 0) {
        setText('.resultMessage', `Game Over! The correct number was ${randomNumber}.`);
        disable('.userGuess', true);
        disable('.submitGuess', true);
    } else {
        if (userGuess > randomNumber) {
            setText('.resultMessage', 'Your guess is larger than the correct number.');
        } else {
            setText('.resultMessage', 'Your guess is less than the correct number.');
        }
    }

    setText('.trialsLeft', `Trials left: ${trialsLeft}`);
}


window.onload = init;
