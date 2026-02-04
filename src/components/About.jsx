import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

import "./Olympus.css"; // path apne project ke hisaab se

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="olympus-page about-page">

      <h1 className="page-title">About Project ORION</h1>

      <p className="page-desc about-intro">
        Project ORION was founded to provide students with the knowledge and skills
        needed to succeed in the fast-growing space engineering industry. With the
        rise of domestic space technology companies, there is a constant demand for
        talented engineers who are passionate about space.
        <br /><br />
        We foster an environment where members challenge themselves, improve their
        skills, and tackle real engineering problems — from chairing meetings and
        working in specialised sub-teams to building rovers and presenting project
        proposals at national competitions.
      </p>

      <h2 className="section-title">Our Mission</h2>
      <p className="page-desc about-mission">
        Equipping students to lead the future of space technology through practical,
        collaborative, and industry-focused engineering experience.
      </p>

      <h2 className="section-title">Our Teams</h2>

      <div className="about-grid">
        <Card className="olympus"
          title="Olympus"
          desc="Designing a 5kg rover for the UKSEDS Olympus Rover Trials with advanced navigation sensors, cameras, and geological sampling tools."
        >
          <button
            className="about-btn"
            onClick={() => navigate("/Teams/Olympus")}
          >
            View Olympus
          </button>
        </Card>

        <Card className="olympus"
          title="Helios"
          desc="A multidisciplinary team developing a commercially viable satellite servicing module with docking, in-orbit servicing and debris mitigation."
        >
          <button
            className="about-btn"
            onClick={() => navigate("/Teams/Helios")}
          >
            View Helios
          </button>
        </Card>

        <Card className="olympus"
          title="Europa"
          desc="Our largest rover team, building an autonomous system capable of navigating terrain, collecting samples and manipulating control panels."
        >
          <button
            className="about-btn"
            onClick={() => navigate("/Teams/Europa")}
          >
            View Europa
          </button>
        </Card>
      </div>

    </div>
  );
}
