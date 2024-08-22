import React, { FC } from "react";
import ModalInformation from "./ModalInformation";
import { terms } from "@/data/information";

type Props = {
  isOpen?: boolean;
};
const Terms: FC<Props> = ({ isOpen }) => {
  const mainTitle = "Términos y condiciones";
  return (
    <>
      {isOpen && (
        <ModalInformation arrText={terms} title={mainTitle}></ModalInformation>
      )}
    </>
  );
};

export default Terms;
