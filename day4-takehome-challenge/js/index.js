// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

let num1 = parseInt(prompt("Enter a number:"));
if (isNaN(num1)) {
    num1 = parseInt(prompt("The value inputed wasn't a number. Please eneter a number:"))
}

let num2 = parseInt(prompt("Enter a number:"));
if (isNaN(num2)) {
    num2 = parseInt(prompt("The value inputed wasn't a number. Please eneter a number:"))
}


if (num1 > num2) {
    alert(num1);
} else if (num2 > num1) {
    alert(num2);
} else {
    alert(`Both the numbers are ${num1}`)
}