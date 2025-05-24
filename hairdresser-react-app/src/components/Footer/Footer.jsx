import style from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().toLocaleDateString("en-us", { year: "numeric" });

  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p>© {currentYear} Mobilny Fryzjer Aga Olszówka</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
