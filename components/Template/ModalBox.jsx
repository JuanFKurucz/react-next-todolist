import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalBox = props => (
    <Modal isOpen={props.isOpen} toggle={props.onToggle}>
        <ModalHeader toggle={props.onToggle}>{props.title}</ModalHeader>
        <ModalBody>
            {props.children}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={props.onSubmit}>{props.actionText}</Button>{' '}
            <Button color="secondary" onClick={props.onToggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
);

export default ModalBox;
