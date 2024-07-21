import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import clubImage from '../photos/club-image.png'; 
import news1 from '../photos/news1.png'; 
import news2 from '../photos/news2.png';
import news3 from '../photos/news3.png';

import translations from '../language';

function Home({ language}) {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate('/join');
  };

  const handleNewsClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <section className="highlights">
        <div className="welcome">
          <div className="welcome-content">
            <div className="welcome-text">
              <h3>{translations[language]['home.welcome']}</h3>
              <p>{translations[language]['home.description']}</p>
              <button onClick={handleJoinUsClick}>{translations[language]['home.joinUsButton']}</button>
            </div>
            <div className="welcome-image">
              <img src={clubImage} alt="Club" />
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <h2>{translations[language]['home.featuredNews']}</h2>
        <div className="news">
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=xdfVomq3lAc')}>
            <img src={news1} alt="News 1" />
            <div className="news-card-content">
              <p className="news-card-category">Esports | Last Month</p>
              <h3>{translations[language]['home.fakerDoc']}</h3>
              <p>{translations[language]['home.fakerDocDesc']}</p>
            </div>
          </div>
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=6zOUaLKqwaA')}>
            <img src={news2} alt="News 2" />
            <div className="news-card-content">
              <p className="news-card-category">Dev | Last Month</p>
              <h3>{translations[language]['home.devUpdate']}</h3>
              <p>{translations[language]['home.devUpdateDesc']}</p>
            </div>
          </div>
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=ErlPtDVj8EQ')}>
            <img src={news3} alt="News 3" />
            <div className="news-card-content">
              <p className="news-card-category">{translations[language]['home.gameUpdates']}</p>
              <h3>{translations[language]['home.patchNotes']}</h3>
              <p>{translations[language]['home.patchNotesDesc']}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="community">
        <h2>{translations[language]['home.communityHighlights']}</h2>
        <div className='video-container'>
          <div className="video-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/V0wQmBPB8dk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{translations[language]['home.highlightVideoP1']}</p>
          </div>
          <div className="video-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9YS9mgoKKXs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{translations[language]['home.highlightVideoP2']}</p>
          </div>
          <div className="video-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dl7WBWAJGWg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{translations[language]['home.highlightVideoP3']}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
