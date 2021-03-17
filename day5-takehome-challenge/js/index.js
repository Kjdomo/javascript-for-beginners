function validatePassword(password) {
    if (password.length < 6 || password.length > 20) {
        alert("Password length must be between 6-20 characters.");
    } else if (/[^a-z]/i.test(password[0])) {
        /* 
         * Uses Regex to test whether the first character ism't a letter don't worry about this too much
         * Reference: https://stackoverflow.com/questions/8540015/determine-if-string-starts-with-letters-a-through-i
         * Provides some ideas to other possible solutions.
         */

        alert("Password must start with a letter");
    } else {
        alert("The password entered is valid!");
    }
}

const password = prompt("Enter a password:");
validatePassword(password);