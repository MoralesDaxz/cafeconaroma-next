import CarouselCoffee from "@/components/CarouselCoffee";
import CarouselCompanies from "@/components/CarouselCompanies";
import Image from "next/image";
import React from "react";
import coffeePic from "@/assets/images/companies/clean-coffee.jpg";
import farmer from "@/assets/images/companies/farmers.jpg";
import exportPic from "@/assets/images/companies/export.jpg";
import CarouselFarmers from "@/components/CarouselFarmers";

const page = () => {
  return (
    <section className="pt-20 md:pt-28 min-h-screen w-full bg-companies text-black flex flex-col items-center gap-5">
      <h1 className="title text-white">Dirigido a compañias</h1>

      <article className="sm:mt-10 px-5 flex flex-col items-center gap-5 w-full md:w-[90%] lg:w-[70%]">
        <CarouselFarmers></CarouselFarmers>
        <div className="font-normal flex flex-col r md:flex-row sm:justify-around sm:items-center gap-4 p-8 bg-[#ffffffbb] backdrop-blur-[2px] rounded-tl-[90px] rounded-tr-[90px] rounded-br-[90px]">
          <p>
            Café con Aroma se compromete a ofrecerte granos de café de la más
            alta calidad a precios competitivos. Nuestra selección cuidadosa y
            procesos de tostado aseguran un producto excepcional en cada
            entrega.
          </p>
          <p>
            Al combinar calidad superior con precios atractivos, te ayudamos a
            destacarte en el mercado y a satisfacer a tus clientes más
            exigentes. Elige la mejor relación calidad-precio con nosotros.
          </p>
          <div className="w-full flex flex-col items-center">
            <Image
              src={coffeePic}
              width={500}
              height={500}
              className="w-[350px] rounded-lg shadow-[#5a5e5b] shadow-lg"
              alt="clean-coffee"
            />
            <p className="mt-3 text-xs font-light text-center">
              Café seleccionado y tostado - Venezuela
            </p>
          </div>
        </div>
        <div className="font-normal flex flex-col-reverse justify-center md:flex-row sm:justify-around sm:items-center gap-4 p-8  bg-[#ffffffbb] backdrop-blur-[2px] rounded-tr-[90px] rounded-tl-[90px] rounded-bl-[90px]">
          <div className="w-full flex flex-col items-center">
            <Image
              src={farmer}
              width={500}
              height={500}
              className="w-[350px] rounded-lg shadow-[#5a5e5b] shadow-lg"
              alt="farmer"
            />
            <p className="mt-3 text-xs font-light text-center">
              Radammel Falkao - Agricultor colombiano
            </p>
          </div>
          <p>
            Valoramos a los agricultores como Radammel Falkao que hacen posible
            nuestro café. Al eliminar intermediarios, garantizamos un comercio
            justo que beneficia directamente a los productores. Esto no solo
            asegura un precio justo para ellos, sino que también te ofrece un
            café de mayor calidad y frescura. Apoya un comercio ético y
            sostenible con cada compra al por mayor.
          </p>
        </div>
        <div className="font-normal flex flex-col justify-center md:flex-row sm:justify-around sm:items-center gap-4 p-8 bg-[#ffffffbb] backdrop-blur-[2px] rounded-tl-[90px] rounded-tr-[90px] rounded-br-[90px]">
          <p>
            Entendemos la importancia del tiempo en tu negocio. Por eso, hemos
            optimizado nuestros procesos para reducir significativamente el
            tiempo de exportación. Esto garantiza que recibas nuestros granos de
            café premium de manera rápida y eficiente, manteniendo siempre su
            frescura y calidad. Confía en nosotros para entregas puntuales que
            mantienen tu negocio en marcha.
          </p>
          <div className="w-full flex flex-col items-center">
            <Image
              src={exportPic}
              width={500}
              height={500}
              className="w-[350px] rounded-lg shadow-[#5a5e5b] shadow-lg"
              alt="export"
            />
            <p className="mt-3 text-xs font-light text-center">
              CargoAtlas - Puerto Algeciras, España.
            </p>
          </div>
        </div>
      </article>
      <div className="w-[80%] sm:w-full">
        <h3 className="title text-white mt-5">Algunos de nuestros socios productores</h3>
        <CarouselCoffee />
      </div>
    </section>
  );
};

export default page;
