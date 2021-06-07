const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('#gallery');

// console.log(images);
// const makeImagesGalery = (images) => {
//   return images.map(image => {

//     const imageEl = document.createElement('img');
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.style.marginRight = 15;
//     imageEl.width = 640;
//     imageEl.classList.add('pictures');
//     const imageListEl = document.createElement('li');
//      imageListEl.appendChild(imageEl);
//      return imageListEl;
//     })
// }
// const elements = makeImagesGalery(images);
// console.log(elements)
// galleryListEl.append(...elements);
// console.log(galleryListEl)


const makeImagesGaleryMarkup = image => {

  return  ` <li>
             <img src= ' ${image.url } ',alt= '${image.alt}', class = pictures> 
           </li> `
  
    ; 
}  
const galeryMarkup = images.map(makeImagesGaleryMarkup).join('');
console.log(galeryMarkup);

galleryListEl.insertAdjacentHTML("afterbegin", galeryMarkup)
