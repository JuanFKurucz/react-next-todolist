import React from 'react';
import { Col } from 'reactstrap';

const CardBox = props => (
    <Col xs={12} sm={12} md={props.size} lg={props.size} className="cardBox">
        {props.children}
    </Col>
);

export default CardBox;