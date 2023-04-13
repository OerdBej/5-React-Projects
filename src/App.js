import React from 'react';
import Accordion from './components/Accordion';

const App = () => {
    const items = [
        {
            label: 'AeroSmith',
            content: 'Dream ON',
        },
        {
            label: 'Nirvana',
            content: 'My Girl',
        },
        {
            label: 'The Doors',
            content: 'Riders on the Storm',
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
