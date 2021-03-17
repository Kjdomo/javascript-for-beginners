// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name


// Prompt user for their first name
const firstName = prompt("What is your first name?");

// Prompt user for their last name
const lastName = prompt("What is your last name?");

// Log first name to console.
console.log(firstName); 

// Alerts last name
alert(lastName); 


// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

// Prompt user for their birthday
const birthday = prompt("What is your birthday?");

/*
 * Confirms with user whether the value they inputed is their actual birthday.
 * Extra: Logs to console whether they confirmed yes or no.
 */
const confirmedBirthday = confirm(`Are you sure that ${birthday} is your birthday?`);
console.log(confirmedBirthday);

// Alerts the birthday
alert(birthday);