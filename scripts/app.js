let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = '';
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.innerText;

        if (buttonText === 'AC') {
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
            result = '';
            display.innerText = '0';
        } else {
            firstNumber += buttonText;
            display.innerText = firstNumber;
        }
    });
});

// ALL FUNCTIONS
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

function calculate(operator, a, b) {
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
