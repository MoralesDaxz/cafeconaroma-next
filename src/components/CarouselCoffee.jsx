"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CarouselCoffee = () => {
  
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide ><p className="h-[150px] w-[150px]">Slide 1</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 2</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 3</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 4</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 12</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 23</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 34</p></SwiperSlide>
    <SwiperSlide><p className="h-[150px] w-[150px]">Slide 45</p></SwiperSlide>

  </Swiper>
  );
};

export default CarouselCoffee;
