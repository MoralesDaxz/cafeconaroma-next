"use client";

import {
  PayProductsContextType,
  Product,
  TotalInitValue,
} from "@/interfaces/interfaces";
/* Componente encargado del manejo de LS, total, y  componente ModalCar */
import {
  useState,
  createContext,
  useEffect,
  FC,
  useContext,
} from "react";

const defaultValue: PayProductsContextType = {
  local: [],
  setLocal: () => {},
  total: 0,
  sebuysLocalStorage: () => {},
  controlRender: 0,
  setControlRender: () => {},

  buysLocalStorage: {
    invoice: "",
    identity: "",
    date: "",
    time: "",
    office: "",
    delivery: "normal",
    subtotal: 0,
    total: 0,
    quantity: 0,
    payDelivery: 0,
    product: [],
  },
  setbuysLocalStorage: () => {},
};

export const PayProducts = createContext<PayProductsContextType>(defaultValue);

export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [local, setLocal] = useState<Product[]>([]);
  const [total, sebuysLocalStorage] = useState<number>(0);
  const [buysLocalStorage, setbuysLocalStorage] = useState<TotalInitValue>({
    invoice: "",
    identity: "",
    date: "",
    time: "",
    office: "",
    delivery: "normal",
    subtotal: 0,
    total: 0,
    quantity: 0,
    payDelivery: 0,
    product: [],
  });

  const [controlRender, setControlRender] = useState<number>(0);

  const updateState = () => {
    const storedProducts = localStorage.getItem("buy");
    const itemsLocalStorage: TotalInitValue = storedProducts
      ? JSON.parse(storedProducts)
      : {
          delivery: "normal",
          payDelivery: 0,
          subtotal: 0,
          total: 0,
          quantity: 0,
          product: [],
        };
    const balance = itemsLocalStorage.product.reduce(
      (sum, product) => {
        sum.quantityReduce += product.units!;
        sum.subtotalReduce += product.units! * product.price!;
        return sum;
      },
      { quantityReduce: 0, subtotalReduce: 0 }
    );
    const updatedTotal = itemsLocalStorage.payDelivery + balance.subtotalReduce;
    const updatedState = {
      ...itemsLocalStorage,
      quantity: balance.quantityReduce,
      subtotal: balance.subtotalReduce,
      total: updatedTotal,
    };
    setbuysLocalStorage(updatedState);
    return localStorage.setItem("buy", JSON.stringify(updatedState));
  };
  useEffect(() => {
    updateState();
  }, []);

  /* LS inicial */
  useEffect(() => {
    updateState();
  }, [controlRender]);

  return (
    <PayProducts.Provider
      value={{
        local,
        setLocal,
        total,
        sebuysLocalStorage,
        controlRender,
        setControlRender,
        buysLocalStorage,
        setbuysLocalStorage,
      }}
    >
      {children}
    </PayProducts.Provider>
  );
};

// Crear un hook personalizado para usar los estados dentro de otros componentes
export const usePayProducts = () => useContext(PayProducts);

/* Actualizacion de cantidades y precio */
/*    */
