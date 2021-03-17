function isOddOrEven(number) {
    if (number % 2 == 0) {
        alert(`${number} is even`);
    } else {
        alert(`${number} is odd`);
    }
}

const number = prompt("Enter a number:");
isOddOrEven(number);


