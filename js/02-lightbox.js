import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryMarkup = galleryItems.map(createGalleryItem).join("");
const galleryContainer = document.querySelector(".gallery-js");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


function createGalleryItem({ preview, original, description }) {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  }

  let lightbox = new SimpleLightbox('.gallery-js a', {
    captionDelay: 250,
    captionsData: 'alt',
    navText:['⬅️','➡️'],
    closeText: '❎'
});