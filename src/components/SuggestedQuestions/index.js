import React from 'react';
import { SUGGESTED_QUESTIONS } from './questionsList';
import './styles.css';

const SuggestedQuestions = ({ onQuestionClick }) => {
    return (
        <div className="suggested-questions">
            <h3>Common Financial Questions</h3>
            <div className="questions-grid">
                {SUGGESTED_QUESTIONS.map((question, index) => (
                    <button
                        key={index}
                        onClick={() => onQuestionClick(question)}
                        className="question-chip"
                    >
                        {question}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SuggestedQuestions;