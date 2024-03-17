import { useBackdrop } from "@/hooks/useBackdrop";
import React, { PropsWithChildren, createContext } from "react";

type defaultContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activePhoto: any;
  setActivePhoto: React.Dispatch<React.SetStateAction<any>>;
};

const defaultContext: defaultContextType = {
  open: false,
  setOpen: () => null,
  activePhoto: null,
  setActivePhoto: () => null,
};

const BackdropContext = createContext<defaultContextType>(defaultContext);

const BackdropProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { open, setOpen, activePhoto, setActivePhoto } = useBackdrop();
  return (
    <BackdropContext.Provider
      value={{ open, setOpen, activePhoto, setActivePhoto }}
    >
      {children}
    </BackdropContext.Provider>
  );
};

export { BackdropContext, BackdropProvider };
