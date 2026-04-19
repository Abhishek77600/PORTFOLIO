import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science and Data Science Engineering</h4>
                <h5>Atria Institute of Technology, Bangalore</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Currently pursuing B.E. with a CGPA of 8.82/10. Gaining expertise in data science, machine learning, and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</h4>
                <h5>Oracle University</h5>
              </div>
              <h3>Valid until Oct 2027</h3>
            </div>
            <p>
              Certified in Generative AI technologies and Oracle Cloud Infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Foundations</h4>
                <h5>Cyseck (Centre of Excellence for Cybersecurity)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Hands-on experience with Nmap, Burp Suite, Metasploit, OWASP ZAP, and Wazuh. Participated in CTF challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Course</h4>
                <h5>Skill Course</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed a focused SQL course covering relational databases, complex queries, joins, indexing, and practical exercises to design and query databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Microsoft Excel with A.I Masterclass</h4>
                <h5>Skill Course</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Mastered advanced Excel features, data modelling, and AI-assisted workflows for data cleaning and analysis to accelerate reporting and insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>RDBMS PostgreSQL Training</h4>
                <h5>Spoken Tutorial Project, IIT Bombay</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed PostgreSQL training with hands-on experience in SQL queries, database design, relational concepts, and PostgreSQL operations. Successfully passed the online examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
