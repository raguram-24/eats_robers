import React from 'react';

const Star = ({ filled }) => (
  <span className={`star ${filled ? 'filled' : 'empty'}`}>&#9733;</span>
);

export default Star;
