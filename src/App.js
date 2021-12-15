import styles from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import { Component } from 'react';
import FetchImages from './components/Fetch/Fetch';
// import Spinner from './components/Spinner/Spinner';

export default class App extends Component {
  state = {
    pictureName: '',
  };

  handleSearchSubmit = pictureName => {
    if (!pictureName) {
      return alert('Nothing to search. Enter name, please.');
    }
    this.setState({ pictureName });
  };

  componentDidMount() {
    console.log(this.state);

    console.log('Hi');
  }

  render() {
    const { pictureName } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <FetchImages pictureName={pictureName} />
      </div>
    );
  }
}
