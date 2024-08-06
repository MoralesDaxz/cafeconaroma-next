import FaqSubscription from "@/components/FaqSubscription";
import { subscriptionOptions } from "@/data/information";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full text-white flex flex-col items-center gap-5 bg-subscription ">
      <h1 className="title text-[#ffffff] pb-10">Suscripción</h1>
      <article className="w-full ">
        <div className="w-full flex flex-wrap justify-center gap-2  pb-3 h-[460px]">
          {subscriptionOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between gap-4 p-4 w-[95%] sm:w-[30%]  min-h-[380px] bg-[#199292b6] backdrop-blur-[1px] rounded-md hover:bg-[#236064cb] hover:relative hover:scale-110 hover:z-30  border-2 border-[#3facac] hover:border-[#7df5f5fd] hover:shadow-[#7df5f5fd] hover:shadow-lg  transition-all duration-300"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <ul className="text-sm lg:text-base list-style-type: none h-[160px]">
                  {item.features.map((feature, index) => (
                    <li className="flex gap-3" key={index}>
                      <FaCheck color="#caa917" />
                      <p>{feature}</p>
                    </li> /*  item.title == "Gratuita"
                      ? ""
                      : item.title == "Estándar"
                      ? ""
                      : "" */
                  ))}
                </ul>
                <p className="text-[1rem] md:text-[2rem] lg:text-[3rem] font-semibold">
                  {item.title == "Gratuita"
                    ? "0 €"
                    : item.title == "Estándar"
                    ? "130,00 €"
                    : "220,00 €"}
                </p>
                <Link
                  className="w-fit p-4 bg-[#19921994] rounded-md hover:scale-110 border-2 border-[#48ad48b6] hover:border-[#53f84de7] transition-all duration-300"
                  href={"/login"}
                >
                  Suscribirme a {item.title}
                </Link>
              </div>
            );
          })}
        </div>
        <FaqSubscription />
      </article>
    </section>
  );
};

export default Subscription;
