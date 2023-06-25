// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const createMarcup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", createMarcup);
console.log(createMarcup);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250 });




// const gallery = document.querySelector('.gallery');

// const createMarcup = galleryItems.map(({ preview, original, description }) => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image js-gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`
// }).join("");
// gallery.insertAdjacentHTML("beforeend", createMarcup);


// gallery.addEventListener("click", onShowImg);

// function onShowImg(event) {
//   event.preventDefault(); 
//   const { target } = event;
  

//   if (!target.classList.contains('js-gallery__image')) return;
   
//   const origImg = target.dataset.source;  


// const instance = basicLightbox.create(`
//     <img src="${origImg}" width="800" height="600">
// `,
//   {
//     onShow: (instance) => {
//       window.addEventListener('keydown', onEscClosedMainPhoto);
//     },
//     onClose: (instance) => {
//       window.removeEventListener('keydown', onEscClosedMainPhoto);
//     },
//   });
//   instance.show();

//  function  onEscClosedMainPhoto(event) {
//     if (event.code === 'Escape') {
//       instance.close();
      
//       console.log(event)
//     }
//     };  
  
// }
