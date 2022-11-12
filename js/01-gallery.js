import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery-js");
const galleryMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", clickOnImg);
console.log(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
     </a>
    </div>
  `;
    })
    .join("");
}

function clickOnImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const markup = basicLightbox.create(`<div class="modal">
  <img src="${e.target.dataset.source}" alt="${e.target.alt}" />
 </div>`);
  markup.show();
  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      markup.close();
    }
  });
}
