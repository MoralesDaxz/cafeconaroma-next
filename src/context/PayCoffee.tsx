"use client";
/* Componente encargado del manejo de LS, total, y componente ModalCar */
import {
  PayProductsContextType,
  TotalInitValue,
} from "@/interfaces/index";
import { getKeyLocal } from "@/data/controlLocalStorage";
import { useState, createContext, useEffect, FC, useContext } from "react";

const defaultValue: PayProductsContextType = {
  controlRender: 0,
  setControlRender: () => {},
  buysLocalStorage: {
    subtotal: 0,
    total: 0,
    quantity: 0,
    product: [],
    sent: { delivery: "normal", payDelivery: 0 },
  },
  setbuysLocalStorage: () => {},
};

export const PayProducts = createContext<PayProductsContextType>(defaultValue);
export const PayProductsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [controlRender, setControlRender] = useState<number>(0);
  const [buysLocalStorage, setbuysLocalStorage] = useState<TotalInitValue>({
    subtotal: 0,
    total: 0,
    quantity: 0,
    product: [],
    sent: { delivery: "normal", payDelivery: 0 },
  });
  /* Actualizamos ESTADO "Funcionalidad" y LocalStorage "DB - Local" */
  const updateGlobal = () => {
    const itemsLocalStorage: TotalInitValue = getKeyLocal("buy");
    const balance = itemsLocalStorage.product.reduce(
      (sum, product) => {
        sum.quantityReduce += product.units!;
        sum.subtotalReduce += product.units! * product.price!;
        return sum;
      },
      { quantityReduce: 0, subtotalReduce: 0 }
    );

    const updatedTotal =
      itemsLocalStorage?.sent.payDelivery + balance.subtotalReduce;
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
    return updateGlobal();
  }, []);

  /* LS inicial */
  useEffect(() => {
    return updateGlobal();
  }, [controlRender]);

  return (
    <PayProducts.Provider
      value={{
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
