import styles from '../styles.module.css';

export default function ImageGalleryItem({ id, alt, smallImage, largeImage }) {
  // console.log(src, alt, largeImage, id);
  return (
    <li key={id} className={styles.galleryItem}>
      <img
        className={styles.galleryImg}
        src={smallImage}
        alt={alt}
        data-source={largeImage}
      />
    </li>
  );
}
