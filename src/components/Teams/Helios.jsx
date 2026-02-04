import React from "react";
import Card from "../Card.jsx";
import "../Olympus.css"; // common team.css / olympus.css (same background)

export default function Helios() {
  return (
    <div className="olympus-page">

      <h1>Helios Team</h1>

      <Card
        title="About Helios"
        desc="The Helios team is a multidisciplinary group of business and engineering students developing a commercially viable satellite servicing mission, competing in the UKSEDS ISAM challenge."
        className="olympus"
      />

      <Card className="olympus">
        <h3>What We Do</h3>
        <ul>
          <li>Design an advanced satellite servicing module</li>
          <li>Enable in-orbit docking and servicing</li>
          <li>Address space debris mitigation</li>
          <li>Develop a Dragon’s Den–style business proposal</li>
        </ul>
      </Card>

      <Card className="olympus">
        <h3>Current Progress</h3>
        <p>
          The team has successfully completed and presented an initial business
          proposal outlining a clear value proposition, market opportunity, and
          technical feasibility. Work is now underway on a fully detailed
          mission plan and commercial analysis.
        </p>
      </Card>

    </div>
  );
}

  