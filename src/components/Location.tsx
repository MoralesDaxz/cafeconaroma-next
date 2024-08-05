"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useControlDisplay } from "@/context/ControlDisplay";
import bakery from "@/assets/images/bakery.jpg";

const Location = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <section
      className={`${
        windowWidth < 640 && "bgLocation"
      }  w-full sm:bg-[#f6f5f3] flex justify-center items-center h-[380px] sm:h-[480px] py-8 px-12 gap-8`}
    >
      <article className=" p-5 sm:p-0 rounded-md backdrop-hue-rotate-90 sm:backdrop-blur-0 h-full max-w-[580px] flex flex-col items-center justify-center gap-3 text-[#d6d8d6] sm:text-black">
        <h3 className="title text-[#88bda2] sm:text-[#2c3f31]">
          Pruébalo en nuestro coffee shop
        </h3>
        <p>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <Link
        target="_blank"
          href={"https://maps.app.goo.gl/C4ehyrkk2vKedmLx5"}
          className="self-start flex items-center gap-3 opacity-90"
        >
          <p className="border-b-[1px] border-b-black ">Cómo llegar</p>{" "}
          <FaArrowRightLong />
        </Link>
      </article>
      {
        windowWidth > 640 ? (
          <article className="max-w-[580px] flex items-center justify-center">
            <Image
              className="w-full rounded-xl shadow-md shadow-[#00000093]"
              src={bakery}
              width={1000}
              height={1000}
              priority
              alt="retiro_coffee"
            ></Image>
          </article>
        ) : (
          ""
        ) /* (
        <article className="w-full absolute">
          <Image
            className="relative z-0 top-0 w-full opacity-100"
            src={bakery}
            width={1000}
            height={1000}
            priority
            alt="retiro_coffee"
          ></Image>
        </article>
      ) */
      }
    </section>
  );
};

export default Location;
