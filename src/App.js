import logo from './logo.svg';
import styles from './components/styles.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import { Component } from 'react';
// import Spinner from './/components/Loader/Loader';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Searchbar />
        {/* <Spinner /> */}
      </div>
    );
  }
}

export default App;
