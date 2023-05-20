import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryItemEl = galleryItems.map(({preview, original, description}) => {
    const galleryList = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  return galleryList;
});

galleryEl.insertAdjacentHTML('beforeend', galleryItemEl.join(''));


galleryEl.addEventListener('click' , onClick);

function onClick(event) {
  event.preventDefault();
  if(event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

instance.show();

galleryEl.addEventListener('keydown', (event) => {
  if(event.code === 'Escape') {
    instance.close();
  }
});
}