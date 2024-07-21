import React, { useState } from 'react';
import './Champions.css';
import championsData from '../data/championsData';
import translations from '../language';

function Champions({ language}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const filteredChampions = championsData[language].filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRole === '' || champion.role === selectedRole)
  );

  return (
    <div className="champions-page">
      <h2>{ translations[language]['champions.pageTitle']}</h2>
      <div className="filters">
        <input
          type="text"
          placeholder={ translations[language]['champions.searchPlaceholder']}
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={selectedRole} onChange={handleRoleChange} className="role-select">
          <option value="">{ translations[language]['champions.allRoles']}</option>
          <option value="Top">{ translations[language]['champions.top']}</option>
          <option value="Mid">{ translations[language]['champions.mid']}</option>
          <option value="Jungle">{ translations[language]['champions.jungle']}</option>
          <option value="ADC">{ translations[language]['champions.adc']}</option>
          <option value="Support">{ translations[language]['champions.support']}</option>
        </select>
      </div>
      <div className="champions-list">
        {filteredChampions.map((champion, index) => (
          <div key={index} className="champion-card">
            <img src={champion.image} alt={champion.name} className="champion-image" />
            <h3>{champion.name}</h3>
            <p>{champion.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Champions;
