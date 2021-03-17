function fizzbuzz () {
    for (let i = 1; i <= 100; i++) {
        let outputStr = "";
        if (i % 3 == 0) {
            outputStr += "Fizz"
        }
        if (i % 5 == 0) {
            outputStr += "Buzz";
        }
        console.log(outputStr.length ? outputStr : i);
    }
}

fizzbuzz();