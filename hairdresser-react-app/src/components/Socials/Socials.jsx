import style from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={style.socials}>
      <h1>Śledź moje prace na social mediach</h1>
      <div className={style.socialsIcons}>
        <a href="https://www.facebook.com/fryzjer.mobilny.aga.olszowka" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="6x" style={{ color: "#4267B2" }} />
        </a>
        <a href="https://www.instagram.com/fryzjer_mobilny_aga_olszowka_/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareInstagram} size="6x" style={{ color: "#d62976" }} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
