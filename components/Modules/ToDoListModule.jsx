/**
 * @file 
 * ToDoList Module
 *
 * The frontend module of the ToDoList section
 */

import React, { useState } from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';
import Listing from './ToDoList/Listing'
import Filters from './ToDoList/Filters'
import AddTask from './ToDoList/AddTask'
import Api from "../../utils/Api";



const ToDoListModule = props => {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const toggleCollapse = () => setIsOpenCollapse(!isOpenCollapse);

    const removeItem = async (id) => {
        await Api.deleteTodo(id);
        props.onUpdate();
    }

    const updateItem = async (id, data) => {
        await Api.updateTodo(id, data);
        props.onUpdate();
    }
    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="centeredCell">
                    <Button color="primary" onClick={toggleCollapse}>Toggle actions</Button>
                </Col>
            </Row>
            <Collapse isOpen={isOpenCollapse}>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={{ size: 4, offset: 1 }} className="cardBox">
                        <Filters onUpdate={props.onUpdate} />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={{ size: 4, offset: 2 }} className="cardBox">
                        <AddTask onUpdate={props.onUpdate} users={props.users} />
                    </Col>
                </Row>
            </Collapse>
            <Row className="rowList">
                <Col xs={12} sm={12} md={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                    <Listing removeItem={removeItem} updateItem={updateItem} rows={props.rows} users={props.users} />
                </Col>
            </Row>
        </>
    );
}

export default ToDoListModule;
