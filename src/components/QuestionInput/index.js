import React from 'react';
import './styles.css';

const QuestionInput = ({ question, setQuestion, handleGetAnswer, isLoading }) => {
    return (
        <div className="question-input-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your financial question here..."
                    className="question-input"
                />
                <button
                    onClick={handleGetAnswer}
                    disabled={isLoading || !question.trim()}
                    className="submit-button"
                >
                    {isLoading ? 'Getting Answer...' : 'Get Answer'}
                </button>
            </div>
        </div>
    );
};

export default QuestionInput;