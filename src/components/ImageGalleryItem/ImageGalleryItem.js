import React from 'react';
import styles from '../styles.module.css';

export default function ImageGalleryItem({ id, tags, smallImage, largeImage }) {
  return (
    <li key={id} className={styles.galleryItem}>
      <img
        className={styles.galleryImg}
        alt={tags}
        src={smallImage}
        data-source={largeImage}
      />
    </li>
  );
}
