import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  function modalToggle(value) {
    setShowModal(value);
  }
  return (
    <ModalContext.Provider value={{ showModal, modalToggle }}>
      {children}
    </ModalContext.Provider>
  );
}
