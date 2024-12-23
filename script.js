const operand1 = 0;
const operand2 = 0;
const operator = '';


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
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x ,y);
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
            display.textContent = 'Result'; // placeholder until I evaluate 
        }
        else {
            display.textContent += buttonText;
        }
    })
})