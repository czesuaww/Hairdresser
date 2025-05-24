import offerImg from "../../images/Offer.jfif";
import style from "./Offer.module.css";

const Offer = () => {
  return (
    <div>
      <img src={offerImg} alt="oferta cennik" className={style.imgOffer} />
    </div>
  );
};

export default Offer;
