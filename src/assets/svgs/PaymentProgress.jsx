import React from "react";

function PaymentSucceed() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <g filter="url(#filter0_d_10586_1412)">
          <circle
            cx="18"
            cy="16"
            r="11"
            fill="#263998"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_10586_1412"
            x="0.8"
            y="0.8"
            width="34.4"
            height="34.4"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2.6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_10586_1412"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_10586_1412"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default PaymentSucceed;
