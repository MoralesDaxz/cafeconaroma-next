"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import { galeryUs } from "@/data/information";
import Image from "next/image";
import { useEffect, useState } from "react";
const GridGaleryUs = () => {
  const { windowWidth } = useControlDisplay();
  const [columns, setColumns] = useState(4);
  const lengthGalery = Math.ceil(galeryUs.length / columns);

  useEffect(() => {
    if (windowWidth < 450) {
      return setColumns(2);
    } if (windowWidth < 800 ) {
      return setColumns(3);
    } if (windowWidth < 1024){
      return setColumns(4);
    }
  }, [windowWidth]);
  const splitGallery = (arr, cols) => {
    let result = [];
    for (let i = 0; i < cols; i++) {
      result.push(arr.slice(i * lengthGalery, (i + 1) * lengthGalery));
    }
    return result;
  };

  const galleryColumns = splitGallery(galeryUs, columns);
  return (
    <div className="row overflow-y-scroll h-[400px] lg:h-[500px]">
      {galleryColumns.map((column, colIndex) => {
        return (
          <div className="column" key={colIndex}>
            {column.map((item, index) => {
              return (
                <Image
                  className="img rounded-[16px]"
                  key={index}
                  width={400}
                  height={400}
                  src={item}
                  alt={`Enviroment_Aroma_Cafe_${index}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridGaleryUs;
