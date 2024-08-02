import React from 'react';
import { string } from 'prop-types';

function Star(props) {
  const { color } = props;
  return (
    <div>
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill={color} />
      </svg>
    </div>
  );
}

Star.propTypes = {
  color: string,
};
Star.defaultProps = {
  color: '#333333',
};

export default Star;
