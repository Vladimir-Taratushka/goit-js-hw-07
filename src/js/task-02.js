const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')
console.log(listEl);

for (const ingredient  of ingredients ){

 const listItemEl = document.createElement('li');
 listItemEl.textContent = ingredient;
 console.log(listItemEl);

listEl.appendChild(listItemEl);
}


