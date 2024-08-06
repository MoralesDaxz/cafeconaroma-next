"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
   Grid,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { userFarmer } from "@/data/information";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const CarouselCompanies = () => {
  return (
    <>
      <Swiper
      className="w-full h-full mx-auto"
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {userFarmer.map((item, i) => {
          return (
            <SwiperSlide
              className="w-[320px] h-[280px] [background:radial-gradient(125%_125%_at_50%_10%,#ffffffc4_40%,#2ddb45_100%)] p-1 rounded-md"
              key={i}
            >
              <div className="flex gap-1 w-full h-full">
                <div className="w-[50%] pt-2 flex flex-col justify-around items-center gap-3">
                  <span className=" flex w-full">
                    <BiSolidQuoteAltLeft
                      width={80}
                      color="green"
                      className="w-[50px]"
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
                    className=" h-[180px] w-fit mx-auto my-auto rounded-md"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CarouselCompanies;
