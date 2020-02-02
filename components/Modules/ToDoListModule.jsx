/**
 * @file 
 * ToDoList Module
 *
 * The frontend module of the ToDoList section
 */

import React from 'react';
import { Row } from 'reactstrap';
import { CardBox } from '../Template/';
import Listing from './ToDoList/Listing'
import Filters from './ToDoList/Filters'
import AddTask from './ToDoList/AddTask'
import Api from "../../utils/Api";

const ToDoListModule = props => {
    const removeItem = async (id) => {
        await Api.deleteTodo(id);
        props.onUpdate();
    }

    const updateItem = async (id,data) => {
        await Api.updateTodo(id,data);
        props.onUpdate();
    }
    return (
        <>
          <Row>
              <CardBox size={6}>
                  <Filters onUpdate={props.onUpdate} />
              </CardBox>
              <CardBox size={6}>
                  <AddTask onUpdate={props.onUpdate} users={props.users} />
              </CardBox>
          </Row>
          <Row>
            <Listing removeItem={removeItem} updateItem={updateItem} rows={props.rows} users={props.users} />
          </Row>
        </>
    );
}

export default ToDoListModule;
