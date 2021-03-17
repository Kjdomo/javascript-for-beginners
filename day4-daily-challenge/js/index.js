// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter a number:"));

if (num1 > num2) {
    alert(num1);
} else if (num2 > num1) {
    alert(num2);
} else {
    alert(`Both the numbers are ${num1}`)
}