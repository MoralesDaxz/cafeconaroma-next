"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import Link from "next/link";
import RecaptchaGoogleV2 from "@/components/RecaptchaGoogleV2";

const Recovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [sendToken, setSendToken] = useState(false);
  const onForm = async (data: { email: string }) => {
    console.log(data);
    setSendToken(true);
    /* Aqui jugar con la respuesta del servidor si existe o no correo. */

    /*   try {
      const result = await putNewUser(data);
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    } */
  };
  return (
    <section className="pt-20 md:pt-28 bg-white pb-2 min-h-screen w-full flex flex-col items-center gap-8 px-2">
      <h2 className="title text-black">Restablecer contraseña</h2>
      <Link
        href={"/login"}
        className="text-black absolute top-14 sm:top-20 left-2 flex items-center gap-2"
      >
        <IoArrowBack /> Volver
      </Link>
      <form
        className="bg-white text-black px-6 py-4 rounded-md flex flex-col gap-3 items-center justify-center w-full sm:w-[50%] lg:w-[30%]"
        onSubmit={handleSubmit(onForm)}
      >
        <label className="float-label-container">
          <input
            className="input"
            type="email"
            placeholder=""
            required
            {...register("email")}
          />
          <span className="select-none bg-[white] rounded-3xl">Email</span>
        </label>
        <Link href={"/register"} className="w-fit self-start opacity-80 text-xs sm:text-sm">
          No tienes cuenta aun, <b>registrate</b>.
        </Link> 
        {sendToken && (
          <div className="relative w-full flex items-center gap-2 border-dashed border-2 border-[#2edb2e] p-2">
            <p className="text-sm text-center">
              Hemos enviado un enlace al correo para restablecer la contraseña.
            </p>
            <LuSend
              color="#2edb2e"
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
            />
          </div>
        )}
        {sendToken === false && (
          <>
            <RecaptchaGoogleV2 setCaptchaValue={setCaptchaValue} />
            <input
              type="submit"
              value={"Enviar enlace"}
              disabled={captchaValue === null ? true : false}
              className={`self-center sm:self-start  sm:w-fit bg-[#2B5A45] text-[#f4f7f3] p-4 sm:p-2 rounded-md cursor-pointer mt-5 ${
                captchaValue === null ? "opacity-50" : "opacity-100"
              }`}
            />
          </>
        )}
      </form>
    </section>
  );
};

export default Recovery;
