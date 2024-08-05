"use client";
import { faqSubscription, questions } from "@/data/information";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const FaqSubscription = () => {
  const [answerClass, setanswerClass] = useState(-1);

  return (
    <section className="bg-[#2a5b45] py-8 flex flex-col items-center min-h-[470px]">
      <h2 className="title mt-2">Preguntas Frecuentes (FAQ)</h2>
      {faqSubscription.map((item, indice) => {
        const isExpanded = indice == answerClass;
        return (
          <div
            key={indice}
            onClick={() => setanswerClass(isExpanded ? -1 : indice)}
            className="mt-6 bg-[#f6f5f3] flex flex-col justify-start rounded-lg w-[90%] md:w-[70%] lg:w-[60%] text-black"
          >
            <div className="cursor-pointer px-6 py-8 flex flex-row justify-between items-center">
              <h3 className="text-base font-medium">{item.question}</h3>
              <FaAngleDown
                className={
                  isExpanded
                    ? "hover:scale-125 transition-all duration-700 text-[1rem] md:text-[1.2rem] rotate-180"
                    : "hover:scale-125 transition-all duration-700 text-[1rem] md:text-[1.2rem]"
                }
              />
            </div>

            <div
              className={
                isExpanded
                  ? "flex flex-col justify-start px-6 h-[130px] overflow-auto transition-all duration-700"
                  : "flex flex-col justify-start px-6 h-[0px] overflow-auto transition-all duration-700"
              }
            >
              <div className="h-[1px] bg-[#e7e4e1] w-full"></div>
              <p className="text-sm md:text-[1rem] opacity-90  mt-3 h-[110px]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
      <Link
        href={"/contact"}
        className="flex items-center gap-3 mt-10 opacity-90"
      >
        <p className="border-b-[1px] border-b-white font-bold">
          Resolvemos tus dudas
        </p>
        <FaArrowRightLong />
      </Link>
    </section>
  );
};

export default FaqSubscription;
