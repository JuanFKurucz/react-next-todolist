/**
 * @file 
 * ToDoList Edit modal
 */

import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'reactstrap';
import { InputText, InputSelect, AlertBox, ModalBox } from '../../Template/';
import Api from "../../../utils/Api";

const EditTask = props => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        if (modal) {
            props.onClose();
        }
        setModal(!modal)
    };

    const [userId, setUserId] = useState(0);
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState("0");
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (props.editId > 0) {
                const row = await Api.getTodos({ id: props.editId });
                if (row !== null && row.length > 0) {
                    setModal(true);
                    setUserId(row[0].userId);
                    setTitle(row[0].title);
                    (row[0].completed) ? setCompleted("1") : setCompleted("0");
                    setErrorText("");
                }
            }
        }
        fetchData();
    },
        [props.editId],
    );

    const handleTitle = event => {
        setTitle(event.target.value);
    };

    const handleCompleted = event => {
        setCompleted(event.target.value);
    };

    const handleUser = event => {
        setUserId(event.target.value);
    };

    const actionModal = async () => {
        const todoObject = {
            title: title,
            userId: userId,
            completed: completed === "1"
        };
        const errors = [];
        if (props.editId <= 0) {
            errors.push("Task can't be empty");
        }
        if (!todoObject.title || todoObject.title.length === 0) {
            errors.push("Title can't be empty");
        }
        if (todoObject.userId <= 0) {
            errors.push("User can't be empty");
        }

        if (errors.length == 0) {
            setErrorText("");
            await props.updateItem(props.editId, todoObject);
            setModal(false);
            props.onClose();
        } else {
            setErrorText(errors.join(", "));
        }
    }

    return (
        <ModalBox isOpen={modal} onToggle={toggleModal} title="Edit item" onSubmit={actionModal} actionText="Edit task" >
            <Form>
                <Row>
                    <Col>
                        <InputSelect name="user" label="User" onChange={handleUser} value={userId}>
                            {props.users && props.users.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </InputSelect>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputText label="Title" name="title" placeholder="Write the name of the task" onChange={handleTitle} value={title} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputSelect name="completed" label="Status" onChange={handleCompleted} value={completed}>
                            <option value="0">Not completed</option>
                            <option value="1">Completed</option>
                        </InputSelect>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AlertBox type="danger" visible={errorText.length > 0}>
                            {errorText}
                        </AlertBox>
                    </Col>
                </Row>
            </Form>
        </ModalBox>
    );
};

export default EditTask;
