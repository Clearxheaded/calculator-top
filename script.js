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
        }
        else if (buttonText === '=') {

            let indexOfOperator = -1;
            let operatorFound = false;

            for(let i = 0; i < display.textContent.length; i++) {
                let char = display.textContent[i];
                if (char === '+' || char === '-' || char === '*' || char === '/') {
                    if (operatorFound) {
                        display.textContent = "Invalid input";
                        return;
                    }
                    operator = char; // getting the operator
                    indexOfOperator = i; // getting the operator's position
                    operatorFound = true;
                }
            }

            operand1 = parseFloat(display.textContent.slice(0, indexOfOperator)); // getting first operand
            operand2 = parseFloat(display.textContent.slice(indexOfOperator+1)); // getting the second operand

            if (operator === '/' && operand2 === 0) {
                display.textContent = "Can't divide by zero!";
                return;
            }

            let result = operate(operand1, operand2, operator); 
            operand1 = parseFloat(result.toFixed(2));
            display.textContent = operand1; // assigning operand1 to the display content so that the running calculations can be performed

            operand2 = 0;
            operator = '';         
        }
        else {
            display.textContent += buttonText;
        }
    })
})