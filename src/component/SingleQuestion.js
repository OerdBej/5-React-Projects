import React, { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
    // the variable is just a pattern to check. Active is going to be true if id is equal to activeId.
    // In the beggining everything gonna be false because activeID is null
    const isActive = id === activeId;

    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button
                    className='question-btn'
                    onClick={() => toggleQuestion(id)}>
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    click
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    );
};

export default SingleQuestion;
