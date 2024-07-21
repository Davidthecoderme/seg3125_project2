import React, { useState } from 'react';
import './Community.css';
import translations from '../language';

const quizQuestions = [
  {
    question: 'What is the name of the region where Jhin comes from?',
    options: ['Noxus', 'Ionia', 'Demacia', 'Piltover'],
    answer: 'Ionia',
  },
  {
    question: 'Which champion is known as "The Sinister Blade"?',
    options: ['Ahri', 'Katarina', 'LeBlanc', 'Morgana'],
    answer: 'Katarina',
  },
  {
    question: 'What role does Thresh primarily play?',
    options: ['Top', 'Mid', 'Jungle', 'Support'],
    answer: 'Support',
  },
];

const leaderboardData = [
  { name: 'SummonerX', points: 150 },
  { name: 'DragonMaster', points: 140 },
  { name: 'BladeRunner', points: 135 },
  { name: 'MysticMage', points: 120 },
  { name: 'ShadowHunter', points: 80 },
];

function Community({ language }) {
  const lan = translations[language];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');

  const handleAnswerOptionClick = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setShowQuiz(false);
    setShowEmailInput(false);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitEmail = () => {
    alert('Thank you! Your gift card will be sent to your email.');
    setShowEmailInput(false);
    handleRetakeQuiz();
  };

  return (
    <div className="community-page">
      <h2 className="page-title">{lan['community.pageTitle']}</h2>

      <section className="champion-spotlight">
        <h3>{lan['community.championSpotlight']}</h3>
        <p>{lan['community.thisWeekAhri']}</p>
        <a href="https://www.mobafire.com/league-of-legends/champion/ahri-89" target="_blank" rel="noopener noreferrer">{lan['community.ahriGuide']}</a>
      </section>

      <section className="community-tournaments">
        <h3>{lan['community.communityTournaments']}</h3>
        <p>{lan['community.joinTournaments']}</p>
        <a href="https://battlefy.com/" target="_blank" rel="noopener noreferrer">{lan['community.registerHere']}</a>
      </section>

      <section className="player-of-the-month">
        <h3>{lan['community.playerOfTheMonth']}</h3>
        <p>{lan['community.congratsPlayer']}</p>
      </section>

      <section>
        <h3>{lan['community.eventCalendar']}</h3>
        <div className="event-calendar">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=davidjun556%40gmail.com&ctz=America%2FToronto"
            title="Event Calendar"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>

      <section className="leaderboard">
        <h3>{lan['community.leaderboard']}</h3>
        <p>{lan['community.topCommunity']}</p>
        <ul>
          {leaderboardData.map((player, index) => (
            <li key={index}>
              {index + 1}. {player.name} - {player.points} points
            </li>
          ))}
        </ul>
      </section>

      <section className="patch-notes-highlights">
        <h3>{lan['community.patchNotesHighlights']}</h3>
        <p>{lan['community.latestPatchUpdates']}</p>
        <a href="https://na.leagueoflegends.com/en-us/news/game-updates/" target="_blank" rel="noopener noreferrer">{lan['community.patchNotes']}</a>
      </section>

      <section className="streamer-spotlight">
        <h3>{lan['community.streamerSpotlight']}</h3>
        <p>{lan['community.featuredStreamers']}</p>
        <a href="https://www.twitch.tv/directory/game/League%20of%20Legends" target="_blank" rel="noopener noreferrer">{lan['community.twitch']}</a>
      </section>

      <section className="weekly-challenges">
        <h3>{lan['community.weeklyChallenges']}</h3>
        <p>{lan['community.completeChallenges']}</p>
        <button onClick={handleStartQuiz}>{lan['community.startQuiz']}</button>
        {showQuiz && (
          <div className="quiz-modal">
            <div className="quiz-content">
              {!showResults ? (
                <>
                  <div className="quiz-question">
                    <h4>{quizQuestions[currentQuestion].question}</h4>
                  </div>
                  <div className="quiz-options">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="quiz-results">
                    <h4>{lan['community.yourResults']}</h4>
                    <p>
                      You got {userAnswers.filter((answer, index) => answer === quizQuestions[index].answer).length} out of {quizQuestions.length} correct.
                    </p>
                    {userAnswers.filter((answer, index) => answer === quizQuestions[index].answer).length === quizQuestions.length ? (
                      <>
                        <p>{lan['community.congratulations']}</p>
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder={lan['community.enterEmail']}
                        />
                        <button onClick={handleSubmitEmail}>{lan['community.submit']}</button>
                      </>
                    ) : (
                      <p>{lan['community.goodLuckNextTime']}</p>
                    )}
                  </div>
                  <button onClick={handleRetakeQuiz}>{lan['community.retakeQuiz']}</button>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Community;
