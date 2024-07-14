"use client";
import React, { useState } from "react";
import PayModalFixed from "./PayModalFixed";
import FormSendCheckout from "./FormSendCheckout";
import Link from "next/link";

const ChoosePay = () => {
  const [inputKind, setInputKind] = useState("");
  const borderStyle =
    "border-b-[3px] border-r-[1px] border-l-[3px] border-t-[1px] border-green-600 rounded-md opacity-100";
  return (
    <article className="flex flex-col-reverse sm:flex-row gap-3 px-4 w-full w-max-[800px]">
      <section className="flex flex-col bg-[#2e2d2dd2] w-full sm:w-[60%] pt-4 rounded-md gap-4 px-1">
        <h2 className="pl-2 font-medium text-lg">Seleccionar método de pago</h2>
        <div
          className={`flex items-center pl-2 py-2 gap-3 cursor-pointer ${
            inputKind === "tarjeta" ? borderStyle : "opacity-70"
          }`}
          onClick={() => setInputKind("tarjeta")}
        >
          <input
            className="h-4 w-4 accent-[#2A5B45] cursor-pointer "
            type="radio"
            checked={inputKind === "tarjeta"}
          />
          <span className=" text-[1em]">
            <p className="font-medium">Tarjeta de débito</p>
            {inputKind === "tarjeta" && (
              <p className="text-[.8em] font-light opacity-80 w-full">
                Opción estándar sin seguimiento
              </p>
            )}
          </span>
        </div>
        <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
        <div
          className={`flex items-center pl-2 py-2 gap-3 cursor-pointer  ${
            inputKind === "transferencia" ? borderStyle : "opacity-70"
          }`}
          onClick={() => setInputKind("transferencia")}
        >
          <input
            className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
            type="radio"
            checked={inputKind === "transferencia"}
          />
          <span className=" text-[1em] font-medium">
            <p>Transferencia bancaria</p>
            {inputKind === "transferencia" && (
              <span>
                <ol className=" list-disc font-light ml-3 text-[.9em]">
                  <li>Banco ING</li>
                  <li>Titular Export Coffee</li>
                  <li>Cuenta ES12 1234 1234 123457890</li>
                </ol>
                <p className="text-[.8em] font-light opacity-80 w-full">
                  Será necesario recibir el comprobante de la transferencia para
                  preparar tu pedido
                </p>
              </span>
            )}
          </span>
        </div>
        <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
        <div
          className={`flex items-center pl-2 py-2 gap-3 cursor-pointer  ${
            inputKind === "bizum" ? borderStyle : "opacity-70"
          }`}
          onClick={() => setInputKind("bizum")}
        >
          <input
            className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
            type="radio"
            checked={inputKind === "bizum"}
          />
          <span className=" text-[1em]">
            <p className="font-medium">Bizum</p>
            {inputKind === "bizum" && (
              <p className="text-[.8em] font-light opacity-80 w-full">
                Será necesario confirmar la transaccion para preparar tu pedido
              </p>
            )}
          </span>
        </div>
        <FormSendCheckout />
      </section>
      <section className="w-full sm:w-[40%] mr-8 rounded-md">
        <PayModalFixed>
          <div className="flex justify-end mt-3 font-medium gap-4 text-white">
            <Link
              href={"/success"}
              className="p-2 bg-[#13470F] hover:bg-[#1d6116] hover:scale-105 rounded-md transition-all duration-300"
            >
              Pagar
            </Link>
            <Link
              href={"/store"}
              className="p-2 text-[#13470F] hover:scale-105 rounded-md transition-all duration-300"
            >
              Volver a tienda
            </Link>
          </div>
        </PayModalFixed>
      </section>
    </article>
  );
};

export default ChoosePay;
