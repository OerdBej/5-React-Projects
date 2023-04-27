import React from 'react';
import data from './data';
import { useState } from 'react';
import Questions from './component/Questions';

const App = () => {
    const [questions, setQuestions] = useState(data);

    //we start at null for the toggle by the id
    const [activeId, setActiveId] = useState(null);

    const toggleQuestion = (id) => {
        const newActiveId = id === activeId ? null : id;
        setActiveId(newActiveId);
    };
    return (
        <main>
            <Questions
                questions={questions}
                activeId={activeId}
                toggleQuestion={toggleQuestion}
            />
        </main>
    );
};

export default App;
