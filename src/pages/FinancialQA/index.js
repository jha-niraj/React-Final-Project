import React, { useState } from 'react';
import QuestionInput from '../../components/QuestionInput';
import SuggestedQuestions from '../../components/SuggestedQuestions';
import AnswerDisplay from '../../components/AnswerDisplay';
import { getGeminiAnswer } from '../../services/geminiService';
import './styles.css';

const FinancialQA = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetAnswer = async () => {
        if (!question.trim()) return;

        setIsLoading(true);
        try {
            const response = await getGeminiAnswer(question);
            setAnswer(response);
        } catch (error) {
            console.error('Error getting answer:', error);
            setAnswer('Sorry, there was an error getting your answer. Please try again.');
        }
        setIsLoading(false);
    };
    const handleQuestionClick = (suggestedQuestion) => {
        setQuestion(suggestedQuestion);
    };

    return (
        <div className="financial-qa-container">
            <div className="header">
                <h1>Financial Assistant</h1>
                <p>Get expert answers to your financial questions</p>
            </div>
            <QuestionInput
                question={question}
                setQuestion={setQuestion}
                handleGetAnswer={handleGetAnswer}
                isLoading={isLoading}
            />
            <AnswerDisplay
                answer={answer}
                isLoading={isLoading}
            />
            <SuggestedQuestions onQuestionClick={handleQuestionClick} />
        </div>
    );
};

export default FinancialQA;