import logo from './logo.svg';
import styles from './components/styles.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import { Component } from 'react';
import FetchImages from './components/Fetch/Fetch';
import Spinner from './components/Loader/Loader';

class App extends Component {
  state = {
    pictureName: '',
  };

  handleSearchSubmit = pictureName => {
    if (!pictureName) {
      return alert('Nothing to search. Enter name, please.');
    }
    this.setState({ pictureName });
    // console.log(pictureName)
    // console.log(this.state.pictureName)
  };

  componentDidMount() {
    console.log(this.state);

    console.log('Hi');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <FetchImages pictureName={this.state.pictureName} />
        <Spinner />
      </div>
    );
  }
}

export default App;
