import React, { useState, useEffect, useContext } from 'react';
import './JoinUs.css';
import translations from '../language';

function JoinUs({ language }) {
  const lan = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rank: '',
    frequency: ''
  });

  const [clubData, setClubData] = useState({
    clubName: '',
    roles: {
      Top: false,
      Mid: false,
      Jungle: false,
      ADC: false,
      Support: false
    },
    clubFrequency: '',
    rankRange: { min: '', max: '' },
    additionalInfo: ''
  });

  const [clubs, setClubs] = useState([
    {
      name: 'Team Alpha',
      roles: ['ADC', 'Support'],
      rank: 'Platinum II',
      description: 'Looking for dedicated players to push ranks together.'
    },
    {
      name: 'Team Bravo',
      roles: ['Top', 'Jungle', 'Mid'],
      rank: 'Gold III',
      description: 'Casual team for weekly tournaments.'
    }
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCreatingClub, setIsCreatingClub] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [joinMessage, setJoinMessage] = useState('');

  useEffect(() => {
    if (isCreatingClub) {
      document.title = `${lan['joinUs.step']} ${currentStep} - ${lan['joinUs.createClub']}`;
    } else {
      document.title = lan['joinUs.pageTitle'];
    }
  }, [isCreatingClub, currentStep, lan]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (isCreatingClub) {
      if (name.startsWith('rankRange')) {
        const rankPart = name.split('.')[1];
        setClubData({ ...clubData, rankRange: { ...clubData.rankRange, [rankPart]: value } });
      } else if (name in clubData.roles) {
        setClubData({ ...clubData, roles: { ...clubData.roles, [name]: checked } });
      } else {
        setClubData({ ...clubData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const handleFinalSubmit = () => {
    alert(lan['joinUs.submit']);
    setFormData({ name: '', email: '', message: '', rank: '', frequency: '' });
    setIsSubmitted(false);
  };

  const handleClubSubmit = (event) => {
    event.preventDefault();
    if (currentStep === 3) {
      alert(lan['joinUs.createClubBtn']);
      setClubData({
        clubName: '',
        roles: {
          Top: false,
          Mid: false,
          Jungle: false,
          ADC: false,
          Support: false
        },
        clubFrequency: '',
        rankRange: { min: '', max: '' },
        additionalInfo: ''
      });
      setIsCreatingClub(false);
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const startCreatingClub = () => {
    setIsCreatingClub(true);
  };

  const handleJoinClick = (clubName) => {
    //setJoinMessage(`Join succeeded for ${clubName}`);
    alert(`Join succeeded for ${clubName}`);
  };

  return (
    <div className="join-us-page">
      <h2>{lan['joinUs.pageTitle']}</h2>
      <p>{lan['joinUs.joinInstructions']}</p>
      {!isCreatingClub ? (
        <>
          {!isSubmitted ? (
            <form className="join-us-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{lan['joinUs.name']}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{lan['joinUs.email']}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rank">{lan['joinUs.rank']}</label>
                <select
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  required
                >
                  <option value="">{lan['joinUs.selectRank']}</option>
                  <option value="Iron">Iron</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Master">Master</option>
                  <option value="Grandmaster">Grandmaster</option>
                  <option value="Challenger">Challenger</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="frequency">{lan['joinUs.frequency']}</label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">{lan['joinUs.selectFrequency']}</option>
                  <option value="Daily">Daily</option>
                  <option value="Several times a week">Several times a week</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Several times a month">Several times a month</option>
                  <option value="Rarely">Rarely</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{lan['joinUs.reason']}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">{lan['joinUs.submit']}</button>
            </form>
          ) : (
            <div className="confirmation">
              <h3>{lan['joinUs.confirmInfo']}</h3>
              <p><strong>{lan['joinUs.nameLabel']}</strong> {formData.name}</p>
              <p><strong>{lan['joinUs.emailLabel']}</strong> {formData.email}</p>
              <p><strong>{lan['joinUs.rankLabel']}</strong> {formData.rank}</p>
              <p><strong>{lan['joinUs.frequencyLabel']}</strong> {formData.frequency}</p>
              <p><strong>{lan['joinUs.reasonLabel']}</strong> {formData.message}</p>
              <button onClick={handleEdit}>{lan['joinUs.edit']}</button>
              <button onClick={handleFinalSubmit}>{lan['joinUs.finalSubmit']}</button>
            </div>
          )}
          <button className="create-club-btn" onClick={startCreatingClub}>{lan['joinUs.createClub']}</button>
        </>
      ) : (
        <div className="create-club-form">
          <h3>{lan['joinUs.createClub']}</h3>
          <div className="progress-indicator">
            <span className={currentStep >= 1 ? 'active' : ''}>{lan['joinUs.step']} 1</span>
            <span className={currentStep >= 2 ? 'active' : ''}>{lan['joinUs.step']} 2</span>
            <span className={currentStep >= 3 ? 'active' : ''}>{lan['joinUs.step']} 3</span>
          </div>
          <form onSubmit={handleClubSubmit}>
            {currentStep === 1 && (
              <div className="form-group">
                <label htmlFor="clubName">{lan['joinUs.clubName']}</label>
                <input
                  type="text"
                  id="clubName"
                  name="clubName"
                  value={clubData.clubName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {currentStep === 2 && (
              <>
                <div className="form-group">
                  <label>{lan['joinUs.rolesNeeded']}</label>
                  <div className="roles-checkboxes">
                    {Object.keys(clubData.roles).map(role => (
                      <div key={role}>
                        <label>
                          <input
                            type="checkbox"
                            name={role}
                            checked={clubData.roles[role]}
                            onChange={handleChange}
                          />
                          {role}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="clubFrequency">{lan['joinUs.frequencyOfPlay']}</label>
                  <select
                    id="clubFrequency"
                    name="clubFrequency"
                    value={clubData.clubFrequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{lan['joinUs.selectFrequency']}</option>
                    <option value="Daily">Daily</option>
                    <option value="Several times a week">Several times a week</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Several times a month">Several times a month</option>
                    <option value="Rarely">Rarely</option>
                  </select>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="form-group">
                  <label htmlFor="rankRange.min">{lan['joinUs.minRank']}</label>
                  <select
                    id="rankRange.min"
                    name="rankRange.min"
                    value={clubData.rankRange.min}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{lan['joinUs.selectRank']}</option>
                    <option value="Iron">Iron</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Master">Master</option>
                    <option value="Grandmaster">Grandmaster</option>
                    <option value="Challenger">Challenger</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="rankRange.max">{lan['joinUs.maxRank']}</label>
                  <select
                    id="rankRange.max"
                    name="rankRange.max"
                    value={clubData.rankRange.max}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{lan['joinUs.selectRank']}</option>
                    <option value="Iron">Iron</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Master">Master</option>
                    <option value="Grandmaster">Grandmaster</option>
                    <option value="Challenger">Challenger</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="additionalInfo">{lan['joinUs.additionalInfo']}</label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={clubData.additionalInfo}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </>
            )}
            <div className="form-buttons">
              {currentStep > 1 && <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>{lan['joinUs.back']}</button>}
              <button type="submit">{currentStep === 3 ? lan['joinUs.createClubBtn'] : lan['joinUs.next']}</button>
            </div>
          </form>
        </div>
      )}

          <h3>{lan['joinUs.availableClubs']}</h3>
          <div className="club-list">
                  {clubs.map((club, index) => (
                    <div key={index} className="club-card">
                      <h4>{club.name}</h4>
                      <p><strong>{lan['joinUs.rolesNeeded']}</strong> {club.roles.join(', ')}</p>
                      <p><strong>{lan['joinUs.rank']}</strong> {club.rank}</p>
                      <p><strong>{lan['joinUs.description']}</strong> {club.description}</p>
                      <button onClick={() => handleJoinClick(club.name)} >{lan['joinUs.join']}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinUs;
