const categoryElements = document.querySelectorAll('.item');
// const categoryList = document.querySelector('#category');

console.log(`В списке ${categoryElements.length} категории`)
for(const element of categoryElements) {
const categoryTitle = element.querySelector('h2');
console.log('Категория:',categoryTitle.textContent);
const names =  element.querySelectorAll('li');
// for(const name of names){
//     console.log(name.textContent)
// }
console.log('Количество элементов :',names.length);}


