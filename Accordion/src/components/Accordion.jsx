import React, { useState } from 'react';
import data from './data';
import './style.css';

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [multiselection, setMultiSelection] = useState(false);
  const [multiID, setMultiID] = useState([]);

  function handleSingle(dataItem) {
    setSelectedItem(dataItem === selectedItem ? null : dataItem);
  }

  function handleMultipleSelection(dataItem) {
    let copyState = [...multiID];
    //if clicked then remove or push it
    const indexCurrentID = copyState.indexOf(dataItem);
    if (indexCurrentID === -1) copyState.push(dataItem);
    else copyState.splice(indexCurrentID, 1);
    setMultiID(copyState);
    console.log(multiID);
  }

  return (
    <div className='wrapper'>
      <button
        onClick={() => setMultiSelection(!multiselection)}
        style={{
          backgroundColor: multiselection ? 'green' : 'red',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        multiple
      </button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className='item' key={index}>
              <div
                className='title'
                onClick={
                  multiselection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingle(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {/*! 🟢 here from the state 🟢*/}
                {selectedItem === dataItem.id ? (
                  <div className='content'> {dataItem.answer}</div>
                ) : null}
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
