import React from 'react';
import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    // loop from all data props
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        console.log(isExpanded);

        return (
            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        );
    });
    return <div>{renderedItems}</div>;
};

export default Accordion;
