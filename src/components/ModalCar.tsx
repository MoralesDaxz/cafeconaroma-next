import React, { FC } from "react";
import { IoBagCheckSharp } from "react-icons/io5";
type Modal = {
    display:number
}

const ModalCar:FC <Modal> = ({display}) => {
  return (
    <div className={`fixed z-20 ${display > 750 ? "top-5 " : "top-16 "} right-0`}>
      <div
        className={`relative top-0 right-2 bg-[#1817179f]  rounded-full p-2 flex justify-center items-center`}
      >
        <IoBagCheckSharp width={40} height={0} className="" />
      </div>
    </div>
  );
};

export default ModalCar;
