import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles.module.css';

export default function ImageGallery({ picture }) {
  return (
    <ul class={styles.gallery}>
      {picture.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          data-source={largeImageURL}
        />
      ))}
    </ul>
  );
}
