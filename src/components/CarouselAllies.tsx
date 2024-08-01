"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { logos } from "@/utils/information";

const CarouselAllies = () => {
  return (
    <div className="w-full flex items-start  sm:py-0 h-[16rem] sm:h-[17rem] md:h-[17rem]">
      <Swiper
        effect="slide"
       
        grid={{
          rows: 2,
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 1,
            pagination:false
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        loop={true}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
        modules={[Grid, Autoplay, Pagination]}
        className="w-full sm:w-[70%] h-full"
      >
        {logos.map((item, i) => {
          return (
            <SwiperSlide
              className="place-content-center  p-1 rounded-md"
              key={i}
            >
              <Image
                src={item}
                width={100}
                height={100}
                alt={item}
                className="min-w-[4rem] min-h-[4rem] m-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselAllies;
