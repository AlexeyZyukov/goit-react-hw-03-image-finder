import { Component } from 'react';
import LoadError from '../LoadError/LoadError';
import Spinner from '../Spinner/Spinner';
import APIservise from '../API/APIservice';

const BASE_URL = 'https://pixabay.com/api/';
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

      APIservise(this.state.picture, 1)
        .then(picture => this.setState({ picture, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { picture, error, status } = this.state;
    const { pictureName } = this.props;

    if (status === 'idle') {
      return <p>Input name of picture to search</p>;
    }
    if (status === 'pending') {
      return <Spinner />;
    }
    if (status === 'rejected') {
      console.log(error.message);
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
  }
}
