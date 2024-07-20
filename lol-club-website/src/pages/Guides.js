import React, { useState } from 'react';
import './Guides.css';
import guidesChampData from './guidesChampData';

function Guides() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

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

  const filteredGuides = guidesChampData.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || guide.category === selectedCategory) &&
    (selectedRole === '' || guide.role === selectedRole) &&
    (selectedDifficulty === '' || guide.difficulty === selectedDifficulty)
  );

  return (
    <div className="guides-page">
      <h2>Guides Page</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search guides..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          <option value="">All Categories</option>
          <option value="Champion guides">Champion guides</option>
          <option value="Inventory guides">Inventory guides</option>
          <option value="Beginner's tips">Beginner's tips</option>
        </select>
        <select value={selectedRole} onChange={handleRoleChange} className="role-select">
          <option value="">All Roles</option>
          <option value="Top">Top</option>
          <option value="Mid">Mid</option>
          <option value="Jungle">Jungle</option>
          <option value="ADC">ADC</option>
          <option value="Support">Support</option>
        </select>
        <select value={selectedDifficulty} onChange={handleDifficultyChange} className="difficulty-select">
          <option value="">All Difficulty Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
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
