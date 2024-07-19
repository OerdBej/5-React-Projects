import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../components/style.css';

const StarRating = ({ stars }) => {
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setStarRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave(index) {
    setHover(starRating);
    setStarRating(index);
  }

  return (
    <div className='center-container'>
      <h3 className='pastel-text'>slow coding</h3>
      <div className='star-rating'>
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={
                index <= (starRating || hover)
                  ? 'star active'
                  : 'star inactive'
              }
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={60}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
