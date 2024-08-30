'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import ErrorModalForm from "./ErrorModalForm";
import Link from "next/link";
import RecaptchaGoogleV2 from "./RecaptchaGoogleV2";
import { loginUser } from "@/api/users";
import { useUser } from "@/context/LoginUser";

const FormLogin = () => {
  const { controlRender, setControlRender } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isPass, setIsPass] = useState("password");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const onForm = async (data: any) => {
    const response = await loginUser(data);
    if (response.message === "ok") {
      localStorage.setItem("user", JSON.stringify(response));
      return setControlRender(controlRender + 1);
    }
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
            {...register("password", {
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
          {errors.password && <ErrorModalForm text={errors.password.message} />}
        </label>
        <Link
          href={"/register"}
          className="w-fit self-start opacity-80 text-xs sm:text-sm"
        >
          No tienes cuenta aun, <b>registrate</b>.
        </Link>
        <Link
          href={"/recoverypass"}
          className="w-fit self-start opacity-80 text-xs sm:text-sm"
        >
          No recuerdas la contraseña, <b>restaurala</b>.
        </Link>
        <RecaptchaGoogleV2 setCaptchaValue={setCaptchaValue} />
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
