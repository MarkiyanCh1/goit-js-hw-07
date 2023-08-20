import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const cardsMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
});

function createGalleryItems(gallery) {
    return gallery
      .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img 
                      class="gallery__image" 
                      src="${preview}" 
                      alt="${description}"
                    /> 
                  </a>
              </li>`;
      })
      .join("");
  }
