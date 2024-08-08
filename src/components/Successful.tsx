"use client";

import { Order } from "@/interfaces/index";
import { getKeyLocal } from "@/data/controlLocalStorage";
import React, { useEffect, useState } from "react";
import { TbCoffee } from "react-icons/tb";
const Successful = () => {
  const [order, setOrder] = useState<Order>({ product: [] });

  useEffect(() => {
    const itemsLocalStorage = getKeyLocal("invoice");
    return setOrder(itemsLocalStorage);
  }, []);
  return (
    <section className="pb-2 bg-[#051307] text-black min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-[90%] relative sm:w-[70%] lg:w-[45%] mt-10 rounded-md flex flex-col gap-3 bg-[#dad8bc]">
        <div className="w-full absolute z-0 top-0 bg-success h-[150px] rounded-md"></div>

        <div className="self-center w-[70%] sm:w-[90%] bg-[#eeebeba4] backdrop-blur-[2px] my-4 p-4 rounded-md text-xs sm:text-base">
          <div className="w-full z-10 py-6 flex items-center justify-center gap-2">
            <TbCoffee className="w-[1.8rem] h-[1.8rem]" />
            <h2 className=" text-[1.3em] sm:text-3xl font-semibold">
              Café con Aroma S.L.
            </h2>
          </div>
          <p className="capitalize">
            <b>Hola!</b> {order.name}
          </p>
          <p>
            <b>Pedido Nº: </b>
            {order.invoice}
          </p>
          <p>
            <b>Destino:</b> {order.comunity}, {order.province}, {order.code}.
          </p>
          <p className="capitalize">
            <b>Entrega: </b>
            {order.delivery}
          </p>
        </div>
        <div className="w-full">
          <table className="w-full table-border">
            <thead className="border-[1px]  border-y-[gray] ">
              <tr>
                <th className="py-2 border-[1px] border-[#eeecec]">Cant.</th>
                <th className="py-2 border-[1px] border-[#eeecec]">Producto</th>
                <th className="py-2 border-[1px] border-[#eeecec]">Empaque</th>
                <th className="py-2 border-[1px] border-[#eeecec]">Valor</th>
              </tr>
            </thead>
            <tbody>
              {order.product?.map((item, index) => {
                return (
                  <tr
                    className={
                      index % 2 === 0
                        ? "bg-[#bad4af]"
                        : "border-[1px]  border-y-[#eeecec]"
                    }
                    key={index}
                  >
                    <td className="py-1 text-center">{item.units}</td>
                    <td className="py-1 capitalize">{item.brand}</td>
                    <td className="py-1 text-center">{item.package} gr</td>
                    <td className="py-1 text-center">
                      {(item.units! * item.price!).toFixed(2).replace(".", ",")}
                      €
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="py-2 border-[1px] border-[#eeecec]">
              <tr>
                <td colSpan={2} className="py-1 text-center italic text-xs">
                  valor de esta compra incluye iva
                </td>
                <td className="py-1 text-center text-base font-medium">
                  Total
                </td>
                <td className="py-1 text-center text-base font-medium">
                  {order.total?.toFixed(2).replace(".", ",")} €
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {order.delivery === "normal" ? (
          <p className="text-sm text-center mt-4">
            <i>Estarás recibiéndolo entre los próximos 5 a 7 días hábiles</i>
          </p>
        ) : (
          <p className="text-sm text-center mt-4">
            <i>Estarás recibiéndolo en las próximas 24 Horas</i>
          </p>
        )}
      </div>
    </section>
  );
};

export default Successful;
