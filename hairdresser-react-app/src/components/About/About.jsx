import { useEffect, useRef, useState } from "react";
import style from "./About.module.css";
import aboutMe from "../../images/about/aboutme.jpg";
import aboutMeTwo from "../../images/about/aboutme2.webp";
import aboutMeThree from "../../images/about/aboutme3.webp";
import aboutMeFour from "../../images/about/about4.webp";

const About = () => {
  const galleryObject = [
    {
      id: 1,
      imageSrc: aboutMe,
      description: "Image 1",
    },
    {
      id: 2,
      imageSrc: aboutMeTwo,
      description: "Image 2",
    },
    {
      id: 3,
      imageSrc: aboutMeThree,
      description: "Image 3",
    },
    {
      id: 4,
      imageSrc: aboutMeFour,
      description: "Image 4",
    },
  ];

  const containerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const callbacFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callbacFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []); // [] tablica zależności oznacza, że efekt uruchomi się tylko raz po zamontowaniu komponentu

  return (
    <div className={`${style.container} ${isVisible ? style.visible : ""}`} ref={containerRef}>
      <div className={style.leftContainer}>
        {galleryObject.map((image) => (
          <img key={image.id} src={image.imageSrc} alt={image.description} className={style.imgLeft} />
        ))}
      </div>
      <div className={style.rightContainer}>
        <h1 className={style.title}>Cześć! Mam na imię Aga</h1>

        <p className={style.about}>
          Jestem fryzjerką z wieloletnim doświadczeniem, dla której praca to nie tylko zawód, ale prawdziwa pasja. Uwielbiam tworzyć fryzury, które podkreślają indywidualność moich klientek i klientów — niezależnie od tego, czy chodzi o klasyczne cięcie, metamorfozę kolorystyczną, czy stylizację na specjalną okazję. Stawiam na profesjonalizm, dokładność i pozytywną atmosferę w salonie. Pracuję zarówno stacjonarnie, jak i mobilnie — dojeżdżam do klientek i klientów, bo wiem, jak cenny jest czas i wygoda.
          <br />
          <br />
          Poza pracą zawodową jestem także mamą — codziennie uczę się, jak łączyć macierzyństwo z rozwijaniem swojej pasji. To doświadczenie nauczyło mnie jeszcze lepszej organizacji, empatii i cierpliwości — cech, które doskonale sprawdzają się również w mojej pracy z klientami.
          <br />
          <br />
          Moja droga zawodowa nie zawsze była prosta — były momenty zwątpienia, zmiany ścieżek, powroty do nożyczek i grzebienia, czasem pod górę, czasem na przekór wszystkiemu. Ale dziś mogę z dumą powiedzieć, że robię to, co kocham. Każde strzyżenie, koloryzacja czy metamorfoza to dla mnie nie tylko praca — to spotkanie, rozmowa, zaufanie i wspólne tworzenie czegoś wyjątkowego. Jeśli szukasz fryzjerki z sercem, doświadczeniem i zrozumieniem — serdecznie zapraszam do kontaktu. Niezależnie czy chcesz odwiedzić mój salon, czy wolisz, żebym przyjechała do Ciebie — jestem tu, by zadbać o Twoje włosy i samopoczucie.
        </p>
      </div>
    </div>
  );
};

export default About;
