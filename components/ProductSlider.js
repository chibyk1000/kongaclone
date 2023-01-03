import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/bundle"
import Image from 'next/image';
const ProductSlider = ({img}) => {


    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        zoom={{ maxRatio: 5 }}
        navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {img.map((images) => {
          return (
            <SwiperSlide key={images} className="grid h-[60%]">
              <Image src={images} alt="" width={100} height={100} quality={100} className="block"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
}
 
export default ProductSlider;