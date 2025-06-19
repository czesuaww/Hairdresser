import style from "./Minigallery.module.css";
import { useState } from "react";

const MiniGallery = () => {
  const images = Object.values(
    import.meta.glob("../../images/gallery/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    })
  );

  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const allLoaded = loadedImages === images.length;

  return (
    <div className={style.wrapper}>
      {!allLoaded && (
        <div className={style.loaderWrapper}>
          <div className={style.loader}></div>
        </div>
      )}

      <div className={`${style.gallery} ${allLoaded ? style.visible : style.hidden}`}>
        {images.map((imgSrc, index) => (
          <img key={index} className={style.images} src={imgSrc} alt={`Gallery image ${index + 1}`} onLoad={handleImageLoad} />
        ))}
      </div>
    </div>
  );
};

export default MiniGallery;
