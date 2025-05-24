import style from "./Minigallery.module.css";

const MiniGallery = () => {
  const images = Object.values(import.meta.glob("../../images/gallery/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" }));
  console.log(images);
  return (
    <div className={style.gallery}>
      {images.map((imgSrc, index) => (
        <img key={index} className={style.images} src={imgSrc} alt={`${index + 1}`} />
      ))}
    </div>
  );
};

export default MiniGallery;
