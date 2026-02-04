import React from "react";
import Card from "../Card.jsx";
import "../Olympus.css"; // common team.css / olympus.css

export default function Europa() {
  return (
    <div className="olympus-page">

      <h1>Europa Rover Team</h1>

      <Card
        title="About Europa"
        desc="Europa is Project ORION’s largest team, designing and building a highly capable autonomous rover to compete in the European Rover Challenge."
        className="olympus"
      />

      <Card className="olympus">
        <h3>Rover Capabilities</h3>
        <ul>
          <li>Autonomous navigation across rough terrain</li>
          <li>Sample collection using a drilling system</li>
          <li>Regolith handling and storage</li>
          <li>Dexterous manipulation of control panels</li>
        </ul>
      </Card>

      <Card className="olympus">
        <h3>Team Structure</h3>
        <p>
          The Europa team is organised into multiple sub-teams focusing on
          mechanical design, electronics, software, autonomy, and systems
          integration, working together on a rover approximately 1.2–1.5m³ in
          size.
        </p>
      </Card>

    </div>
  );
}
