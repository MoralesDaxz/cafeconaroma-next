"use client";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
type Props = {
  title: string;
  valid: boolean;
  isToast: boolean;
  setIsToast: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};
const ToastAlert: FC<Props> = ({
  title,
  valid,
  isToast,
  setIsToast,
  children,
}) => {
  useEffect(() => {
    setTimeout(() => {
      return setIsToast(false);
    }, 3000);
    return;
  }, [isToast]);

  const toastVisible =
    "fixed translate-y-[20px] right-2 transition-all duration-300";
  const toastDismiss =
    "fixed translate-y-[-30px] right-2  transition-all duration-300 opacity-0";

  return (
    <div className={isToast ? toastVisible : toastDismiss}>
      <div
        className={
          valid
            ? "bg-[#2c972c] p-6 rounded-md flex flex-col gap-2"
            : "bg-[#bd2424] p-6 rounded-md flex flex-col gap-2"
        }
      >
        <div className={"flex items-center gap-2 rounded-md"}>
          {valid ? (
            <FaRegCheckCircle color="white" className="w-[30px] h-[30px]" />
          ) : (
            <IoIosCloseCircleOutline
              color="white"
              className="w-[30px] h-[30px]"
            />
          )}
          <p className="text-white">{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ToastAlert;
