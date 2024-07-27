"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { userFarmer } from "@/utils/information";
import Image from "next/image";
const CarouselCoffee = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      pauseOnMouseEnter={true}
      className="w-[90%] self-center my-20"
    >
      {userFarmer.map((item, i) => {
        return (
          <SwiperSlide key={i} className="flex flex-col gap-3">
            <p className=" font-medium">{item.name}</p>
            <Image
              src={item.farm}
              alt={item.name}
              className="h-auto max-h-[200px] w-[auto]"
              width={500}
              height={500}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCoffee;
