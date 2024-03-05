
let extractedWord = "qualsiasi";
shuffle(extractedWord);

// Get the input elements
const inputs = document.querySelectorAll('input[type="button"]');
const wordInput = document.getElementById('wordInput');

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

checkWord = () => {
    if (wordInput.value.toUpperCase() === extractedWord.toUpperCase()) {
        alert('Hai indovinato!');
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
    } else {
        shuffle(extractedWord);
    }
}