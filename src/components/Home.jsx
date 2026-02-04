import { useState, useEffect } from "react";
import "./Home.css";
import teamImage from "../assets/team-image.jpg";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";

function Home() {
  const [backendMsg, setBackendMsg] = useState("Loading backend status...");

  useEffect(() => {
    // Screenshot ke mutabik naya URL ye hai:
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://project-orion-blti.onrender.com';
    
    fetch(`${apiUrl}/api/message`)
      .then(res => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`); 
        return res.json();
      })
      .then(data => {
        setBackendMsg(data.msg);
      })
      .catch(err => {
        console.error("Dikkat hai:", err.message);
        setBackendMsg("Backend se connection nahi ho paya (URL check karein)");
      });
  }, []);

  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={teamImage} alt="ORION Team" className="hero-image" />
          <div className="hero-text">
            <h1>PROJECT ORION</h1>
            <p>Student-led engineering project at the University of Leeds</p>
            {/* Backend message display */}
            <div className="backend-status" style={{ marginTop: '15px', fontWeight: 'bold' }}>
              <p>Status: {backendMsg}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About ORION</h2>
        <p>
          Project ORION is a multidisciplinary student engineering initiative
          focused on innovation, teamwork, and real-world impact.
        </p>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default Home;

