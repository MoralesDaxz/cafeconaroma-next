import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import ErrorModalForm from "./ErrorModalForm";
import { SignUpData } from "@/interfaces";
import Link from "next/link";
import RecaptchaGoogleV2 from "./RecaptchaGoogleV2";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      pass: "",
      passConfirm: "",
    },
  });
  const [isPass, setIsPass] = useState("password");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const onForm = async (data: SignUpData) => {
    console.log(data);
    /* Jgar con las respuesta del servidor */
  /*   try {
      const result = await newUser(data);
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    } */
  };
  return (
    <>
      <form
        className="bg-white text-black px-6 py-4 rounded-md  flex flex-col gap-3 items-center justify-center w-full max-w-[500px]"
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
        <label className="float-label-container">
          <input
            className="input"
            type={isPass}
            placeholder=""
            required
            maxLength={16}
            {...register("pass", {
              required: {
                value: true,
                message: "Campo requerido.",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[.!@#$%^&*()\-_=+<>?]).*$/,
                message:
                  "Debe contener 1 número, 1 mayúscula y 1 carácter especial.",
              },
              minLength: {
                value: 9,
                message: "Mínimo 9 caracteres, Ej.:F1-456789",
              },
            })}
          />
          <span className="select-none bg-[white] rounded-3xl">Contraseña</span>
          <span
            className="absolute right-1 top-3 w-[20px] h-[20px] opacity-80"
            onClick={() =>
              setIsPass(isPass === "password" ? "text" : "password")
            }
          >
            {isPass === "password" ? <MdRemoveRedEye /> : <HiEyeOff />}
          </span>
          {errors.pass && <ErrorModalForm text={errors.pass.message} />}
        </label>
        <Link href={"/register"} className="w-fit self-start opacity-80 text-xs sm:text-sm">
          No tienes cuenta aun, <b>registrate</b>.
        </Link> 
        <Link href={"/recoverypass"} className="w-fit self-start opacity-80 text-xs sm:text-sm">
          No recuerdas la contraseña, <b>restaurala</b>.
        </Link> 
        <RecaptchaGoogleV2 setCaptchaValue={setCaptchaValue}/>
        <input
          type="submit"
          value={"Acceder"}
          disabled={captchaValue === null ? true : false}
          className={`self-center sm:w-[50%] bg-[#2B5A45] text-[#f4f7f3] p-4 rounded-md cursor-pointer mt-5 ${
            captchaValue === null ? "opacity-50" : "opacity-100"
          }`}
        />
      </form>
    </>
  );
};

export default FormLogin;
