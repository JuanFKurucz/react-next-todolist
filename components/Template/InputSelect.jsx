import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputSelect = (props) => (
    <FormGroup>
        <Label for={props.name}>{props.label}</Label>
        <Input type="select" name={props.name} value={props.value} onChange={props.onChange}>
            {props.children}
        </Input>
    </FormGroup>
);

export default InputSelect;
