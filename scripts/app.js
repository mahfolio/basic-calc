function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

let operator;
let number;
let anotherNumber;

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error("Unknown operator");
    }
}



// function calculate(operation, a, b) {
//     switch (operation) {
//         case 'add':
//             return add(a, b);
//         case 'subtract':
//             return subtract(a, b);
//         case 'multiply':
//             return multiply(a, b);
//         case 'divide':
//             return divide(a, b);
//         default:
//             throw new Error("Unknown operation");
//     }
// }

// function main() {
//     try {
//         console.log("Addition: ", calculate('add', 5, 3));
//         console.log("Subtraction: ", calculate('subtract', 5, 3));
//         console.log("Multiplication: ", calculate('multiply', 5, 3));
//         console.log("Division: ", calculate('divide', 5, 0));
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// main();
