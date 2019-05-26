import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Modal as ModalFromUpstream, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modal = ({ 
    closeModal, 
    message, 
    isOpen 
}) => (
    <ModalFromUpstream isOpen={isOpen}>
        <ModalHeader>
            Information
        </ModalHeader>
        <ModalBody>
            {message}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={closeModal}>Stäng</Button>
        </ModalFooter>
    </ModalFromUpstream>
);

export default Modal;
