import React from 'react';
import Star from './Star';
import "./rating.scss"
function Restbox() {
  const completedStars = 3; // Number of completed stars

  return (
    <div>
      {[1, 2, 3, 4, 5].map((starValue) => (
        <Star key={starValue} filled={starValue <= completedStars} />
      ))}
    </div>
  );
}

export default Restbox;
