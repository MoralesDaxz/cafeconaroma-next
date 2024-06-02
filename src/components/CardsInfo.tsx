import Image from "next/image";
import React from "react";
import check from "@/assets/images/cards-check.svg";
import truck from "@/assets/images/cards-truck.svg";
import gift from "@/assets/images/cards-gift.svg";
const CardsInfo = () => {
  return (
    <section className="bgCards py-14 w-full text-black flex flex-col items-center sm:min-h-[500px] justify-center gap-8 ">
      <h2 className=" text-white text-[1.5rem] font-medium opacity-90 text-center">
        Café con las mejores condiciones
      </h2>

      <article className="flex flex-col items-center justify-center sm:flex-row sm:items-center  gap-5">
        <div className="w-[75%] sm:w-[30%] lg:w-[300px] py-4 px-6 h-[17rem] bg-[#f0f0f0] rounded flex flex-col items-center justify-start  gap-4 opacity-90">
          <Image
            className="w-[25%]"
            src={check}
            width={500}
            height={500}
            alt="check-cards"
          ></Image>
          <p className="text-center text-[1.1rem] font-semibold">
            Recibe tu pedido sin preocuparte
          </p>
          <p className=" text-[1rem]">
            Tienes cosas más importantes en la cabeza, por eso con nuestra
            suscripción de café, nunca te quedarás sin tu taza de la mañana.
          </p>
        </div>
        <div className="w-[75%] sm:w-[30%] lg:w-[300px] py-4 px-6 h-[17rem] bg-[#f0f0f0] rounded flex flex-col items-center justify-start gap-4 opacity-90">
          <Image
            className="w-[25%]"
            src={truck}
            width={500}
            height={500}
            alt="check-cards"
          ></Image>
          <p className="text-center text-[1.1rem] font-semibold">
            Envío en 24/48h
          </p>
          <p className=" text-[1rem]">
            Pide tu café antes de las 12h y lo recibirás al día siguiente.
          </p>
        </div>
        <div className="w-[75%] sm:w-[30%] lg:w-[300px] py-4 px-6 h-[17rem] bg-[#f0f0f0] rounded flex flex-col items-center justify-start gap-4 opacity-90">
          <Image
            className="w-[25%]"
            src={gift}
            width={500}
            height={500}
            alt="check-cards"
          ></Image>
          <p className="text-center text-[1.1rem] font-semibold">
            Descuentos y beneficios
          </p>
          <p className=" text-[1rem]">
            Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa,
            para que lo descubras junto a nosotros.
          </p>
        </div>
      </article>
    </section>
  );
};

export default CardsInfo;
