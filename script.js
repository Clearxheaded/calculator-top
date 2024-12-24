let operand1 = 0;
let operand2 = 0;
let operator = '';


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operation) {
    switch (operation) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x ,y);
            break;
    }
}
 
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent;

        if (buttonText === 'clear') {
            display.textContent = '';
            operand1 = 0;
            operand2 = 0;
            operator = '';
            return;
        }
        else if (buttonText === '=') {
            let indexOfOperator = -1;
            let operatorFound = false;

            for (let i = 0; i < display.textContent.length; i++) {
                let char = display.textContent[i];
                if (['+', '-', '*', '/'].includes(char)) {
                    if (operatorFound) {
                        display.textContent = "Invalid input";
                        return;
                    }
                    operator = char; 
                    indexOfOperator = i; 
                    operatorFound = true;
                }
            }

            operand1 = parseFloat(display.textContent.slice(0, indexOfOperator)); 
            operand2 = parseFloat(display.textContent.slice(indexOfOperator + 1)); 

            if (isNaN(operand1) || isNaN(operand2)) {
                display.textContent = "Invalid input";
                return;
            }

            if (operator === '/' && operand2 === 0) {
                display.textContent = "Can't divide by zero!";
                return;
            }

            let result = operate(operand1, operand2, operator); 
            operand1 = parseFloat(result.toFixed(2));
            display.textContent = operand1;

            operand2 = 0;
            operator = '';         
        }
        else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (operator) {
                display.textContent = display.textContent.slice(0, -1) + buttonText;
            } else {
                display.textContent += buttonText;
            }
            operator = buttonText;
        }
        else if (buttonText === '.') {
            if (!display.textContent.includes('.')) {
                display.textContent += buttonText;
            }
        }
        else {
            display.textContent += buttonText;
        }
    });
});
