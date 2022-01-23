// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { useRef } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { ImageSlideOverviwe } from "../../../../contants/Image";
import "./style.scss";

function Slide() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={12}
      slidesPerView={3.2}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper-container"
    >
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageSlideOverviwe.SlideOverview6} alt="" />
      </SwiperSlide>
      <div className="navigation navigation--prev" ref={navigationPrevRef}>
        <NavigateBeforeIcon />
      </div>
      <div className="navigation navigation--next" ref={navigationNextRef}>
        <NavigateNextIcon />
      </div>
    </Swiper>
  );
}
export default Slide;
