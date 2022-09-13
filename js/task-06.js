const refs = {
    inputEl: document.querySelector('#validation-input'),
};

const validLength = Number(refs.inputEl.dataset.length);
refs.inputEl.addEventListener('blur', (event) => {
    if (event.target.value.length === validLength) {
    updateClassEvents('valid', 'invalid') 
    } else {
      updateClassEvents ('invalid', 'valid')
    }
    
})

function updateClassEvents(addCl, remCll) {
    refs.inputEl.classList.remove('invalid');
    refs.inputEl.classList.add('valid');  
   
}