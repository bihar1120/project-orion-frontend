import "./Home.css";
import teamImage from "../assets/team-image.jpg";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx"
function Home() {
  const [backendMsg, setBackendMsg] = useState("");
  useEffect(() => {
    // Fetch from backend
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/message`)
      .then(res => res.json())
      .then(data => setBackendMsg(data.msg))
      .catch(err => console.error(err)); // optional, always good to handle errors
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

      {/* Contact only on Home */}
      <Contact />
    </div>
  );
}

export default Home;

