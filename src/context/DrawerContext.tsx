import React, { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </DrawerContext.Provider>
  );
};
