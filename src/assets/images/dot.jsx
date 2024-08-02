import React from "react";

const Dot = (props) => {
  const color = props.color ? props.color : "#333333";
  const size = props.size ? props.size : "10"
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );
};

export default Dot;
