import React from "react";
import Card from "../Card.jsx";
import "../Olympus.css";

export default function Olympus() {
  return (
    <div className="olympus-page">

      <h1>Olympus Rover Team</h1>

      <Card
        title="About Olympus"
        desc="Olympus is a 10-person rover team designing a 5kg rover for the UKSEDS Olympus Rover Trials."
        className="olympus"
      />

      <Card className="olympus">
        <h3>Technical Challenges</h3>
        <ul>
          <li>Live communication with no line of sight</li>
          <li>Autonomous navigation</li>
          <li>Geological sample collection</li>
          <li>Vibration testing</li>
        </ul>
      </Card>

    </div>
  );
}
