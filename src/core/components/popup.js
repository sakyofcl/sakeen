import React from 'react';
import Modal from 'react-bootstrap/Modal';

export function Popup(props) {
    const {show, title, handleClose, children} = props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
  );
}

