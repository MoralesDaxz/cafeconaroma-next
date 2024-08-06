"use client";
import CarouselSubscription from "@/components/CarouselSubscription";
import FaqSubscription from "@/components/FaqSubscription";
import Footer from "@/components/Footer";
import { useControlDisplay } from "@/context/ControlDisplay";

import { subscriptionOptions } from "@/data/information";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full text-white flex flex-col items-center bg-subscription ">
      <h1 className="title text-[#ffffff] pb-10">Suscripción</h1>
      <article className="w-full flex flex-col items-center">
        {windowWidth > 640 ? (
          <div className="w-full flex justify-around items-center pb-3 h-[460px] max-w-[1100px]">
            {subscriptionOptions.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between gap-4 p-4 sm:p-2 w-[95%] sm:w-[30%] min-h-[380px] bg-[#199292b6] backdrop-blur-[1px] rounded-md hover:bg-[#236064cb] hover:relative hover:scale-110 hover:z-30 border-2 border-[#3facac] hover:border-[#7df5f5fd] hover:shadow-[#7df5f5fd] hover:shadow-lg  transition-all duration-300"
                >
                  <h3 className="text-[1.7rem] font-medium">{item.title}</h3>
                  <ul className="text-sm lg:text-base list-style-type: none h-[160px]">
                    {item.features.map((feature, index) => (
                      <li
                        className="flex mt-1 gap-1 text-[.8rem] font-light"
                        key={index}
                      >
                        <FaCheck color="#caa917" />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold">
                    {item.title == "Gratuita"
                      ? "0 €"
                      : item.title == "Estándar"
                      ? "130,00 €"
                      : "220,00 €"}
                  </p>
                  <Link
                    className="w-fit p-4 bg-[#19921994] rounded-md hover:scale-110 text-center border-2 border-[#48ad48b6] hover:border-[#53f84de7] transition-all duration-300"
                    href={"/login"}
                  >
                    Suscripcion {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <CarouselSubscription />
        )}
      </article>
      <FaqSubscription />
      <Footer />
    </section>
  );
};

export default Subscription;
