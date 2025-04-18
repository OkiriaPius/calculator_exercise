const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".minus");
const multiplicationBtn = document.querySelector(".multiply");
const delBtn = document.querySelector(".delete_btn");
const divisionBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const numbers = document.querySelectorAll(".number_variable");
const digitalNumbers = document.querySelectorAll(".digits");
const calculatorDisplay = document.querySelector(".calculator_display");
let numberToUse;

 const getNumber = () => {
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            numberToUse = number.innerText;
            return calculatorDisplay.value += numberToUse;
        });
     
    });
    
 } 

 
 getNumber();


delBtn.addEventListener("click", () => {
    return calculatorDisplay.value = "";
});

digitalNumbers.forEach(digitalNumber => {
    digitalNumber.addEventListener("")
});