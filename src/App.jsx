import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Sponsors from "./components/Sponsors";
import JoinUs from "./components/JoinUs";
import Team from "./components/Teams/Teams";
import Helios from "./components/Teams/Helios";
import Europa from "./components/Teams/Europa";
import Olympus from "./components/Teams/Olympus";

function App() {
  

  return (
    <Router>
      <Navbar />

      {/* ✅ THIS DIV FIXES EVERYTHING */}
      <div className="page-offset">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />}>
            <Route path="helios" element={<Helios />} />
            <Route path="europa" element={<Europa />} />
            <Route path="olympus" element={<Olympus />} />
          </Route>
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;

