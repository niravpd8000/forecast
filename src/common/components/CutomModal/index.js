import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.scss";

const CustomModal = ({ visible, className, onClose, children, title }) => {
  return (
    <Modal
      centered
      show={visible}
      className={`custom-modal ${className}`}
      onHide={onClose || null}
    >
      <div className="card-header">{title}</div>
      {children}
    </Modal>
  );
};

export default CustomModal;
