const sizeControlInputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


sizeControlInputEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange (){
   
    spanEl.style.fontSize = sizeControlInputEl.value + 'px';
}

