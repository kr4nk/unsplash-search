import styles from "./Gallery.module.scss";
import TEXTS from "../../constants/texts";

function Gallery({ images, openModal, isLoading }) {
  return (
    <div className={styles.galleryContainer}>
      {images.map((img) => (
        <div key={img.id} className={styles.imageWrapper}>
          <img
            src={img.urls.thumb}
            alt={img.alt_description}
            className={styles.image}
            loading="lazy"
            onClick={() => openModal(img)}
          />
        </div>
      ))}
      {isLoading && <div className={styles.loading}>{TEXTS.loading}</div>}
    </div>
  );
}

export default Gallery;
