let inputContainer = document.getElementById("input-container");
let buttonContainer = document.getElementById("buttons");

let word = "Disappear";
let wordArray = [];
let inputFields = [];


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
        let selectedCharacter = e.target.textContent;

        wordArray.forEach((element, indexAt) => {
            if (selectedCharacter === wordArray[indexAt]) {
                inputFields[indexAt].value = selectedCharacter;
            }
            else {
                console.log(e);
            }
        });
    })
})


