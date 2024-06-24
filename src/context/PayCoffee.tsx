"use client";
import { getCoffee } from "@/utils/apiGetCoffee";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
  useContext,
} from "react";

type Product = {
  id?: string;
  name?: string;
  img?: string;
  price?: number;
  units?: number;
 
};

/* type ControlProps = {
  local: Product[] | undefined;
  setCoffee: Dispatch<SetStateAction<Product[] | undefined>>;
};
 */


export const PayProducts = createContext({});

export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedProducts = localStorage.getItem("coffee");
  const products = storedProducts ? JSON.parse(storedProducts) : [];
  const [local, setLocal] = useState(products)
/*   const [coffee, setCoffee] = useState<Product[]>();
  const url = process.env.NEXT_PUBLIC_URL_API_COFFEE; */
  useEffect(() => {}, []);
  return (
    <PayProducts.Provider
      value={{
        local,
      }}
    >
      {children}
    </PayProducts.Provider>
  );
};

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useProducts = () => useContext(PayProducts);
