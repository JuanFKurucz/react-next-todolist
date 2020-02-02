/**
 * @file 
 * ToDoList Add card
 */

import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'reactstrap';
import { InputText, InputSelect, AlertBox } from '../../Template/';
import Api from "../../../utils/Api";

const AddTask = (props) => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");
  const [errorText, setErrorText] = useState("");

  const addTask = async () => {
    const todoObject = {
      title: title,
      userId: user,
      completed: completed === "1"
    };
    const errors = [];
    if (todoObject.title.length === 0) {
      errors.push("Title can't be empty");
    }
    if (user <= 0) {
      errors.push("User can't be empty");
    }

    if (errors.length == 0) {
      setErrorText("");
      await Api.addTodo(todoObject);
      await props.onUpdate();
    } else {
      setErrorText(errors.join(", "));
    }
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleCompleted = event => {
    setCompleted(event.target.value);
  };

  const handleUser = event => {
    setUser(event.target.value);
  };

  return (
    <Form>
      <Row>
        <Col className="cardHeader">
          Add task
        </Col>
      </Row>
      <Row>
        <Col>
          <InputSelect name="user" label="User" onChange={handleUser} value={user}>
            <option value="0">Select</option>
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
          <AlertBox type="danger" visible={errorText.length>0}>
            {errorText}
          </AlertBox>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" className="buttonFilter" onClick={addTask}>Add task</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTask;
