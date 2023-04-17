import React from 'react';
import Accordion from './components/Accordion';

const App = () => {
    const items = [
        {
            id: 'lk2kj5',
            label: 'AeroSmith',
            content:
                '🌻 Remember, the light at the end of the tunnel may be you. 🌻',
        },
        {
            id: 'lk2kk5',
            label: 'Nirvana',
            content:
                '🎸 Wanting to be someone else is a waste of the person you are. 🎸',
        },
        {
            id: 'lk2kh5',
            label: 'The Doors',
            content:
                'The most important kind of freedom is to be what you really are',
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
