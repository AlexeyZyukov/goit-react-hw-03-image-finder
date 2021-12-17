import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './modal.module.css';

export default class Modal extends Component {
  static = {
    onToggleModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    image: string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleEscClick = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { onToggleModal, image } = this.props;
    return (
      <div className={styles.overlay} onClick={onToggleModal} tabIndex="0">
        <div className={styles.modal}>
          <img src={image} alt={image.tags} />
        </div>
      </div>
    );
  }
}
