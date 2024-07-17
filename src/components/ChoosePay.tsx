"use client";
import React, { useState } from "react";
import PayModalFixed from "./PayModalFixed";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SpainCommunities } from "@/utils/information";
import { usePayProducts } from "@/context/PayCoffee";
import { TotalInitValue } from "@/interfaces/interfaces";
import { newOrder } from "@/api/apiGetCoffee";
import {
  displayCurrentTime,
  formatDate,
  generateInvoiceCode,
} from "@/utils/invoice";

const ChoosePay = () => {
  const {
    buysLocalStorage,
    setbuysLocalStorage,
    setControlRender,
    controlRender,
  } = usePayProducts();
  const [comunitySpain, setComunitySpain] = useState("");
  const [province, setProvince] = useState("");
  const [inputKind, setInputKind] = useState("");
  const borderStyle =
    "border-b-[3px] border-r-[1px] border-l-[3px] border-t-[1px] border-green-600 rounded-md opacity-100";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payTipe: "",
      name: "",
      identity: "",
      mail: "",
      phone: "",
      comunity: "",
      province: "",
      street: "",
      code: "",
      plant: "",
      door: "",
    },
  });

  const clearForm = () => {
    setComunitySpain("");
    setProvince("");
    setInputKind("");
    reset();
  };

  const submitForm = handleSubmit(async (data) => {
    const storedProducts = localStorage.getItem("buy");
    const itemsLocalStorage: TotalInitValue = JSON.parse(storedProducts!);
    const time = { time: await displayCurrentTime() };
    const date = { date: await generateInvoiceCode() };
    const office = { office: "E001" };
    const sentData = { sent: { ...itemsLocalStorage.sent } };
    const updatedState = {
      ...itemsLocalStorage,
      ...sentData,
      ...time,
      ...date,
      ...office,
    };
    setbuysLocalStorage(updatedState);
    localStorage.setItem("buy", JSON.stringify(updatedState));
    const order = await newOrder(updatedState);
    console.log("State", updatedState);

    /* navigate por aqui a success */
    /* clearForm(); */
    return order
  });

  return (
    <article className="flex flex-col sm:flex-row gap-3 px-4 w-full w-max-[800px]">
      <section className="flex flex-col bg-[#2e2d2dd2] w-full sm:w-[60%] pt-4 rounded-md gap-4 px-1">
        <h2 className="pl-2 font-medium text-lg">Seleccionar método de pago</h2>
        <form className="flex flex-col gap-3">
          <div
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "tarjeta" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              required
              className="h-4 w-4 accent-[#2A5B45] cursor-pointer "
              type="radio"
              onClick={() => setInputKind("tarjeta")}
              checked={inputKind === "tarjeta"}
              {...register("payTipe")}
              value={"card"}
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
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "transferencia" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              required
              className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
              type="radio"
              onClick={() => setInputKind("transferencia")}
              checked={inputKind === "transferencia"}
              {...register("payTipe")}
              value={"transfer"}
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
                    Será necesario recibir el comprobante de la transferencia
                    para preparar tu pedido
                  </p>
                </span>
              )}
            </span>
          </div>
          <span className="bg-[#817464] h-[1px] w-[90%] self-center"></span>
          <div
            className={`flex items-center pl-2 py-2 gap-3 ${
              inputKind === "bizum" ? borderStyle : "opacity-70"
            }`}
          >
            <input
              required
              className=" h-4 w-4 accent-[#2A5B45] cursor-pointer"
              type="radio"
              onClick={() => setInputKind("bizum")}
              checked={inputKind === "bizum"}
              {...register("payTipe")}
              value={"bizum"}
            />
            <span className=" text-[1em]">
              <p className="font-medium">Bizum</p>
              {inputKind === "bizum" && (
                <p className="text-[.8em] font-light opacity-80 w-full">
                  Será necesario confirmar la transaccion para preparar tu
                  pedido
                </p>
              )}
            </span>
          </div>
          <div className="bg-[white] text-[black] w-full p-4 flex flex-col justify-center mb-2 rounded-md">
            <h2 className="pl-2 font-medium text-lg">Dirección de envío</h2>
            <label className="float-label-container">
              <input
                className="input"
                type="text"
                placeholder=""
                minLength={4}
                maxLength={50}
                required
                {...register("name")}
              />
              <span className="select-none">Nombre completo</span>
            </label>
            <label className="float-label-container">
              <input
                className="input"
                type="text"
                placeholder=""
                minLength={4}
                maxLength={50}
                required
                {...register("identity")}
              />
              <span className="select-none">Identificacion</span>
            </label>
            <label className="float-label-container">
              <input
                className="input"
                type="email"
                placeholder=""
                required
                {...register("mail")}
              />
              <span className="select-none">Email</span>
            </label>
            <label className="float-label-container">
              <input
                className="input"
                type="tel"
                placeholder=""
                required
                {...register("phone")}
              />
              <span className="select-none">Telefono</span>
            </label>
            <label className="float-label-container">
              <select
                className="input"
                required
                {...register("comunity", {
                  onChange: (e) => setComunitySpain(e.currentTarget.value),
                  onBlur: (e) => setComunitySpain(e.currentTarget.value),
                })}
              >
                <option value={""} disabled>
                  Seleccione
                </option>
                {SpainCommunities.map((comunity, index) => {
                  return (
                    <option key={index} value={comunity.comunidad}>
                      {comunity.comunidad}
                    </option>
                  );
                })}
              </select>
              <span className="select-none">Comunidad</span>
            </label>
            {comunitySpain !== "" && (
              <label className="float-label-container">
                <select
                  className="input"
                  required
                  {...register("province", {
                    onChange: (e) => setProvince(e.currentTarget.value),
                    onBlur(event) {
                      setProvince(event.currentTarget.value);
                    },
                  })}
                >
                  <option value={""} disabled>
                    Seleccione
                  </option>
                  {SpainCommunities.map((comunity) => {
                    if (comunity.comunidad === comunitySpain) {
                      return comunity.provincias.map((prov, i) => {
                        return (
                          <option key={i} value={prov}>
                            {prov}
                          </option>
                        );
                      });
                    }
                  })}
                </select>
                <span className="select-none">Província</span>
              </label>
            )}

            {province !== "" && (
              <>
                <label className="float-label-container">
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    required
                    {...register("street")}
                  />
                  <span className="select-none">Calle</span>
                </label>
                <div className="w-full flex gap-1">
                  <label className="float-label-container">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required
                      {...register("code")}
                    />
                    <span className="select-none">Cód. postal</span>
                  </label>
                  <label className="float-label-container">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required
                      {...register("plant")}
                    />
                    <span className="select-none">Planta</span>
                  </label>
                  <label className="float-label-container">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      required
                      {...register("door")}
                    />
                    <span className="select-none">Puerta</span>
                  </label>
                </div>
              </>
            )}
          </div>
        </form>
      </section>
      <section className="w-full sm:w-[40%] mr-8 rounded-md">
        <PayModalFixed>
          <div className="flex justify-end mt-3 font-medium gap-4 text-white">
            <Link
              href={""}
              className="p-2 bg-[#13470F] hover:bg-[#1d6116] hover:scale-105 rounded-md transition-all duration-300"
              onClick={() => submitForm()}
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
