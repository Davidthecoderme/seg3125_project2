import React, { useState, useEffect } from 'react';
import './JoinUs.css';

function JoinUs() {
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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCreatingClub, setIsCreatingClub] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (isCreatingClub) {
      document.title = `Step ${currentStep} - Create Your Club`;
    } else {
      document.title = 'Join Us';
    }
  }, [isCreatingClub, currentStep]);

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
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '', rank: '', frequency: '' });
    setIsSubmitted(false);
  };

  const handleClubSubmit = (event) => {
    event.preventDefault();
    if (currentStep === 3) {
      alert('Club created successfully!');
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

  return (
    <div className="join-us-page">
      <h2>Join Us Page</h2>
      <p>Information on how to join goes here...</p>
      {!isCreatingClub ? (
        <>
          {!isSubmitted ? (
            <form className="join-us-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
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
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="rank">Current Rank:</label>
                <select
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your rank</option>
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
                <label htmlFor="frequency">How often do you play LoL?</label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Several times a week">Several times a week</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Several times a month">Several times a month</option>
                  <option value="Rarely">Rarely</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Why do you want to join us?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="confirmation">
              <h3>Confirm Your Information</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Current Rank:</strong> {formData.rank}</p>
              <p><strong>How often do you play LoL?:</strong> {formData.frequency}</p>
              <p><strong>Why do you want to join us?:</strong> {formData.message}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleFinalSubmit}>Confirm and Submit</button>
            </div>
          )}
          <button className="create-club-btn" onClick={startCreatingClub}>Create Your Own Club</button>
        </>
      ) : (
        <div className="create-club-form">
          <h3>Create Your Own Club</h3>
          <div className="progress-indicator">
            <span className={currentStep >= 1 ? 'active' : ''}>Step 1</span>
            <span className={currentStep >= 2 ? 'active' : ''}>Step 2</span>
            <span className={currentStep >= 3 ? 'active' : ''}>Step 3</span>
          </div>
          <form onSubmit={handleClubSubmit}>
            {currentStep === 1 && (
              <div className="form-group">
                <label htmlFor="clubName">Club Name:</label>
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
                  <label>Roles Needed:</label>
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
                  <label htmlFor="clubFrequency">Frequency of Play:</label>
                  <select
                    id="clubFrequency"
                    name="clubFrequency"
                    value={clubData.clubFrequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select frequency</option>
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
                  <label htmlFor="rankRange.min">Minimum Rank:</label>
                  <select
                    id="rankRange.min"
                    name="rankRange.min"
                    value={clubData.rankRange.min}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select rank</option>
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
                  <label htmlFor="rankRange.max">Maximum Rank:</label>
                  <select
                    id="rankRange.max"
                    name="rankRange.max"
                    value={clubData.rankRange.max}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select rank</option>
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
                  <label htmlFor="additionalInfo">Additional Information:</label>
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
              {currentStep > 1 && <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
              <button type="submit">{currentStep === 3 ? 'Create Club' : 'Next'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default JoinUs;
