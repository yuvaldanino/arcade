document.getElementById('rollButton').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    const diceImage = document.getElementById('diceImage');
    diceImage.src = `assets/dice${randomNumber}.jpg`; // Assumes you have dice images named dice1.png to dice6.png
});
