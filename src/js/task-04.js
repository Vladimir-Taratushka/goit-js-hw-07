const counterValue = {

    value:0,

    
increment(){
    this.value +=1;
},
decrement(){
    this.value -=1;
},
};
const valueEl = document.querySelector('#value')
const incrementBtn = document.querySelector('[ data-action ="increment"]');
const decrementBtn = document.querySelector( '[data-action="decrement"]');


incrementBtn.addEventListener('click', onBtnIncrementClick);
decrementBtn.addEventListener('click',onBtnDecrementClick);

   function onBtnIncrementClick   (){
    counterValue.increment();
    valueEl.textContent =counterValue.value;
   
}

   function  onBtnDecrementClick (){
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
}