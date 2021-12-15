import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGalery.module.css';

export default function ImageGallery({ pictures, toggleModal }) {
  console.log({ pictures, toggleModal });
  return (
    <ul class={styles.gallery}>
      {pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          alt={tags}
          largeImage={largeImageURL}
          onClickImg={() => {
            toggleModal(largeImageURL);
          }}
        />
      ))}
    </ul>
  );
}
