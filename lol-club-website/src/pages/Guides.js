import React from 'react';
import './Guides.css';

function Guides() {
  return (
    <div>
      <section className="guide-categories">
        <h2>Guide Categories:</h2>
        <div>
          <input type="checkbox" id="champion-guides" name="champion-guides" />
          <label htmlFor="champion-guides"> Champion guides</label>
        </div>
        <div>
          <input type="checkbox" id="inventory-guides" name="inventory-guides" />
          <label htmlFor="inventory-guides"> inventory guides</label>
        </div>
        <div>
          <input type="checkbox" id="beginners-tips" name="beginners-tips" />
          <label htmlFor="beginners-tips"> Beginner's tips</label>
        </div>
      </section>
      <section className="guide-content">
        <h2>Guide Content:</h2>
        <p>How to play this champion, and how to choose items for this champion</p>
        <button className="video-link">VIDEO Link</button>
      </section>
    </div>
  );
}

export default Guides;
