import React from "react";
import { FormGroup, Input } from 'reactstrap';

const TextFiledComponent = props => {
  const {
    type,
    name,
    value,
    onChange,
    placeholder,
    multiline,
    rows,
    min,
  } = props;
  return (
    <FormGroup className="formGroup">
      <Input value={value} min={min} multiline={multiline} type={type} onChange={onChange} name={name} placeholder={placeholder} rows={rows} className="inputField" autoComplete="off" />
    </FormGroup>
  );
};

export default TextFiledComponent;
