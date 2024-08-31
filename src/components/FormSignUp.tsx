"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import ErrorModalForm from "./ErrorModalForm";
import { newUser } from "@/api/users";
import { SignUpData } from "@/interfaces";
import RecaptchaGoogleV2 from "./RecaptchaGoogleV2";
import ToastAlert from "./ToastAlert";
import { useRouter } from "next/navigation";
import { TbCoffee } from "react-icons/tb";
const FormSignUp = () => {
  const router = useRouter();
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
      subscription: "",
    },
  });
  const [isPass, setIsPass] = useState("password");
  const [isPassConfirm, setIsPassConfirm] = useState("password");
  const [samePassword, setSamePassword] = useState(true);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [emailExist, setEmailExist] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [isSubscription, setIsSubscription] = useState("");
  const [errorRegister, setErrorRegister] = useState(false);
  const borderSubscription =
    "border-2 border-[#2fd32ae7] shadow-[#30d32ab2] shadow-lg";
  const cupCoffee =
    "absolute top-[-30px] opacity-90 w-9 h-9 p-2 bg-[#fffffff5] rounded-full";
  const validateSamePassword = () => {
    if (watch("pass") !== watch("passConfirm")) {
      return setSamePassword(false);
    }
    setSamePassword(true);
  };

  const onForm = async (data: SignUpData) => {
    const result = await newUser(data);
    if (result.status === "ok") {
      setIsToast(true);
      reset();
      setTimeout(() => {
        return router.push("/login");
      }, 3500);
      return;
    }
    setIsToast(true);
    setErrorRegister(true);
    setEmailExist(true);
    return;
  };

  return (
    <>
      <form
        className="bg-white  text-black px-6 py-4 rounded-md flex flex-col gap-3 items-center justify-center w-full sm:w-[50%] lg:w-[30%]"
        onSubmit={handleSubmit(onForm)}
      >
        <div className="flex justify-around gap-2 w-[90%] mb-5">
          <label
            onClick={() => setIsSubscription("free")}
            htmlFor="free"
            className={`relative bg-[#99a124f1] p-2 rounded-full flex flex-col items-center justify-center cursor-pointer ${
              isSubscription === "free" ? borderSubscription : ""
            }`}
          >
            <input
              id="free"
              type="radio"
              {...register("subscription")}
              value={"free"}
              className="hidden"
            />
            <p className="text-center text-white text-base sm:text-lg">
              Gratis
            </p>
            <TbCoffee
              className={
                isSubscription === "free" ? cupCoffee : "absolute opacity-0"
              }
            />
          </label>
          <label
            onClick={() => setIsSubscription("standar")}
            htmlFor="subscription"
            className={`relative bg-[#199292f1] p-2 rounded-full flex flex-col items-center justify-center cursor-pointer ${
              isSubscription === "standar" ? borderSubscription : ""
            }`}
          >
            <input
              id="standar"
              type="radio"
              {...register("subscription")}
              value={"standar"}
              className="hidden"
            />
            <p className="text-center text-white text-base sm:text-lg">
              Estandar
            </p>
            <TbCoffee
              className={
                isSubscription === "standar" ? cupCoffee : "absolute opacity-0"
              }
            />
          </label>
          <label
            onClick={() => setIsSubscription("premium")}
            htmlFor="premium"
            className={`relative bg-[#921982f1] p-2 rounded-full flex flex-col items-center justify-center cursor-pointer ${
              isSubscription === "premium" ? borderSubscription : ""
            }`}
          >
            <input
              id="premium"
              type="radio"
              {...register("subscription")}
              value={"premium"}
              className="hidden"
            />
            <p className="text-center text-white text-base sm:text-lg">
              Premium
            </p>
            <TbCoffee
              className={
                isSubscription === "premium" ? cupCoffee : "absolute opacity-0"
              }
            />
          </label>
        </div>
        {isSubscription === "" && (
          <p className="opacity-80 text-black text-lg sm:text-xl text-center">
            {" "}
            Seleccione una opción.
          </p>
        )}

        {isSubscription !== "" && (
          <>
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
              <span className="select-none bg-[white] rounded-3xl">
                Apellido
              </span>
              {errors.lastName && (
                <ErrorModalForm text={errors.lastName.message} />
              )}
            </label>

            <label className="float-label-container">
              <input
                className="input"
                type="email"
                placeholder=""
                required
                {...register("email", {
                  onChange: () => {
                    setEmailExist(false);
                    setErrorRegister(false);
                  },
                  onBlur: () => setEmailExist(false),
                })}
              />
              <span className="select-none bg-[white] rounded-3xl">Email</span>
              {emailExist && (
                <ErrorModalForm text={"Este email ya esta registrado."} />
              )}
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
                    value:
                      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[.!@#$%^&*()\-_=+<>?]).*$/,
                    message:
                      "Debe contener 1 número, 1 mayúscula y 1 carácter especial.",
                  },
                  minLength: {
                    value: 9,
                    message: "Mínimo 9 caracteres, Ej.:F1-456789",
                  },
                })}
              />
              <span className="select-none bg-[white] rounded-3xl">
                Contraseña
              </span>
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
                    value:
                      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[.!@#$%^&*()\-_=+<>?]).*$/,
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
                {isPassConfirm === "password" ? (
                  <MdRemoveRedEye />
                ) : (
                  <HiEyeOff />
                )}
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
              disabled={captchaValue === null && errorRegister ? true : false}
              className={`self-center sm:w-[50%] bg-[#2B5A45] text-[#f4f7f3] p-4 rounded-md cursor-pointer mt-5 ${
                captchaValue === null && errorRegister
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            />
          </>
        )}
      </form>

      {/*     <ToastAlert
        valid
        isToast={isToast}
        setIsToast={setIsToast}
        title="Registro exitoso!"
      >
      
      </ToastAlert> */}
      {isToast && (
        <ToastAlert
          title={errorRegister ? "Error en datos." : "Registro exitoso!"}
          valid={errorRegister ? false : true}
          isToast={true}
          setIsToast={setIsToast}
        >
          {!errorRegister && (
            <p className="font-light text-sm">Redidirigiendo para acceder...</p>
          )}
        </ToastAlert>
      )}
    </>
  );
};

export default FormSignUp;
