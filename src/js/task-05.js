const inputEl = document.querySelector('#name-input');
const greatEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange); 


function onInputChange (event){

if (event.currentTarget.value.length >0 ){
     greatEl.textContent = event.currentTarget.value
 } else {greatEl.textContent = 'незнакомец'};
    
    console.log(event.currentTarget.value);
};