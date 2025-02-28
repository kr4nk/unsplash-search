import styles from "./Modal.module.scss";

function Modal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className={styles.modalOverlay}>
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
      <div className={styles.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.modalImage}
        />
      </div>
    </div>
  );
}

export default Modal;
