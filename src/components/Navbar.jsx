import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import {useLocation} from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  
  // scroll background effect
  useEffect(() => {
    if (!isHome) {
      // ✅ non-home pages → always maroon
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="Orion Logo" />
          <span>Orion</span>
        </div>

        {/* HAMBURGER (mobile) */}
        <div
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV ITEMS */}
        <ul className={`navbar-item ${menuOpen ? "open" : ""}`}>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/about">About</Link>
          </li>

          {/* TEAM DROPDOWN */}
          <li
  className="team-item"
  onMouseEnter={() => setTeamOpen(true)}
  onMouseLeave={() => setTeamOpen(false)}
>
  <span>
    Team ▾
  </span>

  <ul className={`dropdown-menu ${teamOpen ? "show" : ""}`}>
    <li>
      <Link to="/team/helios">Helios</Link>
    </li>
    <li>
      <Link to="/team/europa">Europa</Link>
    </li>
    <li>
      <Link to="/team/olympus">Olympus</Link>
    </li>
  </ul>
</li>

{/* SPONSORS */}
<li>
            <Link to="/sponsors">Sponsors</Link>
          </li>

          {/* JOIN US */}
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



