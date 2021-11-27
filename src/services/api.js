import axios from 'axios';

const API_KEY = '23543549-635b4a8d9e20c5ded331689b0';
const BASE_URL = 'https://pixabay.com/api/';

// toast.configure();

function getImageApi(query, page) {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}

export default getImageApi;
