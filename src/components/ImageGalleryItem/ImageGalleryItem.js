import styles from './imageGaleryItem.module.css';

export default function ImageGalleryItem({
  id,
  tags,
  smallImage,
  largeImage,
  onClickImg,
}) {
  return (
    <li key={id} className={styles.galleryItem}>
      <img
        className={styles.galleryItem_Img}
        src={smallImage}
        alt={tags}
        data-source={largeImage}
        onClick={() => {
          onClickImg(largeImage);
        }}
      />
    </li>
  );
}
