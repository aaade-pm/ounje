import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const modalToggle = (result) => {
    setSelectedResult(result);
    setShowModal(!showModal);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        modalToggle,
        selectedResult,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ModalProvider, ModalContext };
