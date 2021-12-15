import { Component } from 'react';
import LoadError from '../LoadError/LoadError';
import Spinner from '../Spinner/Spinner';
import API from '../API/APIservice';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class FetchImages extends Component {
  state = {
    pictures: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const prevPage = prevState.page;
    const nextName = this.props.pictureName;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      this.setState({ page: 1, pictures: [] });
      this.wrapperForFetch(nextName, nextPage);
    }

    if (prevPage !== nextPage) {
      this.wrapperForFetch(nextName, nextPage);
    }
  }

  wrapperForFetch(nextName, nextPage) {
    API.fetchPictures(nextName, nextPage)
      .then(data => {
        return this.setState({
          pictures: [...this.state.pictures, ...data.hits],
          status: Status.RESOLVED,
        });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  render() {
    const { pictures, error, status } = this.state;

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
          <ImageGallery pictures={pictures} />
          <Button onClickLoad={this.loadMore} />
        </div>
      );
    }
  }
}
