let inputContainer = document.getElementById("input-container");
let buttonContainer = document.getElementById("buttons");
let attempt = document.getElementById('attempt');


const words = [
    "apple", "ocean", "mountain", "galaxy", "whisper", "thunder", "journey", "puzzle", "luminous", "harmony",
    "forest", "serene", "crystal", "adventure", "twilight", "spectrum", "phantom", "cascade", "solstice", "epic",
    "ripple", "nebula", "vortex", "mirage", "echo", "zenith", "horizon", "mystic", "enigma", "arcane",
    "labyrinth", "radiance", "ember", "illusion", "tranquil", "velocity", "crescent", "stellar", "shimmer", "oracle",
    "eclipse", "resonance", "whimsical", "fable", "gravity", "spectral", "paradox", "infinity", "glimpse", "timeless"
];

let wordIndex = Math.floor((Math.random() * words.length) + 1);
let word = words[wordIndex];
let wordArray = [];
let inputFields = [];
let correctAnswer = [];
let attemptLeft = 10;

attempt.textContent = attemptLeft;


let correctSound = new Audio('./assets/correct.mp3');
let wrongSound = new Audio('./assets/wrong.mp3');
let winSound = new Audio("./assets/win.mp3");


let characters =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


let characterButton;
let wordInput;
for (let char of word) {
    wordArray.push(char.toUpperCase());
}

wordArray.forEach(() => {
    wordInput = document.createElement('input');
    wordInput.classList = "guess";
    wordInput.type = "text";
    wordInput.readOnly = true;
    inputContainer.appendChild(wordInput);
    inputFields.push(wordInput);
});

characters.forEach((character, index) => {
    characterButton = document.createElement('button');
    characterButton.textContent = character;
    characterButton.classList = "button";
    buttonContainer.appendChild(characterButton);

    characterButton.addEventListener("click", function (e) {

        if (attemptLeft <= 0) return;

        let selectedCharacter = e.target.textContent;
        let isCorrect = false;
        let isFound = false;
        wordArray.forEach((element, indexAt) => {
            if (selectedCharacter === wordArray[indexAt]) {
                correctAnswer.push(selectedCharacter);
                inputFields[indexAt].value = selectedCharacter;
                isCorrect = true;
                isFound = true;
            }
        });


        if (!isFound) {
            attemptLeft -= 1;
        }

        if (attemptLeft === 0) {
            disableAllButton();
        }
        checkForWin();
        e.target.disabled = true;
        e.target.classList = "disable";
        attempt.textContent = attemptLeft;
        isCorrect ? correctSound.play() : wrongSound.play();
        console.log(attemptLeft);

    });
});

function checkForWin() {

    if (correctAnswer.length === word.length) {
        winSound.play();
    }
}


function disableAllButton() {
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.disabled = true;
        button.classList = "disable";
    });
}

