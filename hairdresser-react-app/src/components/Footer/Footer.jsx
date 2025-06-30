import style from "./Footer.module.css";
import wave from "../../images/wave.svg";

const Footer = () => {
  const currentYear = new Date().toLocaleDateString("en-us", { year: "numeric" });
  console.log(wave);
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        {/* <img src={wave} alt="footer img" className={style.wave} /> */}
        <div className={style.textContainer}>
          <p className={style.text}>© {currentYear} Mobilny Fryzjer Aga Olszówka</p>
          <p className={style.text}>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
