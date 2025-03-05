import styles from "./Gallery.module.scss";
import ImageWithSkeleton from "./ImageWithSkeleton/ImageWithSkeleton";

function Gallery({ images, openModal, error }) {
  return (
    <>
      <div className={styles.galleryContainer}>
        {images.map((img) => (
          <ImageWithSkeleton
            key={img.id}
            src={img.urls.thumb}
            alt={img.alt_description}
            onClick={() => openModal(img)}
          />
        ))}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </>
  );
}

export default Gallery;
