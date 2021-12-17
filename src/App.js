import styles from './App.module.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
// import FetchImages from './components/Fetch/Fetch';
import LoadError from './components/LoadError/LoadError';
import Spinner from './components/Spinner/Spinner';
import API from './components/API/APIservice';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    pictureName: '',
    pictures: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    buttonMore: false,
    biggerImage: '',
    showModal: false,
  };

  handleSearchSubmit = pictureName => {
    if (!pictureName) {
      return alert('Nothing to search. Enter name, please.');
    }
    this.setState({ pictureName });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.pictureName;
    const prevPage = prevState.page;
    const nextName = this.state.pictureName;
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
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...data.hits],
            status: Status.RESOLVED,
          };
        });

        if (this.prevPage !== nextPage) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      biggerImage: largeImageURL,
    }));
  };

  closeModal = () => {
    this.setState(() => ({ showModal: false }));
  };

  render() {
    const { pictures, error, status, biggerImage, showModal } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {status === 'idle' && <p>Input name of picture to search</p>}
        {status === 'pending' && <Spinner />}

        {status === 'rejected' && <LoadError message={error.message} />}

        {status === 'resolved' && (
          <div className={styles.App}>
            <ImageGallery pictures={pictures} toggleModal={this.toggleModal} />
            <Button onClickLoad={this.loadMore} />
          </div>
        )}

        {showModal && (
          <Modal
            onToggleModal={() => {
              this.toggleModal();
            }}
            image={biggerImage}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
