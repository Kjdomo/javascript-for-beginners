// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// Prompt and store the user for their first name
const name = prompt("What is your first name?");

/*
 * Coverts firstName string into an array which contains the names letters
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */
const nameList = name.split('');


/*
 * Reverses the order of characters in the name list.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */

const reversedNameList = nameList.reverse();


/*
 *  Converts reversed list of characters in list into a string.
 *  Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
const reversedName = reversedNameList.join('');

// Alert the reversed name
alert(reversedName);


/*
 * Note: The code could be simplified to look something like this.
 * const name = prompt("What is your first name?");
 * const reversedName = firstName.split('').reverse().join('');
 * alert(reversedName);
 */






// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

const num1 = prompt("Enter a number", "10");
const num2 = prompt("Enter a number", "10");

const covertedNum1 = parseInt(num1);
const covertedNum2 = parseInt(num2);

const solution = covertedNum1 + covertedNum2;
alert(solution);


/*
 * Note: The code could be simplified to look something like this.
 * const num1 = parseInt(prompt("Enter a number", "10"));
 * const num2 = parseInt(prompt("Enter a number", "10"));
 * const solution = num1 + num2;
 * alert(solution);
 */


