import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import styles from '../styles.module.css';

export default class Searchbar extends Component {
  static = {
    onSubmit: PropTypes.func,
    picture: PropTypes.string,
  };
  state = {
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onInputSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header>
        <form class="form" onSubmit={this.onInputSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
          <button className={styles.button} type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            <span className={styles.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
