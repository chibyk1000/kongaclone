

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
const Slider = () => {
  const sliderImage = [
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661683428/contentservice/products.gif_HJmokPpdJi.gif",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653388292/contentservice/payday.gif_H1qZEE9Dc.gif",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1660490067/contentservice/Web%2001.jpg_HJKL-9LA9.jpg",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661856746/contentservice/Back%20to%20school%20Web%20004.jpg_H1fehPjJi.jpg",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661866837/contentservice/phillips.png_H1hIQ9o1o.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1660659342/contentservice/vivoadj.jpg_BJHcUQYA9.jpg",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1658922695/contentservice/Intel-Untitled-12-copy.jpg_By10LiR29.jpg",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661511859/contentservice/gamer.png_S1dhu7Ikj.png",
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation={{
        enabled: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderImage.map((image, i) => {
        return (
          <SwiperSlide key={i} className="w-full md:h-[4rem]">
            <img
              src={image}
              alt="image"
              // width={"100vw"}
              // layout="responsive"
              // objectFit="contain"
              // height={"100%"}
              className=" rounded-md w-full h-full "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider
