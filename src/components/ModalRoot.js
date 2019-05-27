import React         from 'react'
import PropTypes     from 'prop-types';
import { connect }   from 'react-redux'
import { hideModal } from '../actions/modal'
import Modal         from './Modal';

const ModalContainer = ({
    data,
    hideModal,
}) => (
    <Modal 
        closeModal = { hideModal }
        isOpen     = { data.modalProps.isOpen }
        message    = { data.modalProps.message }
    />
);

ModalContainer.propTypes = {
    data: PropTypes.shape({
        modalProps: PropTypes.shape({
            isOpen:  PropTypes.bool.isRequired,
            message: PropTypes.string,
        })
    }),
    hideModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    data: state.modal,
})

export default connect(mapStateToProps, {
    hideModal
})(ModalContainer)
