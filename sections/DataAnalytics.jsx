"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Image from "next/image";

const DataAnalytics = () => {
  return (
    <div className="px-10 md:px-24 lg:px-24 py-24 flex flex-col md:flex-row lg:flex-row gap-12 justify-between">
        <div className="flex flex-col gap-4 basis-1/2 px-4 lg:px-14 md:px-14 self-center">
            <h1 className="text-white font-semibold text-[28px] md:text-[40px] lg:text-[40px] leading-[1.3] capitalize">
                Data Analytics will play a critical role in optimizing several industries...
            </h1>
            <p className="text-white font-normal text-[18px]">
            See what the students of Trainity’s program have to say about the program and it’s content
            </p>
        </div>

        {/* Carousel */}
        <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]"
      >
        <SwiperSlide>
            <Image src="/da-img.svg" alt="data-analytics" width={0} height={0} style={{width: '100%', height: 'auto'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/da-img.svg" alt="data-analytics" width={0} height={0} style={{width: '100%', height: 'auto'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/da-img.svg" alt="data-analytics" width={0} height={0} style={{width: '100%', height: 'auto'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/da-img.svg" alt="data-analytics" width={0} height={0} style={{width: '100%', height: 'auto'}} />
        </SwiperSlide>
        
        </Swiper>
        
        
    </div>
  )
}

export default DataAnalytics