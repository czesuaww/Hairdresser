import style from "./Opinions.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const sliderData = [
  {
    id: 1,
    title: "Profesjonalne podejście do zadań",
    description: "Uważne wysłuchiwanie oczekiwań klienta, dokładność, miła atmosfera, polecam",
  },
  {
    id: 2,
    title: "Polecam Agę",
    description: "Super podejście do klienta , bardzo miła atmosfera, i oczywiście zawsze robi piękne włoski.. ☺️🥰",
  },
  {
    id: 3,
    title: "Fryzury i koloryzacja pierwsza klasa",
    description: "Ogrom wiedzy i indywidualne podejście do klienta, pełen profesjonalizm",
  },
  {
    id: 4,
    title: "Najlepsza fryzjerka!!!! ",
    description: "Wysłucha dokładnie o co chodzi i zawsze doradzi, najlepsza jest!!! Bardzo serdecznie polecam ❤️❤️❤️❤️❤️❤️❤️",
  },
  {
    id: 5,
    title: "Bardzo polecam",
    description: "Młoda i zdolna 😍",
  },
  {
    id: 6,
    title: "Bardzo miła dziewczyna😀",
    description: "Jestem bardzo zadowolona z koloryzacji polecam z całego serca",
  },
];

const Opinions = () => {
  return (
    <div className={style.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
        className={style.grabCursor}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={style.title}>
              <h1>{slide.title}</h1>
            </div>
            <div className={style.textBox}>
              <p className={style.desc}>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Opinions;
