import React from "react";

const Checkbox = (props) => {
  const color = props.color ? props.color : "#333333";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <path fill="none" stroke="#fff" strokeWidth="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
    </svg>
  );
};

export default Checkbox;
