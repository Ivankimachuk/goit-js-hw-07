import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const galleryItemEl = galleryItems.map(({preview, original, description}) => {
const galleryListEl =  `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
return galleryListEl;
});

galleryEl.insertAdjacentHTML('beforeend', galleryItemEl.join(''));


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: '250'
});
