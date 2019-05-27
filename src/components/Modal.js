import React     from 'react';
import PropTypes from 'prop-types';
import { 
    Button, 
    Modal as ModalFromUpstream, 
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap';

const Modal = ({ 
    closeModal,
    isOpen,
    message,
}) => (
    <ModalFromUpstream isOpen={ isOpen }>
        <ModalHeader>
            Information
        </ModalHeader>
        <ModalBody>
            {message}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={ closeModal }>Stäng</Button>
        </ModalFooter>
    </ModalFromUpstream>
);


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isOpen:     PropTypes.bool.isRequired,
    message:    PropTypes.string,
}

export default Modal;
