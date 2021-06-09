const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const makeListOfProducts = (ingredients) =>{
  return ingredients.map(ingredient  => {
 const listItemEl = document.createElement('li');
 listItemEl.textContent = ingredient;
  return listItemEl
});}
const list = makeListOfProducts(ingredients)
listEl.append(...list)
console.log(list);
  



