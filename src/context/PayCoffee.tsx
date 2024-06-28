"use client";
import { useState, createContext, useEffect, FC, useContext } from "react";

type Product = {
  id?: string;
  name?: string;
  image?: string;
  price?: number;
  units?: number;
};

interface PayProductsContextType {
  local: Product[];
}

const defaultValue: PayProductsContextType = {
  local: [],
};
export const PayProducts = createContext(defaultValue);
export const control = 0
export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>(defaultValue.local);
 
  
  const getLocal = () => {
    const storedProducts = localStorage.getItem("coffee");
    const products = storedProducts ? JSON.parse(storedProducts) : [];

    return setLocal(products)
  }; 

  useEffect(() => {
  
    getLocal()
   
  }, [control]);
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
export const usePayProducts = () => useContext(PayProducts);
