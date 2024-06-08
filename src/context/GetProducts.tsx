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
  _id?: string;
  available?: true;
  brand?: string;
  img_url?: string;
  price?: number;
  package?: string;
};

type ControlProps = {
  coffee: Product[] |undefined;
  setCoffee: Dispatch<SetStateAction<Product[]|undefined>>;
};

/* const localInfo = localStorage.setItem('buys', JSON.stringify([])) */
export const GetProducts = createContext<ControlProps>({
  coffee: [],
  setCoffee: () => {},
});
export const GetProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coffee, setCoffee] = useState<Product[]>();
  useEffect(() => {
    const URL_API = "https://api-cafeconaroma.onrender.com/products";
    getCoffee(URL_API).then((data:Product[]) => {
      setCoffee(data);
    });
  }, []);
  return (
    <GetProducts.Provider
      value={{
        coffee,
        setCoffee,
      }}
    >
      {children}
    </GetProducts.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useProducts = () => useContext<ControlProps>(GetProducts);
