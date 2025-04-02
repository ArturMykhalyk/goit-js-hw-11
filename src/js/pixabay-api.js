import axios from 'axios';
import iziToast from 'izitoast';

// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '49632098-24a72905d1eb262516a3f1210';

// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return [];
      }
      return response.data.hits;
    })
    .catch(error => {
      iziToast.error({
        title: 'error',
        message: `Sorry, failed to load data!${error.message}`,
        position: 'topRight',
      });
      return [];
    });
}

export { getImagesByQuery };
