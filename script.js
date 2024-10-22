const display = document.getElementById('display');

// Function to add clicked buttons to the display screen
function appendToDisplay(value) {
    display.value += value; 
}

// Function to clear the entire display/reset it
function clearDisplay() {
    display.value = '';  // turns the display to an empty string
}

// // Function to delete the last character from the display
// function deleteLast() {
//     display.value = display.value.slice(0, -1);  // Remove the last character from the string
// }

// Function to calculate the result of the expression
function calculate() {
    try {
        display.value = eval(display.value);  // Evaluate the mathematical expression on the display
    } catch (error) {
        display.value = 'Error';  // If there's an error in the calculation, display "Error"
    }
}
