import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as ModalFromUpstream, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class Modal extends React.Component {
//     constructor(props) {

//         super(props);
//             this.state = {
//             modal: false
//         };

//         this.toggle = this.toggle.bind(this);
//     }

//     toggle() {
//         this.setState(prevState => ({
//         modal: !prevState.modal
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//                 <ModalFromUpstream isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//                     <ModalBody>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </ModalFromUpstream>
//             </div>
//         );
//     }
// }

// export default Modal;

const Modal = ({ closeModal, title, message, isOpen }) => {
    return (

    <ModalFromUpstream isOpen={isOpen}>
        <ModalHeader>Information</ModalHeader>
        <ModalBody>
            {message}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={closeModal}>Stäng</Button>
        </ModalFooter>
    </ModalFromUpstream>

    //   <div className="modal-content">
    //     <div className="modal-header">
    //       <h5
    //         className="modal-title"
    //       >{title}</h5>
    //       <button type="button" className="close" aria-label="Close" onClick={closeModal}>
    //         <span aria-hidden="true">&times;</span>
    //       </button>
    //     </div>
    //     <div className="modal-body">
    //       <p>{message}</p>
    //     </div>
    //     <div className="modal-footer">
    //       <button type="button" className="btn btn-secondary" onClick={closeModal}>close</button>
    //     </div>
    //   </div>
    )
  }

  export default Modal;
