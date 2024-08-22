import React, { FC, ReactNode } from "react";
type Props = {
  children?: ReactNode;
  arrText?: string[];
  title?: string;
};
const ModalInformation: FC<Props> = ({ children, title, arrText }) => {
  return (
    <>
      <article className="bg-[#000000b4] absolute  w-[320px] sm:w-[30%] p-2">
        <h2>{title}</h2>
        <div className="overflow-y-auto scrollBar h-[380px] ">
          {arrText?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
          {children}
        </div>
      </article>
    </>
  );
};

export default ModalInformation;
