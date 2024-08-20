import React, { FC, ReactNode } from "react";
type Props = {
  children?: ReactNode;
  arrText?: string[];
  title?: string;
};
const ModalInformation: FC<Props> = ({ children, title, arrText }) => {
  return (
    <section>
      <h2>{title}</h2>
      {arrText?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      {children}
    </section>
  );
};

export default ModalInformation;
