"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import BagsPurshased from "./BagsPurshased";
import Link from "next/link";

const Basket = () => {
  const { buysLocalStorage, setControlRender, controlRender } =
    usePayProducts();
  const [urgent, setUrgent] = useState(
    buysLocalStorage.delivery === "urgente" ? true : false
  );

  const updatePayProducts = () => {
    const storedProducts = localStorage.getItem("buy");
    const itemsLocalStorage = storedProducts
      ? JSON.parse(storedProducts)
      : { subtotal: 0, total: 0, quantity: 0, product: [] };
    itemsLocalStorage.delivery = urgent ? "urgente" : "normal";
    itemsLocalStorage.payDelivery = urgent ? 9 : 0;
    localStorage.setItem("buy", JSON.stringify(itemsLocalStorage));
    return setControlRender(controlRender + 1);
  };

  useEffect(() => {
    updatePayProducts();
  }, [urgent || controlRender]);

  return (
    <section className="pt-10 sm:pt-20 bg-[white] min-h-screen w-full flex flex-col items-center gap-8">
      <h3 className="title text-[#2f5854] mt-8">
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
                  checked={!urgent}
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
                  checked={urgent}
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

        <section className="relative w-full sm:w-[40%] mr-8">
          <div className="sm:fixed bg-[#f6f5f3] sm:w-[40%] flex flex-col text-black p-6 rounded-md h-fit gap-4 ">
            <h4 className="text-[1.1em] font-semibold">Total de sus compras</h4>
            <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
            <div className="flex justify-between items-center text-[.9em] font-medium">
              <p className=" ">SUBTOTAL</p>
              <p>{buysLocalStorage.subtotal.toFixed(2).replace(".", ",")} €</p>
            </div>
            <div className="flex justify-between items-center text-[.9em] font-medium">
              <p className=" ">ENVIO</p>
              <p>
                {buysLocalStorage.payDelivery.toFixed(2).replace(".", ",")} €
              </p>
            </div>

            <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
            <div className="flex justify-between items-center text-[.6em] font-medium">
              <p className="">Incluye IVA 21%</p>
              <p>
                {(buysLocalStorage.total * 0.21).toFixed(2).replace(".", ",")} €
              </p>
            </div>
            <div className="flex justify-between items-center text-[.9em] font-medium">
              <p className="">TOTAL</p>
              <p>{buysLocalStorage.total.toFixed(2).replace(".", ",")} €</p>
            </div>
            <div className="flex justify-end mt-3 font-medium gap-3 text-white">
              <Link
                href={"/store"}
                className="p-2 bg-[#13470F] hover:bg-[#1d6116] hover:scale-105 rounded-md transition-all duration-300"
              >
                Volver a tienda
              </Link>
              <Link
                href={"/checkout"}
                className="p-2 bg-[#13470F] hover:bg-[#1d6116] hover:scale-105 rounded-md transition-all duration-300"
              >
                Pagar
              </Link>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Basket;
