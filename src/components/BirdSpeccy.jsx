import React from 'react';
import PropTypes from 'prop-types';

const BirdSpeccy = ({ speccy }) => (
  <div className="speccy-card">
    <div className="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h2 className="speccy-title">{speccy.comName}</h2>
    <p>{speccy.howMany || 0}</p>
  </div>
);

BirdSpeccy.propTypes = {
  speccy: PropTypes.shape({
    comName: PropTypes.string.isRequired,
    howMany: PropTypes.number,
  }).isRequired,
};

export default BirdSpeccy;
