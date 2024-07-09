import React from 'react';

function Home() {
  return (
    <div>
      <section className="highlights">
        <div className="welcome">
          <h2>Community Highlights:</h2>
          <h3>Welcome to LoLProClub</h3>
          <p>
            We are the ultimate resource for League of Legends players. Our community offers comprehensive guides, real-time match analysis, and a platform to connect with other fans. Whether you're a newbie or a seasoned pro, LoLProClub has something for everyone. Join us and take your gameplay to the next level.
          </p>
          <button>Join Us</button>
        </div>
      </section>
      <section className="featured">
        <h2>Featured Section:</h2>
        <div className="news">
          <div className="news-item">
            <div className="news-image" />
            <p>Latest news</p>
          </div>
          <div className="news-item">
            <div className="news-image" />
            <p>Latest news</p>
          </div>
        </div>
      </section>
      <section className="community">
        <h2>Community highlights:</h2>
        <a href="#link1">Hyperlink</a>
        <a href="#link2">Hyperlink</a>
      </section>
    </div>
  );
}

export default Home;
