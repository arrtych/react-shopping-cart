import React, { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextType {
  openDrawer: boolean;
  changeDrawer: () => void;
  closeDrawer: () => void;
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
  const [openDrawer, setOpenDrawer] = useState(false);

  const changeDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, changeDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
