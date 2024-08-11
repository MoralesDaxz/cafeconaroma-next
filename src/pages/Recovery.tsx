'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import { putNewUser } from "@/api/apiCoffeUsers";
import { SignUpData } from "@/interfaces";
import Link from "next/link";
import ErrorModalForm from "@/components/ErrorModalForm";

const Recovery = () => {
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
  const [samePassword, setSamePassword] = useState(true);
  const enableContinue = watch("pass") === watch("passConfirm");

  const onForm = async (data: SignUpData) => {
    try {
      const result = await putNewUser(data);
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };
  return (
    <>
      <form
        className="bg-white text-black px-6 py-4 rounded-md  flex flex-col gap-3 items-center justify-center w-full"
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
       
        <input
          type="submit"
          value={"Validar correo"}
          className="self-center sm:self-start w-[40%] sm:w-fit bg-[#2B5A45] text-[#f4f7f3] p-4 sm:p-2 rounded-md cursor-pointer mt-5"
        />
      </form>
    </>
  );
};

export default Recovery;
