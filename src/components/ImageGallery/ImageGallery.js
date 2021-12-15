import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGalery.module.css';

export default function ImageGallery({ pictures }) {
  return (
    <ul class={styles.gallery}>
      {/* console.log({picture}) */}
      {pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
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
