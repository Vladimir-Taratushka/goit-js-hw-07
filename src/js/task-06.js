const Elinput = document.querySelector('#validation-input');
Elinput.addEventListener('blur',onInputBlur) 
console.log(Elinput.dataset.length);

function onInputBlur (event) {
 if(event.currentTarget.value.length !=Elinput.dataset.length ){
    Elinput.style.borderColor ='#f44336';
 }else {Elinput.style.borderColor ='#4caf50'};
};