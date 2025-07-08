import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useRef } from 'react';
import CarouselNavigation from "./CarouselNavigation";
import ErrorPage from "../../../components/ErrorPage";
import SectionLoading from "../../../components/SectionLoading";
const Carousel = ({sliders, error, isLoading} : any) => {
    const swiperRef = useRef<SwiperCore | null>(null);
  
    return (
      <>
          { error && (
            <ErrorPage />
          )}
          { isLoading && (
            <SectionLoading />
          )}
          {(sliders && sliders.length > 0) && (
            <div className="relative w-full">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500 }}
                onSlideChange={() => {}}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {sliders.map((slider: any) => (
                  <SwiperSlide key={slider.id}>
                    <img className="w-full h-[450px] lg:h-[600px] 2xl:h-[700px] brightness-[.8] object-cover" src={slider.image} alt={`Carousel ${slider.id + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <CarouselNavigation swiperRef={swiperRef} />
            </div>
          )}
      </>
    );
  };

export default Carousel;
