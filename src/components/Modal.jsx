// compound components are a way to create a component that has multiple children that can be controlled by the parent component

import { createContext, useContext } from "react";

const ModalContext = createContext();

const Modal = ({ children, open, close }) => {
  return (
    <ModalContext.Provider value={{ open, close }}>
      {open ? <div className="modal">{children}</div> : null}
    </ModalContext.Provider>
  );
};

const ModalHeader = ({ children }) => {
  const { close } = useContext(ModalContext);
  return (
    <div className="modal-header">
      {children}
      <button onClick={close}>Close</button>
    </div>
  );
};

const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
