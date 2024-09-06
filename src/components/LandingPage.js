import React, { useState } from 'react';
import AuthPage from './AuthPage';
import './LandingPage.css';

function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);

  const handleContactClick = () => {
    setShowAuth(true);
  };

  return (
    <>
      {showAuth ? (
        <AuthPage />
      ) : (
        <div className="landing-container">
          <h1 className="title">NSS College of Engineering, Palakkad</h1>
          <h2 className="subtitle">College Grievance Management System</h2>
          <p className="description">
            Welcome to the College Grievance Management System of NSS College of Engineering, Palakkad.
            This platform is designed to help students, faculty, and staff to raise and track grievances
            efficiently. Please use the system to submit your concerns, and our team will address them
            promptly.
          </p>
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}

export default LandingPage;
