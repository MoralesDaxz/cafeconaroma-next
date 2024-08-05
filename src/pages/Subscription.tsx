import FaqSubscription from "@/components/FaqSubscription";
import { subscriptionOptions } from "@/data/information";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-black text-white flex flex-col items-center gap-5">
      <h1 className="title text-[#0c1225] pb-10">Suscripcion</h1>
      <article>
        <div className="w-full flex justify-around">
          {subscriptionOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-[30%] h-[280px]  bg-slate-500"
              >
                <h3>{item.title}</h3>
                <ul className="list-style-type: none;">
                  {item.features.map((feature, index) => (
                    <li className="flex gap-2" key={index}>
                      <FaCheck color="blue" />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
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
