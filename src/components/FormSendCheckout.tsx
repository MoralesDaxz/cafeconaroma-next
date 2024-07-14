"use client";
import { SpainCommunities } from "@/utils/information";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormSendCheckout = () => {
  const [comunitySpain, setComunitySpain] = useState("");
  const [province, setProvince] = useState("");
  console.log(comunitySpain);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* { defaultValues: { email: "", msg: "" } } */);
  return (
    <form
      className="form rounded-md sm:h-full mb-1"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <h2 className="pl-2 font-medium text-lg">Dirección de envío</h2>
      <label>
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
      <label>
        <input
          className="input"
          type="email"
          placeholder=""
          required
          {...register("mail")}
        />
        <span className="select-none">Email</span>
      </label>

      <label>
        <input
          className="input"
          type="tel"
          placeholder=""
          required
          {...register("phone")}
        />
        <span className="select-none">Telefono</span>
      </label>
      <label>
        <select
          className="input"
          onChange={(e) => setComunitySpain(e.currentTarget.value)}
        >
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
        <label>
          <select className="input">
            {SpainCommunities.map((comunity, index) => {
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
        <label>
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
      <label>
        <input
          className="input"
          type="text"
          placeholder=""
          required
          {...register("code")}
        />
        <span className="select-none">Cód. postal</span>
      </label>
      <label>
        <input
          className="input"
          type="text"
          placeholder=""
          required
          {...register("plant")}
        />
        <span className="select-none">Planta</span>
      </label>
      <label>
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
    </form>
  );
};

export default FormSendCheckout;
