/**
 * @file 
 * ToDoList Filter card
 */

import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'reactstrap';
import { InputText, InputSelect } from '../../Template/';

const Filters = (props) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");

  const sendFilters = async () => {
    const filterObject = {};
    let sort = null;
    if (completed !== "0") {
      sort = completed === "1";
    }
    if (title.length > 0) {
      filterObject.title = title.trim();
    }
    await props.onUpdate(filterObject, sort);
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleCompleted = event => {
    setCompleted(event.target.value);
  };

  return (
    <Form>
      <Row>
        <Col className="cardHeader">
          Filters
        </Col>
      </Row>
      <Row>
        <Col>
          <InputText label="Title" name="title" placeholder="Write the name of the task" onChange={handleTitle} value={title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputSelect name="completed" label="Sorting by status" onChange={handleCompleted} value={completed}>
            <option value="0">No sorting</option>
            <option value="1">Completed</option>
            <option value="2">Not completed</option>
          </InputSelect>
        </Col>
      </Row>
      <Row>
        <Col className="centeredCell">
          <Button color="primary" className="buttonCard" onClick={sendFilters}>Filter</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Filters;
