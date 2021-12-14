import React from 'react';
import styles from '../styles.module.css';

export default function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
}) {
  // console.log(src, alt, largeImage, id);
  return (
    <li key={id} className={styles.galleryItem}>
      <img
        className={styles.galleryImg}
        alt={tags}
        src={webformatURL}
        data-source={largeImageURL}
      />
    </li>
  );
}
