// src/pages/Olympus.jsx
import React from "react";
import "./team.css"; // CSS file jisme dark/red-blue theme ho

export default function Olympus() {
  return (
    <div className="page-offset">
      <h1>Olympus Team</h1>

      {/* Full team photo */}
      <div className="team-photo">
        <img src="/images/olympus-team.jpg" alt="Olympus Team" />
      </div>

      {/* About the team */}
      <div className="team-about about-text">
        <p>
          Olympus is a 10-person rover team designing a 5kg rover to fit into a 0.03m³ volume envelope. 
          The rover is equipped with navigation sensors, cameras, and a robotic device for collecting geological samples.
        </p>
        <p>The team faces several technical challenges:</p>
        <ul>
          <li>Live communication with no line of sight to the rover</li>
          <li>Sample collection at various points of interest around the course</li>
          <li>Surviving vibration testing</li>
        </ul>

        <h3>Team Structure</h3>
        <p>The Olympus team is split into Mechanical, Electronics, and Mechatronics sub-teams.</p>

        <h3>Mission & Goals</h3>
        <p>
          Project ORION aims to provide students with practical experience in rover design and space engineering. 
          Members get hands-on exposure by working in sub-teams, presenting proposals, and participating in rover challenges.
        </p>
      </div>

      {/* Button linking to detailed page */}
      <div className="team-action">
        <button
          className="team-button"
          onClick={() => window.location.href="/olympus-details"}
        >
          Learn More About Olympus
        </button>
      </div>
    </div>
  );
}
