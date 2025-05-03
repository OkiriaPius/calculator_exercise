const delBtn = document.querySelector(".delete_btn");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const numbers = document.querySelectorAll(".number_variable");
const digitalNumbers = document.querySelectorAll(".digits");
const calculatorDisplay = document.querySelector(".calculator_display");
 


 //math calculation functions

let addition = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let multiplication =(a, b) => a * b;
let division = (a, b) => {
    if (b === 0) return 'Error';
    return a / b;
}

// variables for cal operation
let firstNum = '';
let operator = '';
let anotherNum = '';
//Track if the typed is second number
let isSecond = false;

// func for calling the two num
function press(value) {
    if (!isSecond) {
        firstNum += value;
        calculatorDisplay.value = firstNum;        
    }
    
    else {
        anotherNum += value;
        calculatorDisplay.value = anotherNum;
    }
}

// when an operator is clicked
function setOperator(op) {
    if (firstNum === '') return;
    operator = op;
    isSecond = true;
}

// for equals operations
function operate() {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(anotherNum);
    let answer = 0;

    if (operator === '+') {
        answer = addition(num1, num2);
    } 
    else if (operator === '-') {
        answer = subtraction(num1, num2);
    }
    else if (operator === '*') {
        answer = multiplication(num1 , num2);
    }
    else if (operator === '/') {
        answer = division(num1, num2);        
    }
    
    calculatorDisplay.value = (answer);

    // resting for the next operations

    firstNum = answer.toString();
    anotherNum = '';
    operator = '';
    isSecond = false;
}

operatorBtn.addEventListener ('click',()=>{
    
});

// clearing the display values
function clearDisplay() {
    firstNum = '';
    anotherNum = '';
    operator = '';
    isSecond = false;
    calculatorDisplay.value = '';
}