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
            // Do something when ➡ button is clicked
            wordInput.value = '';
        } else {
            // Append the value to the wordInput
            wordInput.value += value;
        }
    });
});

