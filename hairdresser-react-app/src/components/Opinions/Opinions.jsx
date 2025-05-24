import style from "./Opinions.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const sliderData = [
  {
    id: 1,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 4,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 5,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 6,
    title: "Wspaniałe wykonanie <3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
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
