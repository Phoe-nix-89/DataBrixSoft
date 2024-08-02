import React from "react";

function NavRightArrow(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path
          d="M1.40188 0.700195L0.421875 1.7502L5.60187 7.0002L0.421875 12.2502L1.40188 13.3002L7.70187 7.0002L1.40188 0.700195Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
}

export default NavRightArrow;
