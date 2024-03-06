let language = 'it';
let length = 5;
let score = 0;
sessionStorage.setItem('score', score);

newWord();

// Get the input elements
const inputs = document.querySelectorAll('input[type="button"]');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('scoreDisplay');

checkWord = () => {
    if (wordInput.value.toUpperCase() === extractedWord.toUpperCase()) {
        alert('Hai indovinato!'); // TODO: Replace with some css effect

        updateScore();
        newWord();
    } else {
        alert('Riprova!');
    }
}

function shuffle(extractedWord) {
    let parola = extractedWord;
    let output = '';
    let l = parola.length;
    let ll = l;
    const parolArray = [];

    for (let i = 0; i < l; i++) {
        parolArray[i] = parola.at(i);
    }
    for (let i = 0; i < l; i++) {
        let num = Math.floor(Math.random() * ll);
        output += parolArray[num].toUpperCase();
        parolArray.splice(num, 1);
        ll--;
    }
    if (output.toUpperCase() != parola.toUpperCase()) {
        document.getElementById("wordShuffled").value = output;
        console.log(parola + " --> " + output); // DEBUG
    } else {
        shuffle(extractedWord);
    }
}

function randWord(ling,lunghezza){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        let parola = JSON.parse(this.responseText);
        sessionStorage.setItem('word',parola);
       }
    xmlhttp.open("GET", "https://www.defio.info/REST/lingue/entrambe.php?lingua="+ling+"&lun="+lunghezza);
    xmlhttp.send();
}

// Add event listener to each input
inputs.forEach(input => {
    input.addEventListener('click', event => {
        // Get the button value
        const value = input.value;
        
        // Check for specific button values
        if (value === '❌') {
            // Clear the wordInput
            wordInput.value = '';
        } else if (value === '➡') {
            checkWord();
            wordInput.value = '';
        } else {
            wordInput.value += value;
        }
    });
});

function updateScore() {
    score++;
    sessionStorage.setItem('score', score);
    scoreDisplay.innerHTML = score;
}

function newWord() {
    randWord(language, length);
    extractedWord = sessionStorage.getItem('word');
    shuffle(extractedWord);
}