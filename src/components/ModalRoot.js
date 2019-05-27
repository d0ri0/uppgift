import React from 'react'
import { connect } from 'react-redux'
// import ReactModal from 'react-modal';

import { hideModal } from '../actions/modal'

import Modal from './Modal';

const ModalContainer = ({
    data,
    hideModal
}) => (
    <Modal 
        isOpen = { data.modalProps.isOpen }
        message = { data.modalProps.message }
        closeModal = { hideModal }
    />
);

const mapStateToProps = state => ({
    data: state.modal
})

export default connect(mapStateToProps, {
    hideModal
})(ModalContainer)
