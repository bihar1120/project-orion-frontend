import JobApply from "./JobApply";
import "./Olympus.css";

function JoinUs() {
  
  return (
    <div className="olympus-page">

      <h1 className="page-title">Join Us</h1>

      <p className="page-desc">
        The recruitment cycle is starting in October during the Welcome Week,
        and a second round is in January, around the end of exam period.
        <br /><br />
        Further announcements and links to registration quiz are on our social media channels!
      </p>

      <JobApply />

    </div>
  );
}

export default JoinUs;

