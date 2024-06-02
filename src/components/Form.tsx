"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(/* { defaultValues: { email: "", msg: "" } } */);
  return (
    <form
      className="form rounded-md sm:rounded-none sm:h-full"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label>
        <input
          className="input"
          type="text"
          placeholder=""
          minLength={4}
          required
          {...register("nombre")}
        />
        <span className="select-none">Nombre completo</span>
      </label>

      <label>
        <input className="input" type="email" placeholder="" required />
        <span className="select-none">Email</span>
      </label>

      <label>
        <input className="input" type="tel" placeholder="" required />
        <span className="select-none">Telefono</span>
      </label>

      <label>
        <textarea className="input" placeholder="" required />
        <span className="select-none">¿Cómo podemos ayudarte?</span>
      </label>
      <div className="flex gap-2">
        <input type="checkbox" className=" accent-[#2B5A45]" required />
        <span className="text-[.8em]">
          Acepto la{" "}
          <Link href={"#privacity"} className="underline">
            Política de Privacidad
          </Link>{" "}
          y los{" "}
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

export default Form;
