import offerImg from "../../images/offer.png";
import style from "./Offer.module.css";

const Offer = () => {
  return (
    <div className={style.container}>
      <img src={offerImg} alt="oferta cennik" className={style.imgOffer} loading="lazy" />
    </div>
  );
};

export default Offer;
