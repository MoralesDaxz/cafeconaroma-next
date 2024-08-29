"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import ErrorModalForm from "./ErrorModalForm";
import { putNewUser } from "@/api/users";
import { SignUpData } from "@/interfaces";
import RecaptchaGoogleV2 from "./RecaptchaGoogleV2";

const FormSignUp = () => {
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
  const [isPassConfirm, setIsPassConfirm] = useState("password");
  const [samePassword, setSamePassword] = useState(true);
  const enableContinue = watch("pass") === watch("passConfirm");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const validateSamePassword = () => {
    if (watch("pass") !== watch("passConfirm")) {
      return setSamePassword(false);
    }
    setSamePassword(true);
  };

  const onForm = async (data: SignUpData) => {
    try {
      const result = await putNewUser(data);
      console.log("User process:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <>
      <form
        className="bg-white text-black px-6 py-4 rounded-md flex flex-col gap-3 items-center justify-center w-full sm:w-[50%] lg:w-[30%]"
        onSubmit={handleSubmit(onForm)}
      >
        <label className="float-label-container">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={2}
            maxLength={30}
            required
            {...register("name", {
              required: { value: true, message: "Campo requerido" },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Solo caracteres alfabeticos",
              },
            })}
          />
          <span className="select-none bg-[white] rounded-3xl">Nombre</span>
          {errors.name && <ErrorModalForm text={errors.name.message} />}
        </label>

        <label className="float-label-container">
          <input
            className="input"
            type="text"
            placeholder=""
            minLength={2}
            maxLength={30}
            required
            {...register("lastName", {
              required: { value: true, message: "Campo requerido" },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Solo caracteres alfabeticos",
              },
            })}
          />
          <span className="select-none bg-[white] rounded-3xl">Apellido</span>
          {errors.lastName && <ErrorModalForm text={errors.lastName.message} />}
        </label>

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
        <label className="float-label-container">
          <input
            className="input"
            type={isPassConfirm}
            placeholder=""
            required
            maxLength={16}
            {...register("passConfirm", {
              required: {
                value: true,
                message: "Campo requerido.",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[.!@#$%^&*()\-_=+<>?]).*$/,
                message:
                  "Debe contener 1 número, 1 mayúscula y 1 carácter especial.",
              },
              onBlur: () => validateSamePassword(),
            })}
          />
          <span className="select-none bg-[white] rounded-3xl">
            Confirmar contraseña
          </span>
          <span
            className="absolute right-1 top-3 w-[20px] h-[20px] opacity-80"
            onClick={() =>
              setIsPassConfirm(
                isPassConfirm === "password" ? "text" : "password"
              )
            }
          >
            {isPassConfirm === "password" ? <MdRemoveRedEye /> : <HiEyeOff />}
          </span>
          {errors.passConfirm && (
            <ErrorModalForm text={errors.passConfirm.message} />
          )}
          {!samePassword && (
            <ErrorModalForm text={"Contraseñas no coinciden"} />
          )}
        </label>
        <RecaptchaGoogleV2 setCaptchaValue={setCaptchaValue} />
        <input
          type="submit"
          value={"Registrarme"}
          disabled={captchaValue === null ? true : false}
          className={`self-center sm:w-[50%] bg-[#2B5A45] text-[#f4f7f3] p-4 rounded-md cursor-pointer mt-5 ${
            captchaValue === null ? "opacity-50" : "opacity-100"
          }`}
        />
      </form>
    </>
  );
};

export default FormSignUp;
