import React from 'react';
import styles from '../styles.module.css';

const Searchbar = ({ onSubmit }) => (
  <header>
    <form class="form" onSubmit={onSubmit}>
      <button className={styles.button} type="submit">
        <span className={styles.buttonLabel}>Search</span>
      </button>
      <input
        className={styles.input}
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
export default Searchbar;
