import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance;
const galleryEl = document.querySelector(".gallery");
const cardsMarkup = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

galleryEl.addEventListener("click", onImgClick);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img 
                    class="gallery__image" 
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"
                  /> 
                </a>
            </li>`;
    })
    .join("");
}

function onImgClick(event) {
  if (!event.target.classList.contains("gallery__image")) return;

  event.preventDefault();

  const datasetSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${datasetSource}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.key !== "Escape") {
      return;
    }
    instance.close();
  }
}

console.log(galleryItems);
