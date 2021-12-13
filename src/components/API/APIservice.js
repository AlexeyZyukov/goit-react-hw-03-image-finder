const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(pictureName, page) {
  return fetch(
    `${BASE_URL}?q=${pictureName}&page=${page}&key=22969480-c3583c2b4b1ca4646f49ed52f&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
const api = { fetchImages };
export default api;
