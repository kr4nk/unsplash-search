import { useEffect } from "react";
import styles from "./Modal.module.scss";

function Modal({ image, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!image) return null;

  return (
    <div className={styles.modalOverlay}>
      <button className={styles.closeButton} onClick={onClose}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="black"
            fillOpacity="0.4"
          />
        </svg>
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
