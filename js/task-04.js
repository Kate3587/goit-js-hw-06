const counter = document.querySelector('#value');
let counterValue = 0;
 
const addListenerBtn = document.querySelector('.counter__increment');
const removeListenerBtn = document.querySelector('.counter__decremet');

addListenerBtn.addEventListener('click', (event) => {
   counter.textContent = counterValue += 1;
});

removeListenerBtn.addEventListener('click', (event) => {
    counter.textContent = counterValue -= 1;
});

