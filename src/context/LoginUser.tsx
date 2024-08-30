"use client";
import { getKeyLocal } from "@/data/controlLocalStorage";
/* Componente encargado de manejar el Login segun respuesta de API users */
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
  useContext,
} from "react";
type Init = {
  name: string;
  lastName: string;
  _id: string;
  message: string;
};
type State = {
  user: Init | undefined;
  setUser: Dispatch<SetStateAction<Init | undefined>>;
  controlRender: number;
  setControlRender: Dispatch<SetStateAction<number>>;
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
};
export const QueryUser = createContext<State>({
  user: { name: "", lastName: "", _id: "", message: "" },
  setUser: () => {},
  controlRender: 0,
  setControlRender: () => {},
  isUser: false,
  setIsUser: () => {},
});

export const QueryUserProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Init>();
  const [controlRender, setControlRender] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const updateGlobal = () => {
    const key = getKeyLocal("user");
    if (key !== null && key.name) {
      setUser(key);
      setIsUser(true);
      return;
    }
    setIsUser(false);
    return localStorage.setItem("user", JSON.stringify({}));
  };

  useEffect(() => {
    return updateGlobal();
  }, []);

  useEffect(() => {
    return updateGlobal();
  }, [controlRender]);
  return (
    <QueryUser.Provider
      value={{
        user,
        setUser,
        controlRender,
        setControlRender,
        isUser,
        setIsUser,
      }}
    >
      {children}
    </QueryUser.Provider>
  );
};
// Crear un hook personalizado para usar los estados dentro de otros componentes
export const useUser = () => useContext(QueryUser);
