"use client";
import { SpainCommunities } from "@/utils/information";
import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const FormSendCheckout = ({hand,register}) => {
  const [comunitySpain, setComunitySpain] = useState("");
  const [province, setProvince] = useState("");

  return (
    <form
      className="form rounded-md sm:h-full mb-1"
       onSubmit={hand((data) => {
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
          /* onChange={(e) => setComunitySpain(e.currentTarget.value)} */
          value={comunitySpain}
          required
          {...register("comunity",{
            onchange:(e)=>setComunitySpain(e.currentTarget.value)}
          )}
        >
          <option value={""} disabled>
            Comunidad
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
        <label>
          <select
            className="input"
           /*  onChange={(e) => setProvince(e.currentTarget.value)} */
            value={province}
            required
            {...register("province"),{
              onchange:(e)=>setComunitySpain(e.currentTarget.value)}}
          >
            <option value={""} disabled>
              Província
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
        </>
      )}
    </form>
  );
};

export default FormSendCheckout;
