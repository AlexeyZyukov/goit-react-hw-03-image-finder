const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22969480-c3583c2b4b1ca4646f49ed52f';

const FetchImages = (nextName, page) => {
  return fetch(
    `${BASE_URL}?q=${nextName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Нет картинки с таким названием '));
  });
  // .catch(error => this.setState({ error }));
};

export default FetchImages;
