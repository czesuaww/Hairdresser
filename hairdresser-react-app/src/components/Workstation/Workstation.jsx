import stationImg from "../../images/stationone.jpeg";
import stationImgTwo from "../../images/stationtwo.jpeg";
import stationImgThree from "../../images/stationthree.jpeg";
import style from "./Workstation.module.css";

const Workstation = () => {
  const galleryObject = [
    {
      id: 1,
      imageSrc: stationImg,
      description: "Image 1",
    },
    {
      id: 2,
      imageSrc: stationImgTwo,
      description: "Image 2",
    },
    {
      id: 3,
      imageSrc: stationImgThree,
      description: "Image 2",
    },
  ];

  return (
    <div className={style.workstation} id="workstation">
      <div className={style.container}>
        {galleryObject.map((item) => (
          <img key={item.id} src={item.imageSrc} alt={item.description} className={style.image} />
        ))}
      </div>
    </div>
  );
};

export default Workstation;
