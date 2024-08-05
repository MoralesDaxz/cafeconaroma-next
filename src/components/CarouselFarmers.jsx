"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { userFarmer } from "@/data/information";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const CarouselFarmers = () => {
  return (
    <Swiper
      className="w-full h-auto self-center mt-10 mb-4 text-black"
      effect="slide"
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      loop={true}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      pauseOnMouseEnter={true}
      modules={[Pagination, Scrollbar, Autoplay]}
    >
      {userFarmer.map((item, i) => {
        return (
          <SwiperSlide
            className="w-fit h-[17.5rem] [background:radial-gradient(125%_125%_at_50%_10%,#ffffffc4_40%,#2ddb45_100%)] p-1 rounded-md"
            key={i}
          >
            <div className="flex gap-1 w-full h-full">
              <div className="w-[50%] pt-2 flex flex-col justify-around items-center gap-3">
                <span className=" flex w-full">
                  <BiSolidQuoteAltLeft
                    width={80}
                    color="green"
                    className="w-[3rem]"
                  />
                  <p className="text-sm">{item.comment}</p>
                </span>
                <span className="relative flex gap-2 items-center">
                  <Image
                    src={item.pic}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="w-[50px] h-[50px]  rounded-full"
                  />
                  <p className=" font-medium text-center">{item.name}</p>
                </span>
              </div>
              <div className="w-[50%] h-full flex items-center justify-center">
                <Image
                  src={item.farm}
                  alt={item.name}
                  className=" h-[11rem] w-fit mx-auto my-auto rounded-md"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselFarmers;
