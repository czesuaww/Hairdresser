import style from "./Chooselanding.module.css";

const Chooselanding = ({ activeView, setActiveView }) => {
  return (
    <div className={style.landingOptions}>
      <button className={`${style.landingOption} ${activeView === "gallery" ? style.active : ""}`} onClick={() => setActiveView("gallery")}>
        Galeria
      </button>
      <button className={`${style.landingOption} ${activeView === "offer" ? style.active : ""}`} onClick={() => setActiveView("offer")}>
        Oferta
      </button>
      <button className={`${style.landingOption} ${activeView === "opinions" ? style.active : ""}`} onClick={() => setActiveView("opinions")}>
        Opinie
      </button>
    </div>
  );
};

export default Chooselanding;
