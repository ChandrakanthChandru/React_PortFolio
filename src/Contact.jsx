// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import Plasma from "./react-bits/Plasma";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://portfolio-backend-bay-six.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-root">

      {/* 🔥 Plasma Background */}
      <div className="plasma-bg">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* 📩 Contact Card */}
      <div className="contact-container">
        <h2>Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}
        </form>

        {/* 🔗 Social Links */}
        <div className="contact-links">
          <a href="https://github.com/ChandrakanthChandru" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/chandrakanthchandru2004k/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/_chandrakanth_chandru_" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="mailto:chandruchandrakanth2004@gmail.com">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
