import Footer from "@/components/Footer";
import GridGaleryUs from "@/components/GridGaleryUs";
import React from "react";

const Us = () => {
  const prfStyle = "text-base sm:text-lg font-extralight w-full";
  return (
    <>
      <section className="bg-us pt-20 md:pt-28 min-h-screen text-[#d8d7d7] flex flex-col items-center gap-5 px-2 sm:px-0">
        <h1 className="title pb-10">Nosotros</h1>

        <article className="w-full md:w-[90%] lg:w-[70%] flex flex-col items-center gap-5 bg-[#1b1b1bad] backdrop-blur-sm p-8 rounded-md">
          <p className={prfStyle}>
            En <b>Café con Aroma</b>, llevamos más de 50 años dedicados a la
            producción y distribución de café de alta calidad. Nuestra red de
            <b>
              &nbsp; distribución abarca tanto el ámbito nacional como
              internacional
            </b>
            , contando con más de 30 empresas aliadas que nos permiten llevar
            nuestro aroma y sabor a todas partes.
          </p>
          <p className={prfStyle}>
            El amor y cuidado por la naturaleza son fundamentales. Nos
            comprometemos con prácticas sostenibles y responsables, desde el
            cultivo hasta la distribución. <b>Apoyamos a los agricultores</b>{" "}
            locales y<b> preservamos los ecosistemas</b>, asegurando un futuro
            verde para las próximas generaciones.
          </p>
          <p className={prfStyle}>
            valoramos la tradición y la innovación. Nos enorgullece colaborar
            con más de 30 empresas aliadas, asegurando que nuestro café llegue
            fresco y con el mejor sabor posible a cada rincón del mundo,
            ofreciendo una experiencia única en cada taza.
          </p>
          <p className={prfStyle}>
            <b>Nuestra misión</b> es proporcionar a nuestros clientes una
            experiencia única con cada taza de café, ofreciendo productos de la
            más alta calidad, seleccionados cuidadosamente desde su origen. Nos
            esforzamos por mantener un compromiso con la excelencia y la
            sostenibilidad en cada etapa de nuestra producción.
          </p>
          <p className={prfStyle}>
            <b>Nuestra visión</b> es ser líderes en el mercado global del café,
            reconocidos por nuestra innovación y calidad. Queremos ser la
            elección preferida de los amantes del café en todo el mundo,
            consolidándonos como una marca que representa tradición, pasión y
            excelencia.
          </p>
        </article>
        <h2 className="title my-6">Un poco de nuestro día a día.</h2>
        <article className="w-full md:w-[90%] lg:w-[70%] backdrop-blur-sm px-2 py-4 rounded-md">
          <GridGaleryUs />
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Us