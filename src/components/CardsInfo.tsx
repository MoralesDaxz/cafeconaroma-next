import Image from "next/image";
import React from "react";
import check from "../assets/images/cards-check.svg";
const CardsInfo = () => {
  return (
    <div className="cardBg w-full min-h-[500px] flex flex-col items-center justify-center">
      <div className="w-[30%] bg-[#FEFFFE] rounded flex flex-col items-center gap-4">
        <Image className="w-[10%]" src={check} width={500} height={500} alt="check-cards"></Image>
        <p>Recibe tu pedido sin preocuparte</p>
        <p>
          Tienes cosas más importantes en la cabeza, por eso con nuestra
          suscripción de café, nunca te quedarás sin tu taza de la mañana.
        </p>
      </div>
    </div>
  );
};

export default CardsInfo;
