import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSingle(dataItem) {
    console.log(dataItem);
  }

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className='item' key={index}>
              <div
                className='title'
                onClick={() => handleSingle(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
