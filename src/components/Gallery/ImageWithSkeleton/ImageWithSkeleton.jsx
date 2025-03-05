import React, { useState, useEffect } from "react";
import styles from "./ImageWithSkeleton.module.scss";

const ImageWithSkeleton = React.memo(({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={styles.imageWrapper} onClick={onClick}>
      <div className={`${styles.skeleton} ${loaded ? styles.hidden : ""}`} />
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${loaded ? styles.visible : ""}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
});

export default ImageWithSkeleton;
