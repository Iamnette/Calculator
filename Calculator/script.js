// map
const display = document.getElementById('display') //display screen
const calculator = document.querySelector('.calculator')
const numbers = document.querySelectorAll('button')

// click events
function log(button) {
    display.value += button.innerText
}
numbers.forEach(button => button.addEventListener('click', () => log(button)))

// Clear Delete and Result Buttons
const c = document.querySelector('.clear').addEventListener('click', clear)
function clear() {
    display.value = ''
}

const d = document.querySelector('.delete').addEventListener('click', del)
function del() {
    display.value = display.value.slice(0, -1)
}

const equal = document.getElementById('equal').addEventListener('click', result)
let displayValue= display.value
function result() {
        // split the display value into an array of numbers and operators
        const expression = display.value.split(/(\+|\-|\×|\÷)/g);
       
        let currentResult = parseFloat(expression[0]);
        let currentOperator = null;
        
        // calculation
        for (let i = 0; i < expression.length; i++) {
            const operator = expression[i];
            if (operator === '+' || operator === '-' || operator === '×' || operator === '÷') {
                currentOperator = operator;
            } else {
                const number = parseFloat(operator);
                if (currentOperator === '+') {
                    currentResult += number;
                } else if (currentOperator === '-') {
                    currentResult -= number;
                } else if (currentOperator === '×') {
                    currentResult *= number;
                } else if (currentOperator === '÷') {
                    currentResult /= number;
                }
            }
        }
        
        // update the display 
        display.value = currentResult;
    }
    
// Personalize calculator colors
const randomBtn = document.getElementById('randomBtn').addEventListener('click', randomColor)
function randomColor() {
    let randomNumber1 = Math.floor(Math.random() * 256)
    let randomNumber2 = Math.floor(Math.random() * 256)
    let randomNumber3 = Math.floor(Math.random() * 256)
    let rgb = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    calculator.style.backgroundColor = rgb
    
}  
