import React from "react";
type Prop ={
  text:string
}
const Loader = ({text}:Prop) => {
  return (
    <div className="flex flex-col items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-2xl font-medium">{text}</p>
    </div>
  );
};

export default Loader;
