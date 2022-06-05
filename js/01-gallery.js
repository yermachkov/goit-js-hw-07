import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems.map(createGalleryMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', createGallery);


function createGalleryMarkup ({ preview, original, description }) {
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
};


galleryContainer.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  if (event.target.nodeName === 'IMG') {
    const openedImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    openedImg.show();
  }
}