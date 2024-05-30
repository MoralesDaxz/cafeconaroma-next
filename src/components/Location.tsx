'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bakery from "@/assets/images/bakery.jpg"
import { useControlDisplay } from "@/context/ControlDisplay";
const Location = () => {
  const { windowWidth } = useControlDisplay();
  return (
    <section className="bg-[#f6f5f3] w-full flex justify-center py-8 px-12">
      <article className="w-full h-[350px] sm:h-auto max-w-[580px] flex flex-col items-center justify-center gap-3 sm:pr-8 text-black">
        <h3 className="title text-[#2c3f31]">Pruébalo en nuestro coffee shop</h3>
        <p>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <Link
          href={"https://maps.app.goo.gl/C4ehyrkk2vKedmLx5"}
          className="self-start flex items-center gap-3"
        >
          <p className="underline">Cómo llegar</p> <FaArrowRightLong />
        </Link>
      </article>
      {
        windowWidth > 640 &&
      <article className="flex items-center justify-center" >
        <Image className="w-full max-w-[580px] rounded-xl shadow-md shadow-[#00000093]" src={bakery} width={1000} height={1000} alt="retiro_coffee"></Image>
      </article>
      }
    </section>
  );
};

export default Location;
