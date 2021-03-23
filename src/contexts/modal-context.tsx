import React, { createContext, useContext, useState } from 'react';

type ModalContextType = {
  visible: boolean;
  toggleVisibility: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export const ModalContextProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => setVisible((prevState) => !prevState);

  return (
    <ModalContext.Provider value={{ visible, toggleVisibility }}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within ModalContextProvider');
  }
  return context;
};
