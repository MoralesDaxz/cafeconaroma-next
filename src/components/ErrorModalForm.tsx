import React, { FC } from "react";
import { FaExclamationCircle } from "react-icons/fa";
type Props = {
  text?: string | undefined;
};
const ErrorModalForm: FC<Props> = ({ text }) => {
  return (
    <>
      <span className="flex self-center gap-1 items-center text-[#646363]">
        <FaExclamationCircle color="#e21f1f" />
        <p className=" font-normal text-xs">{text}</p>
      </span>
    </>
  );
};

export default ErrorModalForm;
