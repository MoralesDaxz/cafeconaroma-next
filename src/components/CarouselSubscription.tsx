"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { subscriptionOptions } from "@/data/information";
import { FaCheck } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Link from "next/link";
const CarouselSubscription = () => {
  return (
    <div className="w-[70%] h-[400px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[95%]"
      >
        {subscriptionOptions.map((item, index) => {
          return (
            <SwiperSlide key={index}  className="w-full">
              <div
                
                className={
                  
                      `${index == 0
                        ? "bg-[#99a124f1]"
                        : index == 1
                        ? "bg-[#921982f1]" 
                        : "bg-[#199292f1]"  }  flex flex-col items-center justify-between gap-4 min-h-[380px] p-2 backdrop-blur-[1px] rounded-md border-2 border-[#1a4c69e7]`
                }
              >
                <h3 className="text-[1.7rem] font-medium">{item.title}</h3>
                <ul className="text-sm lg:text-base list-style-type: none h-[160px]">
                  {item.features.map((feature, index) => (
                    <li
                      className="flex mt-2 gap-1 text-[.7rem] font-light"
                      key={index}
                    >
                      <FaCheck color="#caa917" />
                      <p>{feature}</p>
                    </li> /*  item.title == "Gratuita"
                      ? ""
                      : item.title == "Estándar"
                      ? ""
                      : "" */
                  ))}
                </ul>
                <p className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-semibold">
                  {item.title == "Gratuita"
                    ? "0 €"
                    : item.title == "Estándar"
                    ? "130,00 €"
                    : "220,00 €"}
                </p>
                <Link
                  className="w-fit p-4 bg-[#16791694] rounded-md  border-2 border-[#53f84de7] "
                  href={"/login"}
                >
                  Suscripcion {item.title}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselSubscription;
