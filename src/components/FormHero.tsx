"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* { defaultValues: { email: "", msg: "" } } */);
  return (
    <form
      className="form rounded-md sm:rounded-none sm:h-full flex flex-col items-center justify-center w-full"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
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
        <span className="select-none bg-[#E2DFD7] rounded-3xl">Nombre completo</span>
      </label>

      <label className="float-label-container">
        <input
          className="input"
          type="email"
          placeholder=""
          required
          {...register("mail")}
        />
        <span className="select-none bg-[#E2DFD7] rounded-3xl">Email</span>
      </label>

      <label className="float-label-container">
        <input
          className="input"
          type="tel"
          placeholder=""
          required
          {...register("phone")}
        />
        <span className="select-none bg-[#E2DFD7] rounded-3xl">Telefono</span>
      </label>

      <label className="float-label-container">
        <textarea
          className="input"
          placeholder=""
          required
          {...register("details")}
        />
        <span className="select-none bg-[#E2DFD7] rounded-3xl">¿Cómo podemos ayudarte?</span>
      </label>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className=" accent-[#2B5A45]"
          required
          {...register("terms")}
        />
        <span className="text-[.8em]">
          Acepto la
          <Link href={"#privacity"} className="underline">
            Política de Privacidad
          </Link>
          y los
          <Link href={"#terms"} className="underline">
            Términos y condiciones
          </Link>
          .
        </span>
      </div>
      <input
        type="submit"
        value={"Enviar"}
        className="self-center sm:self-start w-[40%] sm:w-fit bg-[#2B5A45] text-[#f4f7f3] p-4 sm:p-2 rounded-md"
      />
    </form>
  );
};

export default FormContact;
