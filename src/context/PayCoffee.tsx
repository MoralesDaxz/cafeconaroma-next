"use client";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
  useContext,
} from "react";

type ControlProps = {
  closeModal: boolean;
  setCloseModal: Dispatch<SetStateAction<boolean>>;
  windowWidth: number;
  setWindowWidth: Dispatch<SetStateAction<number>>;
  windowScroll: number;
  setWindowScroll: Dispatch<SetStateAction<number>>;
};

export const Purchase = createContext<ControlProps>({
  closeModal: false,
  setCloseModal: () => {},
  windowWidth: 0,
  setWindowWidth: () => {},
  windowScroll: 0,
  setWindowScroll: () => {},
});
export const PurchaseDisplayProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowScroll, setWindowScroll] = useState<number>(0);
  useEffect(() => {
  }, []);
  return (
    <Purchase.Provider
      value={{
        closeModal,
        setCloseModal,
        windowWidth,
        setWindowWidth,
        windowScroll,
        setWindowScroll,
      }}
    >
      {children}
    </Purchase.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const usePurchase = () => useContext<ControlProps>(Purchase);
