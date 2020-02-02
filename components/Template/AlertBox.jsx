import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertBox = (props) => (
  <Alert color={props.type} isOpen={props.visible} className="alertBox">
    {props.children}
  </Alert>
);

export default AlertBox;