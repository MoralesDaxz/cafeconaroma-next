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

export const ControlDisplay = createContext<ControlProps>({
  closeModal: false,
  setCloseModal: () => {},
  windowWidth: 0,
  setWindowWidth: () => {},
  windowScroll: 0,
  setWindowScroll: () => {},
});
export const ControlDisplayProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowScroll, setWindowScroll] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth * 1);

      const handleResize = () => {
        setWindowWidth(window.innerWidth * 1);
        return;
      };

      const handleScroll = () => {
        setWindowScroll(window.scrollY);
        return;
      };
      window.addEventListener("resize", () => handleResize());
      window.addEventListener("scroll", () => handleScroll());

      return () => {
        window.removeEventListener("resize", () => handleResize());
        window.removeEventListener("scroll", () => handleScroll());
      };
    }
  }, []);
  return (
    <ControlDisplay.Provider
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
    </ControlDisplay.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useControlDisplay = () => useContext<ControlProps>(ControlDisplay);
