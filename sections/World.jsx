"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import styles from "../styles";

import { TitleText, TypingText } from "../components";
import Image from "next/image";

const World = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        className="mt-10"
        },
      };
      return(
    <div className="flex align-center justify-center py-2">
        <div className={`${styles.innerWidth} flex flex-col align-center justify-center`}>
            <div className={`${styles.paddings} flex flex-col align-center justify-center self-center`}>
                <TitleText title={<>Helping You Unlock Your Potential With Our Services</>} 
                textStyles="w-100 md:w-[50%] lg:w-[50%]"
                />
                <TypingText className={`${styles.interWidth}`} title="Unlock powerful features tailored to your specific needs" textStyles="text-footer hidden sm:hidden md:flex lg:flex " />    
            </div>

            {/* Desktop Card */}
            <div className="flex-row gap-6 mx-24 hidden md:flex lg:flex">
                <div className="flex flex-col gap-6">
                    <div className="bg-tertiary flex rounded-2xl flex-row p-8 justify-center gap-20">
                        <h4 className="text-white font-semibold text-[28px] sm:text-[24px] self-center">Mentor 1-on-1 Calls</h4>
                        <Image src="/mentor.svg" alt="mentor-calls" width={400} height={300}/>         
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid grid-rows-2">
                            <div className="bg-tertiary flex rounded-2xl flex-col p-8">
                                <Image src="/job.svg" alt="job-assistance" width={400} height={300}/>
                                <h4 className="text-white font-semibold text-[28px] sm:text-[24px] mt-6 self-center">Job Assistance</h4>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="bg-tertiary flex rounded-2xl flex-col p-10">
                                <Image src="/interview.svg" alt="interview-preparation" width={400} height={300}/>
                                <h4 className="text-white font-semibold text-[28px] sm:text-[24px] mt-6 self-center">Interview Preparation</h4>
                            </div>
                        </div>      
                    </div>
                    
                </div>
                <div className="gap-1 h-2/3">
                    <div className="bg-tertiary flex rounded-2xl flex-col p-10 justify-start align-center gap-6 h-full">
                        <Image src="/live.svg" alt="live-projects" width={430} height={200} className="self-center"/>
                        <h4 className="text-white font-semibold self-center text-[28px] sm:text-[24px] mb-0 pb-0">Live Projects</h4>
                    </div>
                </div>
                
            </div>

            {/* Mobile Card */}
            {/* Carousel */}
            <div className="self-center block md:hidden lg:hidden">
                <Swiper
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                navigation={false}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                className="mySwiper w-[300px]"
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

                


            
        </div>
    </div>
)
};

export default World;
