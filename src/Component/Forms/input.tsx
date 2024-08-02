import React from "react";

import "./inputField.scss";
import "./component.css";

const InputField = (props:any) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={`ru-input-field ${props.className}`}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onKeyPress={props.onKeyPress}
      accept={props.accept}
    />
  );
};

export default InputField;
