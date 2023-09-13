import React from 'react';
import PropTypes from 'prop-types';

const BirdSpeccy = ({ speccy }) => (
  <div>
    <h2>{speccy.comName}</h2>
    <p>{speccy.howMany}</p>
    <hr />
  </div>
);

BirdSpeccy.propTypes = {
  speccy: PropTypes.shape({
    comName: PropTypes.string.isRequired,
    howMany: PropTypes.number.isRequired,
  }).isRequired,
};

export default BirdSpeccy;
