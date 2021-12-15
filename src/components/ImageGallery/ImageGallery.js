import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGalery.module.css';

export default function ImageGallery({ picture }) {
  return (
    <ul class={styles.gallery}>
      {/* console.log({picture}) */}
      {picture.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          alt={tags}
          largeImage={largeImageURL}
        />
      ))}
    </ul>
  );
}
