import CarouselFarmers from "@/components/CarouselFarmers";
import Image from "next/image";
import React from "react";
import coffeePic from "@/assets/images/companies/clean-coffee.jpg";
import farmer from "@/assets/images/companies/farmers.jpg";
import exportPic from "@/assets/images/companies/export.jpg";
import CarouselAllies from "@/components/CarouselAllies";
import Link from "next/link";
import Footer from "@/components/Footer";

const Company = () => {
  const rightBox =
    "bg-[#ffffffbb] backdrop-blur-[2px] rounded-tl-[90px] rounded-tr-[90px] rounded-br-[90px] p-8";
  const leftBox =
    "bg-[#ffffffbb] backdrop-blur-[2px] rounded-tr-[90px] rounded-tl-[90px] rounded-bl-[90px] p-8";

  return (
    <>
      <section className="pt-20 md:pt-28 min-h-screen w-full bg-companies text-black flex flex-col items-center gap-5 px-5 ">
        <h1 className="title text-white pb-10">Dirigido a compañias</h1>
        <article
          className={
            "w-full md:w-[90%] lg:w-[70%] flex flex-col items-center text-center [background:radial-gradient(125%_125%_at_50%_10%,#e9eee9b4_40%,#2ddb45_100%)] " +
            leftBox
          }
        >
          <CarouselAllies />
          <h2 className="w-[80%] text-base sm:text-lg sm:font-normal leading-5">
            Ellos disfrutan de beneficios como descuentos y obsequios por
            compras de gran volumen, &nbsp;
            <Link href={"/contact"} className="italic underline">
              contactanos
            </Link>
            .
          </h2>
        </article>
        <article className="sm:mt-10 flex flex-col items-center gap-5 w-full md:w-[90%] lg:w-[70%]">
          <div
            className={
              "w-full font-normal flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 " +
              rightBox
            }
          >
            <p className="sm:w-[25%] sm:self-start text-base sm:text-lg font-extralight ">
              Café con Aroma se compromete a ofrecerte granos de café de la más
              alta calidad a precios competitivos. Nuestra selección cuidadosa y
              procesos de tostado aseguran un producto excepcional en cada
              entrega.
            </p>
            <p className="sm:w-[25%] sm:self-start text-base sm:text-lg font-extralight ">
              Al combinar calidad superior con precios atractivos, te ayudamos a
              destacarte en el mercado y a satisfacer a tus clientes más
              exigentes. Elige la mejor relación calidad-precio con nosotros.
            </p>
            <div className="w-full sm:w-[45%] flex flex-col items-center">
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
          <div
            className={
              "w-full font-normal flex flex-col-reverse justify-center sm:flex-row sm:justify-around sm:items-center " +
              leftBox
            }
          >
            <div className="w-full sm:w-[45%] flex flex-col items-center">
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
            <p className="sm:w-[50%] sm:self-start text-base sm:text-lg font-extralight ">
              Valoramos a los agricultores como Radammel Falkao que hacen
              posible nuestro café. Al eliminar intermediarios, garantizamos un
              comercio justo que beneficia directamente a los productores. Esto
              no solo asegura un precio justo para ellos, sino que también te
              ofrece un café de mayor calidad y frescura. Apoya un comercio
              ético y sostenible con cada compra al por mayor.
            </p>
          </div>
          <div
            className={
              "w-full font-normal flex flex-col justify-center sm:flex-row sm:justify-around sm:items-center " +
              rightBox
            }
          >
            <p className="sm:w-[50%] sm:self-start text-base sm:text-lg font-extralight ">
              Entendemos la importancia del tiempo en tu negocio. Por eso, hemos
              optimizado nuestros procesos para reducir significativamente el
              tiempo de exportación. Esto garantiza que recibas nuestros granos
              de café premium de manera rápida y eficiente, manteniendo siempre
              su frescura y calidad. Confía en nosotros para entregas puntuales
              que mantienen tu negocio en marcha.
            </p>
            <div className="w-full sm:w-[45%] flex flex-col items-center">
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
        <div className="w-full md:w-[95%] lg:w-[90%]">
          <h3 className="title text-white mt-5">
            Algunos de nuestros socios productores
          </h3>
          <CarouselFarmers />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Company;
