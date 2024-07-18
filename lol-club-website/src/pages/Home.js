import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import clubImage from '../photos/club-image.png'; // Ensure this path is correct
import news1 from '../photos/news1.png'; // Ensure these paths are correct
import news2 from '../photos/news2.png';
import news3 from '../photos/news3.png';

function Home() {
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
              <h3>Welcome to LoLProClub</h3>
              <p>
                We are the ultimate resource for League of Legends players. Our community offers comprehensive guides, real-time match analysis, and a platform to connect with other fans. Whether you're a newbie or a seasoned pro, LoLProClub has something for everyone. Join us and take your gameplay to the next level.
              </p>
              <button onClick={handleJoinUsClick}>Join Us</button>
            </div>
            <div className="welcome-image">
              <img src={clubImage} alt="Club" />
            </div>
          </div>
        </div>
      </section>
      <section className="featured">
        <h2>Featured News</h2>
        <div className="news">
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=xdfVomq3lAc')}>
            <img src={news1} alt="News 1" />
            <div className="news-card-content">
              <p className="news-card-category">Esports | Last Month</p>
              <h3>Hall of Legends: Faker</h3>
              <p>Watch the full documentary on Faker, celebrating his unbelievable and unfinished career.</p>
            </div>
          </div>
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=6zOUaLKqwaA')}>
            <img src={news2} alt="News 2" />
            <div className="news-card-content">
              <p className="news-card-category">Dev | Last Month</p>
              <h3>Dev Update: Gameplay, Esports & Arcane</h3>
              <p>Updates on champions, mastery, Vanguard, esports, Arcane, and a teaser for season two.</p>
            </div>
          </div>
          <div className="news-card" onClick={() => handleNewsClick('https://www.youtube.com/watch?v=ErlPtDVj8EQ')}>
            <img src={news3} alt="News 3" />
            <div className="news-card-content">
              <p className="news-card-category">Game Updates | 3 Weeks Ago</p>
              <h3>LoL Patch 14.14 Notes</h3>
              <p>Patch 14.14 is making a splash.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="community">
        <h2>Community Highlights</h2>
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
          <p>Highlight Video 1</p>
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
          <p>Highlight Video 2</p>
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
          <p>Highlight Video 3</p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
