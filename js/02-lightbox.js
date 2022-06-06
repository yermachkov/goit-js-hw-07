import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems.map(createGalleryMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', createGallery);


function createGalleryMarkup ({ preview, original, description }) {
  return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
};

galleryContainer.addEventListener('click', onImgClick);


function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  if (event.target.nodeName === 'IMG') {
    let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250
    });
  };
}
