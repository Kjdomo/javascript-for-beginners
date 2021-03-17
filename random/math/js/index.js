function doMath (num1, num2, operator='add') {
    let result;
    switch (operator) {
        case "add": // operator === "add"
            console.log("op", operator);
            result =  num1 + num2;
            break;
        case "sub": // operator === "sub"
            console.log("op", operator);
            result = num1 - num2;
            break;
        case "mul": // operator ==== "mul"
            console.log("op", operator);
            result = num1 * num2;
            break;
        case "div": // operator === "div"
            console.log("op", operator);
            result = num1 / num2;
            break;
        case "mod": // operator === "mod"
            console.log("op", operator);
            result = num1 % num2;
            break;
    }
    return result;
}

const number1 = parseInt(prompt('Enter a number'));
const number2 = parseInt(prompt('Enter a number'));
const operator = prompt('What math operator should I use?');
const operatorObject = {
    "add": "+",
    "sub": "-",
    "mul": "*",
    "div": "/",
    "mod": "%"
}
if (operatorObject[operator]) {
    const functionResult = doMath(number1, number2, operator);
    alert(`${number1} ${operatorObject[operator]} ${number2} = ${functionResult}`);
} else {
    alert("Not a valid operator!")
}