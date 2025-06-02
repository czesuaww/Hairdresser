import style from "./Header.module.css";
import Arrow from "../Arrow/Arrow.jsx";
import logo from "../../images/logoImg/logoHair.png";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo company" />
        <p className={style.title}>Chcesz poznać więcej moich prac?</p>
        <Arrow />
      </header>
    </div>
  );
};

export default Header;
