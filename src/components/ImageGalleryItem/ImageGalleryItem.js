import styles from './imageGaleryItem.module.css';

export default function ImageGalleryItem({
  id,
  alt,
  smallImage,
  largeImage,
  onClickImg,
}) {
  console.log(smallImage, alt, largeImage, id, onClickImg);
  return (
    <li key={id} className={styles.galleryItem}>
      <img
        className={styles.galleryItem_Img}
        src={smallImage}
        alt={alt}
        data-source={largeImage}
        onClick={() => {
          onClickImg(largeImage);
        }}
      />
    </li>
  );
}
