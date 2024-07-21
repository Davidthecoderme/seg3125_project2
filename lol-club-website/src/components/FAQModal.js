import React, { useState } from 'react';
import './FAQModal.css';
import translations from '../language';

const FAQModal = ({ onClose, language }) => {
  const lan = translations[language];
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [questions, setQuestions] = useState([
    { question: lan['faq.q1'], answer: lan['faq.a1'] },
    { question: lan['faq.q2'], answer: lan['faq.a2'] },
    { question: lan['faq.q3'], answer: lan['faq.a3'] }
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionClick = (index) => {
    setExpandedQuestion(index === expandedQuestion ? null : index);
  };

  const handleNewQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleNewQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, { question: newQuestion, answer: lan['faq.newAnswerPlaceholder'] }]);
      setNewQuestion('');
    }
  };

  return (
    <div className="faq-modal">
      <div className="faq-modal-content">
        <span className="faq-close" onClick={onClose}>&times;</span>
        <h2>{lan['faq.title']}</h2>
        <div className="faq-content">
          {questions.map((item, index) => (
            <div key={index}>
              <h3 onClick={() => handleQuestionClick(index)}>{item.question}</h3>
              {expandedQuestion === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
        <div className="faq-form">
          <h3>{lan['faq.askQuestion']}</h3>
          <form onSubmit={handleNewQuestionSubmit}>
            <input
              type="text"
              value={newQuestion}
              onChange={handleNewQuestionChange}
              placeholder={lan['faq.newQuestionPlaceholder']}
              aria-label={lan['faq.newQuestionPlaceholder']}
            />
            <button type="submit">{lan['faq.submitQuestion']}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
