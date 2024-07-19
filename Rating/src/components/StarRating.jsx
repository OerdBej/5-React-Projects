import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ stars }) => {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick() {
    console.log('blah');
  }

  return (
    <div className='star-rating'>
      {/* creating the stars in converting them into arrys wo we keep track*/}

      {[...Array(stars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            onClick={handleClick}
            onMouseLeave={[]}
            onMouseEnter={[]}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
