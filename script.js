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
            let indexOfOperator = 0;
            // find operand1, operator2 and the operator
            for(let i = 0; i < display.textContent.length; i++) {
                let char = display.textContent[i];
                if (char === '+' || char === '-' || char === '*' || char === '/') {
                    operand1 = parseInt(display.textContent.slice(0, i)); // getting first operand
                    operator = char;
                    indexOfOperator = i;
                }
            }
            operand2 = parseInt(display.textContent.slice(indexOfOperator+1)); // getting the second operand
            display.textContent = operate(operand1, operand2, operator); // placeholder until I evaluate 
        }
        else {
            display.textContent += buttonText;
        }
    })
})