import React, { useState } from 'react';
import './Guides.css';
import guidesChampData from '../data/guidesChampData';
import translations from '../language';

function Guides({ language }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const lan = translations[language];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const filteredGuides = guidesChampData[language].filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || guide.category === selectedCategory) &&
    (selectedRole === '' || guide.role === selectedRole) &&
    (selectedDifficulty === '' || guide.difficulty === selectedDifficulty)
  );

  return (
    <div className="guides-page">
      <h2>{lan['guides.pageTitle']}</h2>
      <div className="filters">
        <input
          type="text"
          placeholder={lan['guides.searchPlaceholder']}
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          <option value="">{lan['guides.allCategories']}</option>
          <option value="Champion guides">{lan['guides.championGuides']}</option>
          <option value="Inventory guides">{lan['guides.inventoryGuides']}</option>
          <option value="Beginner's tips">{lan['guides.beginnerTips']}</option>
        </select>
        <select value={selectedRole} onChange={handleRoleChange} className="role-select">
          <option value="">{lan['guides.allRoles']}</option>
          <option value="Top">{lan['champions.top']}</option>
          <option value="Mid">{lan['champions.mid']}</option>
          <option value="Jungle">{lan['champions.jungle']}</option>
          <option value="ADC">{lan['champions.adc']}</option>
          <option value="Support">{lan['champions.support']}</option>
        </select>
        <select value={selectedDifficulty} onChange={handleDifficultyChange} className="difficulty-select">
          <option value="">{lan['guides.allDifficultyLevels']}</option>
          <option value="Beginner">{lan['guides.beginner']}</option>
          <option value="Intermediate">{lan['guides.intermediate']}</option>
          <option value="Advanced">{lan['guides.advanced']}</option>
        </select>
      </div>
      <div className="guides-list">
        {filteredGuides.map((guide, index) => (
          <div key={index} className="guide-card">
            <h3>{guide.title}</h3>
            <p>{guide.category}</p>
            <p>{guide.content}</p>
            <iframe
              src={guide.video}
              title={guide.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guides;
