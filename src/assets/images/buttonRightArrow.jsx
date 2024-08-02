import React from "react";

const ButtonRightArrow = (props) => {
  const color = props.color ? props.color : "#333333";
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.136719 15.775L1.61172 17.25L9.86172 9L1.61172 0.75L0.136719 2.225L6.91172 9L0.136719 15.775H0.136719Z"
        fill={color}
      />
    </svg>
  );
};

export default ButtonRightArrow;
