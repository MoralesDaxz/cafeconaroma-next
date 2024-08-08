"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import BagsPurshased from "./BagsPurshased";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import PayModalFixed from "./PayModalFixed";
import { getKeyLocal } from "@/data/controlLocalStorage";
const Basket = () => {
  const {
    buysLocalStorage,
    setbuysLocalStorage,
    setControlRender,
    controlRender,
  } = usePayProducts();
  const [urgent, setUrgent] = useState(
    buysLocalStorage.sent.delivery === "urgente" ? true : false
  );

  const updatePayProducts = () => {
    const itemsLocalStorage = getKeyLocal("buy");
    itemsLocalStorage.sent.delivery = urgent ? "urgente" : "normal";
    itemsLocalStorage.sent.payDelivery = urgent ? 9 : 0;
    localStorage.setItem("buy", JSON.stringify(itemsLocalStorage));
    setbuysLocalStorage(itemsLocalStorage);
    return setControlRender(controlRender + 1);
  };

  useEffect(() => {
    return updatePayProducts();
  }, [urgent]);

  return (
    <section className="pt-20 md:pt-28 pb-2 bg-[white] min-h-screen w-full flex flex-col items-center gap-8">
      <Link
        href={"/store"}
        className="text-black absolute top-14 sm:top-20 left-2 flex gap-2"
      >
        <IoArrowBack /> Volver
      </Link>
      <h3 className="title text-[#0c1225] mt-8">
        Cesta ( {buysLocalStorage.quantity} )
      </h3>
      <article className="relative flex flex-col-reverse sm:flex-row sm:justify-center gap-3 px-4 w-full w-max-[800px]">
        <section className="flex flex-col bg-[#2e2d2dd2] w-full sm:w-[60%] px-4 py-6 rounded-md gap-3">
          <div className="flex flex-col gap-3 pb-6 w-full">
            <h4 className="text-[1.1em] font-semibold">Seleccionar envío</h4>
            <label className="flex items-center w-full">
              <div className="w-full flex gap-3">
                <input
                  type="radio"
                  className=" accent-[#2f5854] w-4"
                  checked={urgent === false}
                  onChange={() => {
                    setUrgent(false);
                  }}
                />
                <span className="flex flex-col">
                  <p className=" font-medium">Envío 5 - 7 días</p>
                  <p className="text-[.8em]">Opción estándar sin seguimiento</p>
                </span>
              </div>
              <p className="text-[1em] font-semibold w-20 text-end">Gratis</p>
            </label>
          </div>
          <div className="flex flex-col gap-3 pb-6 w-full">
            <label className="flex items-center w-full">
              <div className="flex gap-3 w-full">
                <input
                  type="radio"
                  className=" accent-[#2f5854] w-4"
                  checked={urgent === true}
                  onChange={() => {
                    setUrgent(true);
                  }}
                />
                <span className="flex flex-col">
                  <p className=" font-medium">Envío urgente 24h</p>
                  <p className="text-[.8em]">Recibe en las siguientes 24h.</p>
                </span>
              </div>
              <p className="text-[1em] font-semibold w-20 text-end">9,00 €</p>
            </label>
          </div>
          <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
          <div className="w-full">
            <h4 className="text-[1.1em] font-semibold">Productos</h4>
            <BagsPurshased />
          </div>
        </section>
        <PayModalFixed>
          <div className="flex justify-end mt-3 font-medium gap-4 text-white">
            {buysLocalStorage.subtotal > 0 && (
              <Link
                href={"/checkout"}
                className="p-2 bg-[#13470F] hover:bg-[#1d6116] hover:scale-105 rounded-md transition-all duration-300"
              >
                Pagar
              </Link>
            )}

            <Link
              href={"/store"}
              className="p-2 text-[#13470F] hover:scale-105 rounded-md transition-all duration-300"
            >
              Volver a tienda
            </Link>
          </div>
        </PayModalFixed>
      </article>
    </section>
  );
};

export default Basket;
