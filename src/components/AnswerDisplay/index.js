import React from 'react';
import './styles.css';

const AnswerDisplay = ({ answer, isLoading }) => {
    if (!answer && !isLoading) return null;

    return (
        <div className="answer-container">
            <h3>Answer</h3>
            <div className="answer-content">
                {
                    isLoading ? (
                        <div className="loading-spinner">Loading...</div>
                    ) : (
                        <p className='answer'>{answer}</p>
                    )
                }
            </div>
        </div>
    );
};

export default AnswerDisplay;