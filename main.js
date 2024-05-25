let randomNumber;
let trialsLeft = 10;

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('submitGuess').addEventListener('click', submitGuess);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trialsLeft = 10;
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('trialsLeft').textContent = 'Trials left: 10';
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').disabled = false;
    document.getElementById('submitGuess').disabled = false;
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
        document.getElementById('trialsLeft').textContent = `Trials left: ${trialsLeft}`;
    }
}

