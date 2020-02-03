import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputText = (props) => (
    <FormGroup>
        <Label for={props.name}>{props.label}</Label>
        <Input type="text" name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    </FormGroup>
);

export default InputText;
