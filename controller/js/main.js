document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('calculator-form');
const history = document.getElementById('history');
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.number');
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.querySelector('body');

toggleSwitch.addEventListener('click', () => {
 toggleSwitch.classList.toggle('active');
   
   body.classList.toggle('body-noche');
   body.classList.toggle('body-dia');
})


let currentInput = "";


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        e.preventDefault(); 
        const value = btn.value;
        console.log("vas por" + value);

         if (value === "C") 
        {
        history.textContent = currentInput;
        currentInput = "";
        screen.textContent = "0";
        }

        else if (value === "=") {
            const result = eval(currentInput);
            screen.textContent = result;
            console.log("resultado: " + result);
            currentInput = result;
            localStorage.setItem("lastResult", result);
        }
        else {
            currentInput += value;
            console.log(currentInput);
            screen.textContent = currentInput;
        }
    });
   });









});