import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEsc);
  }

  handleEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { onClickModal, image } = this.props;
    return (
      <div class="overlay" onClick={onClickModal} tabIndex="0">
        <div class="modal">
          <img src={image} alt={''} />
        </div>
      </div>
    );
  }
}
