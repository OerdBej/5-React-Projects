import { useState } from 'react';
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
    const indexCurrentID = copyState.indexOf(dataItem);

    if (indexCurrentID === -1) copyState.push(dataItem);
    else copyState.splice(indexCurrentID, 1);
    setMultiID(copyState);
    console.log(multiID);
  }

  function reset() {
    setSelectedItem(null);
    setMultiSelection(false);
    setMultiID([]);
  }

  return (
    <div className='wrapper'>
      <button
        onClick={() => setMultiSelection(!multiselection)}
        style={{
          backgroundColor: multiselection ? '#a8dadc' : '#f4a261', // pastel teal for enabled, pastel orange for disabled
          color: '#333',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        multiple
      </button>
      <button
        onClick={reset}
        style={{
          backgroundColor: '#ffc1cc', // pastel pink
          color: '#333',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          marginLeft: '10px',
        }}
      >
        reset
      </button>

      {/*  here is for the data */}
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
                {selectedItem === dataItem.id ||
                multiID.indexOf(dataItem.id) !== -1 ? (
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
