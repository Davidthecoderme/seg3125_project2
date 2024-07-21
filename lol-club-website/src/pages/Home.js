import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import clubImage from '../photos/club-image.png'; 
import news1 from '../photos/news1.png'; 
import news2 from '../photos/news2.png';
import news3 from '../photos/news3.png';
import translations from '../language';

function Home({ language }) {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate('/join');
  };

  const handleNewsClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main>
      <section className="highlights">
        <div className="welcome">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>{translations[language]['home.welcome']}</h1>
              <p>{translations[language]['home.description']}</p>
              <button onClick={handleJoinUsClick}>{translations[language]['home.joinUsButton']}</button>
            </div>
            <div className="welcome-image">
              <img src={clubImage} alt="Club members in action" />
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <h2>{translations[language]['home.featuredNews']}</h2>
        <div className="news">
          <article className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=xdfVomq3lAc')}>
            <img src={news1} alt="Faker Documentary" />
            <div className="news-card-content">
              <p className="news-card-category">Esports | Last Month</p>
              <h3>{translations[language]['home.fakerDoc']}</h3>
              <p>{translations[language]['home.fakerDocDesc']}</p>
            </div>
          </article>
          <article className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=6zOUaLKqwaA')}>
            <img src={news2} alt="Dev Update" />
            <div className="news-card-content">
              <p className="news-card-category">Dev | Last Month</p>
              <h3>{translations[language]['home.devUpdate']}</h3>
              <p>{translations[language]['home.devUpdateDesc']}</p>
            </div>
          </article>
          <article className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=ErlPtDVj8EQ')}>
            <img src={news3} alt="Patch Notes" />
            <div className="news-card-content">
              <p className="news-card-category">{translations[language]['home.gameUpdates']}</p>
              <h3>{translations[language]['home.patchNotes']}</h3>
              <p>{translations[language]['home.patchNotesDesc']}</p>
            </div>
          </article>
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
              title="Highlight Video 1"
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
              title="Highlight Video 2"
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
              title="Highlight Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{translations[language]['home.highlightVideoP3']}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
