import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const inputSearch = document.querySelector('[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  showLoader();
  clearGallery();
  getImagesByQuery(inputSearch.value.trim())
    .then(images => {
      hideLoader();
      createGallery(images);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });

  form.reset();
});

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
