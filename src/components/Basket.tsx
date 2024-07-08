"use client";
import { usePayProducts } from "@/context/PayCoffee";
import React, { useEffect, useState } from "react";
import BagsPurshased from "./BagsPurshased";

const Basket = () => {
  const { ttotal, setTtotal } = usePayProducts();
  const [urgent, setUrgent] = useState(false);
  const [choise, setChoise] = useState(false);

  const orderClient = {
    delivery: urgent ? "urgente" : "normal",
    payDelivery: urgent ? 9 : 0,
    total: urgent ? ttotal.subtotal + 9 : ttotal.subtotal,
  };
 /*  const updatePayProducts = () => {};
  useEffect(() => {
    const storedOrder = localStorage.getItem("order");
    const putOrder = localStorage.setItem("order", JSON.stringify(orderClient));
    const orderLS = storedOrder ? JSON.parse(storedOrder) : putOrder; 
    return setTtotal(
      (prev) =>
        (prev = {
          ...prev,
          delivery: urgent ? "urgente" : "normal",
          payDelivery: urgent ? 9 : 0,
          total: urgent ? ttotal.subtotal + 9 : ttotal.subtotal,
        })
    );
  }, []); */

  return (
    <section className="pt-10 sm:pt-20 bg-[white] min-h-screen w-full flex flex-col items-center gap-8">
      <h3 className="title text-[#2f5854] mt-8">Cesta ( {ttotal.quantity} )</h3>
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
                    updatePayProducts();
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
                    updatePayProducts();
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
              <p>{ttotal.subtotal.toFixed(2).replace(".", ",")} €</p>
            </div>
            <div className="flex justify-between items-center text-[.9em] font-medium">
              <p className=" ">ENVIO</p>
              <p>{ttotal.payDelivery.toFixed(2).replace(".", ",")} €</p>
            </div>
            <span className="bg-[#615649] h-[1px] w-[90%] self-center"></span>
            <div className="flex justify-between items-center text-[.9em] font-medium">
              <p className="">TOTAL</p>
              <p>{ttotal.total.toFixed(2).replace(".", ",")} €</p>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Basket;
