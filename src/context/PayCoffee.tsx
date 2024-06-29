"use client";
import {
  useState,
  createContext,
  useEffect,
  FC,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

type Product = {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  units?: number;
};

interface PayProductsContextType {
  local: Product[];
  setLocal: Dispatch<SetStateAction<Product[]>>;
}

const defaultValue: PayProductsContextType = {
  local: [],
  setLocal: () => {},
};


export const PayProducts = createContext(defaultValue);
export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>(defaultValue.local);

  useEffect(() => {
    const storedProducts = localStorage.getItem("coffee");
    const products = storedProducts ? JSON.parse(storedProducts) : [];
    return setLocal(products);
  }, []);
  return (
    <PayProducts.Provider
      value={{
        local,
        setLocal,
      }}
    >
      {children}
    </PayProducts.Provider>
  );
};

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const usePayProducts = () => useContext(PayProducts);
