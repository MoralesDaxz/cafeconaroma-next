"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { userFarmer } from "@/utils/information";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const CarouselFarmers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    cssEase: "linear",
  
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {userFarmer.map((item, i) => {
          return (
            <div key={i} className="flex [background:radial-gradient(125%_125%_at_50%_10%,#ffffffc4_40%,#2ddb45_100%)] p-1 my-5 rounded-md">
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
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselFarmers;
