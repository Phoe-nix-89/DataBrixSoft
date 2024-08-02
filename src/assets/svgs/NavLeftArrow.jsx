import React from "react";

function NavLeftArrow(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <g clipPath="url(#clip0_8857_517)">
          <path
            d="M9.09812 13.2998L10.0781 12.2498L4.89813 6.9998L10.0781 1.7498L9.09813 0.699805L2.79813 6.9998L9.09812 13.2998Z"
            fill={props.color}
            />
        </g>
        <defs>
          <clipPath id="clip0_8857_517">
            <rect
              width="14"
              height="14"
              fill={props.color}
              transform="translate(14 14) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default NavLeftArrow;
