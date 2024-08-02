import React from "react";
import PropTypes from "prop-types";

function ModuleHeader(props) {
  const { startColor, endColor } = props;
  return (
    <div>
      <svg viewBox="0 0 377 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0006 47L30.0009 73.5V139.5L30 159.5C10.1052 153.422 9.48916 140.295 10.0006 124.975V47Z"
          fill="url(#paint0_linear_937_549)"
        />
        <path
          d="M37.4291 6C22.2757 6 10 17.7769 10 32.3147V129C10 116.451 20.6054 106.276 33.686 106.276H318.5C341.602 106.276 360.338 78.302 360.338 56.1381C360.338 33.9743 341.602 6 318.5 6H37.4291Z"
          fill={endColor}
        />
        <defs>
          <linearGradient id="paint0_linear_937_549">
            <stop stopColor="#434980" />
          </linearGradient>
          <linearGradient id="paint1_linear_937_549">
            <stop offset="15%" fill={startColor} stopColor={startColor} />
            <stop offset="80%" fill={endColor} stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

ModuleHeader.propTypes = {
  endColor: PropTypes.string,
  startColor: PropTypes.string,
};

export default ModuleHeader;
