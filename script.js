let inputContainer = document.getElementById("input-container");

let word = "Appear";
let wordArray = [];
let typedWord = [];
let characters = ['A', 'B', 'C'];
let wordInput;
for (let char of word) {
    wordArray.push(char);
}

wordArray.forEach(()=>{
    wordInput =document.createElement('input');
    wordInput.classList = "guess";
    wordInput.type = "text";
    inputContainer.appendChild(wordInput);
});

document.addEventListener("keypress", function(e){});


