import React from 'react';
import styles from '../styles.module.css';

export default function ImageGalleryItem({ key, alt, smallImage, largeImage }) {
  // console.log(src, alt, largeImage, id);
  return (
    <li key={key} className={styles.galleryItem}>
      <img
        className={styles.galleryImg}
        width="320"
        src={smallImage}
        alt={alt}
        data-source={largeImage}
      />
    </li>
  );
}
