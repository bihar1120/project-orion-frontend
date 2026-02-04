import { useState } from "react";
import "./JobApply.css";

function JobApply() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cv) {
      alert("Please upload your CV (PDF)");
      return;
    }

    const formData = new FormData();
    formData.append("coverLetter", coverLetter);
    formData.append("cv", cv);
    formData.append("email", email);
    formData.append("name", name);

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/apply`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");
      setName("");
      setEmail("");
      setCoverLetter("");
      setCv(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-apply">
      <h2>Apply for Internship</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Cover Letter</label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          required
        />

        <label>Upload CV (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setCv(e.target.files[0])}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Apply"}
        </button>
      </form>
    </div>
  );
}

export default JobApply;
