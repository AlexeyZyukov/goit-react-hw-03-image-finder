import { Component } from 'react';
import LoadError from '../LoadError/LoadError';

const BASE_URL = 'https://pixabay.com/ap/';
const API_KEY = '22969480-c3583c2b4b1ca4646f49ed52f';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class FetchImages extends Component {
  state = {
    picture: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    // const { prevName } = prevProps.pictureName; //не работает с деструктурированием!! Почему???
    // const { nextName } = this.props.pictureName;

    if (prevProps.pictureName !== this.props.pictureName) {
      console.log('Picture name was changed');
      // console.log('prevProps.pictureName = ', prevProps.pictureName); //дает ""
      // console.log('this.props.pictureName = ', this.props.pictureName);//дает введенное название

      this.setState({ status: Status.PENDING });
      fetch(
        `${BASE_URL}?q=${this.props.pictureName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('Нет картинки с названием ${this.props.pictureName}'),
          );
        })
        .then(picture => this.setState({ picture, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { picture, error, status } = this.state;
    const { pictureName } = this.props;

    if (status === 'idle') {
      return <p>Input name of picture to search</p>;
    }
    if (status === 'pending') {
      return <p>Loading....</p>;
    }
    if (status === 'rejected') {
      return <LoadError message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <div>
          {pictureName}
          {/* {picture} */}
          {/* <img src={picture.hits.webformatURL} alt="" width="320"></img> */}
        </div>
      );
    }

    // return (
    //   <div>
    //     {error && <h2>{error.message}</h2>}
    //     {loading && <p>Loading....</p>}
    //     {!pictureName && <p>Input name of picture to search</p>}
    //     <div>
    //       {pictureName}
    //       {/* <img src={picture.hits.webformatURL} alt="" width="320"></img> */}
    //     </div>
    //   </div>
    // );
  }
}
//     const params = new URLSearchParams({
//         "q": pictureName,
//         "page": page,
//         "per_page": limit,
//         "image_type": "photo",
//         "orientation": "horizontal",
//     });

// return {
//     fetch({ BASE_URL }?key = `${API_KEY}` & `${params}`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         console.log(response);
//         // return Array.from(response.json()); //при преобразовании возвращаемого Json-объекта с пом. Array.from в массив "теряется" св-во length, length = 0;
//         // return response.json();
//     }
//     )
// }
//=====================//
// return axios.get(`https://pixabay.com/api/?key=22969480-c3583c2b4b1ca4646f49ed52f&${params}`)
//   .then(result => console.log(result));
