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
        } else if ((buttonText === '=' && firstNumber && secondNumber) || (firstNumber && secondNumber &&
            (buttonText === '+' ||
                buttonText === '-' ||
                buttonText === 'x' ||
                buttonText === '÷'))) {
            if (secondNumber === '0' && currentOperator === '÷') {
                display.innerText = 'Undefined';
                firstNumber = '';
                secondNumber = '';
                currentOperator = '';
                result = '';
            }
            result = calculate(currentOperator, Number(firstNumber), Number(secondNumber));
            display.innerText = result.toFixed(2);
            firstNumber = result.toString();
            secondNumber = '';
            currentOperator = buttonText;
        } else if (buttonText === '+' || buttonText === '-' || buttonText === 'x' || buttonText === '÷') {
            currentOperator = buttonText;
            // display.innerText = '';
            // display.innerText = operator;
        } else if (firstNumber && currentOperator) {
            if (buttonText === '.') {
                if (!secondNumber.includes('.')) {
                    secondNumber += buttonText;
                    display.innerText = secondNumber;
                    if (display.innerText[0] === '.') {
                        display.innerText = '0' + secondNumber;
                    }
                }
            } else if (buttonText === 'DEL') {
                secondNumber = secondNumber.slice(0, -1);
                display.innerText = secondNumber || '0';
            } else {
                secondNumber += buttonText;
                display.innerText = secondNumber;
                if (display.innerText[0] === '.') {
                    display.innerText = '0' + secondNumber;
                }
            }
            
            // } else if (result) {
            //   firstNumber = '';
            //   secondNumber = '';
            //   operator = '';
            //   result = '';
            //   display.innerText = '';
            //   firstNumber += buttonText;
            //   display.innerText = firstNumber;
        } else {
            if (result) {
                firstNumber = '';
                secondNumber = '';
                currentOperator = '';
                result = '';
                display.innerText = '';
            }
            if (buttonText === '.') {
                if (!firstNumber.includes('.')) {
                    firstNumber += buttonText;
                    display.innerText = firstNumber;
                    if (display.innerText[0] === '.') {
                        display.innerText = '0' + firstNumber;
                    }
                }
            } else if (buttonText === 'DEL') {
                firstNumber = firstNumber.slice(0, -1);
                display.innerText = firstNumber || '0';
            } else {
                firstNumber += buttonText;
                display.innerText = firstNumber;
                if (display.innerText[0] === '.') {
                    display.innerText = '0' + firstNumber;
                }
            }
        }
    });
});

// ALL FUNCTIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
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
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            throw new Error("Unknown operator");
    }
}
