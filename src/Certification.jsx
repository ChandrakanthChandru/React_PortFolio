import React from "react";
import './Certification.css';

const Certification = () => {
  return (
    <section className="certification-container">
      
      <div className="cert-card">
        <div className="cert-details">
          <h3 className="cert-course">Java Full Stack Development</h3>
          <p className="cert-institute">QSpiders, Vadapalani</p>
          <p className="cert-date">Completed: February 2026</p>
        </div>
        <div className="cert-badge">
          <img 
            src="./solo java.jpg" 
            alt="Certificate Badge" 
          />
        </div>
      </div>
    </section>
  );
};

export default Certification;
