import React from 'react';
import PropTypes from 'prop-types';

function Close(props) {
  const { color } = props;
  const colors = color || '#333';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z"
        fill={colors}
        fillOpacity="1"
      />
    </svg>
  );
}
Close.propTypes = {
  color: PropTypes.string,
};
Close.defaultProps = {
  color: '#333',
};

export default Close;
