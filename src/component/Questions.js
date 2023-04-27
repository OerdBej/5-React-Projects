import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
    return (
        <section className='container'>
            <h1>Questions</h1>
            {/* iterate through props */}

            {questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />;
            })}
        </section>
    );
};

export default Questions;
