import { useEffect, useRef, useState } from "react";
import style from "./About.module.css";
import aboutImage from "../../images/aboutme.jpg";

const About = () => {
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
        <img src={aboutImage} className={style.imgLeft} alt="About" />
      </div>
      <div className={style.rightContainer}>
        <h1 className={style.title}>Cześć! Jestem Aga :)</h1>

        <p className={style.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempora, quod aperiam voluptate, placeat doloribus esse dolore laborum, eum dolores qui voluptatum. Doloribus veniam, laboriosam rerum, rem obcaecati quasi nisi explicabo quos in pariatur doloremque amet, quae libero. Ipsa perferendis possimus fugit facere unde praesentium eum ut blanditiis dolores quod est, neque exercitationem autem rem vel sunt earum facilis cum ex eveniet quam qui? Vel est, dolore harum assumenda inventore quae quisquam amet similique perspiciatis fuga distinctio, libero commodi recusandae, molestias earum magnam quasi asperiores ipsum nihil blanditiis ut? Ipsam corporis distinctio voluptas dolorem fuga voluptates a consequuntur hic nulla fugit, voluptatibus, officiis ullam ad, pariatur optio illum. Enim tempore consequatur veniam quas minus et explicabo quae iure natus! Est aspernatur pariatur sint exercitationem rerum saepe tenetur, possimus ab dicta laborum voluptatibus aliquam fuga? Tempore ducimus dolores tenetur, voluptas harum fuga doloribus molestiae praesentium corrupti perferendis a totam illo facere similique repudiandae quos, fugiat consectetur deserunt veritatis voluptates reiciendis autem iure, quaerat natus. Ad, fuga? Quod eaque eius odit qui iusto. Dolorum assumenda, eaque dolore expedita quaerat quis quas, dolor distinctio, facilis cumque ab aliquid! Illo doloribus, minus praesentium perspiciatis maxime rem nam eveniet velit distinctio accusantium repudiandae nostrum reprehenderit.</p>

        <p className={style.more}>Zapraszam do zapoznania się z moją ofertą i przeglądania zdjęć</p>
      </div>
    </div>
  );
};

export default About;
