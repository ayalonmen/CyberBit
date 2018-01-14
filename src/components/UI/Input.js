import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;
  const inputStyle = [classes.Input];
  if (props.validation.touched && !props.validation.valid) {
    inputStyle.push(classes.invalid);
  }
  switch (props.elementType) {
    case ('input'):
      inputElement = (<input
        className={inputStyle.join(' ')}
        value={props.value}
        onChange={props.change}
        {...props.elementConfig}
      />);
      break;
    default:
      inputElement = null;
  }
  return inputElement;
};

export default Input;
