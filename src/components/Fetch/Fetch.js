import { Component } from 'react';

// const BASE_URL = "https://pixabay.com/api/"
// const API_KEY = "22969480-c3583c2b4b1ca4646f49ed52f"

export default class FetchImages extends Component {
  state = {
    picture: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      console.log('Picture name was changed');
      // console.log('prevProps.pictureName = ', prevProps.pictureName); //дает ""
      // console.log('this.props.pictureName = ', this.props.pictureName);//дает введенное название

      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=22969480-c3583c2b4b1ca4646f49ed52f&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(picture => this.setState({ picture: picture }))
        .finally(this.setState({ loading: false }))
        .catch(console.error());
    }
    console.log(this.state.picture);
  }
  render() {
    const { picture, loading } = this.state;
    const { pictureName } = this.props;
    return (
      <div>
        {loading && <p>Loading....</p>}
        {!pictureName && <p>Input name of picture to search</p>}
        <div>
          {pictureName}
          <img src={picture.hits.webformatURL} alt="" width="320"></img>
        </div>
      </div>
    );
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
