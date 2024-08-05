import FaqSubscription from "@/components/FaqSubscription";
import { subscriptionOptions } from "@/data/information";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full text-white flex flex-col items-center gap-5 bg-subscription ">
      <h1 className="title text-[#ffffff] pb-10">Suscripción</h1>
      <article>
        <div className="w-full flex justify-center items-center gap-2 h-[550px]">
          {subscriptionOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-4 w-full sm:w-[20%] h-[380px] bg-[#199292b6] backdrop-blur-[1px] rounded-md hover:bg-[#236064cb] hover:relative hover:scale-110 hover:z-30  border-2 border-[#3facac] hover:border-[#7df5f5fd] hover:shadow-[#7df5f5fd] hover:shadow-lg  transition-all duration-300"
              >
                <h3 className=" text-lg font-medium">{item.title}</h3>
                <ul className="list-style-type: none;">
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
                <Link className="absolute bottom-0 mx-auto w-fit p-4" href={"/login"}>Suscribirme a {item.title}</Link>
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
