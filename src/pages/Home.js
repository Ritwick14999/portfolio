import React from 'react';
import profileImg from '../assets/port.png';
function Home() {
  return (
    <div className="page-container">
      <h1>Ritwick Sharma</h1>
      
      <div className="profile-section">
        {/* Replace the src URL below with your actual photo */}
        <img src={profileImg} alt="Profile" className="profile-pic" />
        
        <div className="details">
          <h2>About Me</h2>
          <p>
            I'm a final-year B.Tech student in Artificial Intelligence at Mahindra University,
            looking for ML engineer and applied AI roles. Most of what I've built over the past
            year is around LLMs: RAG pipelines, agents, and the evaluation code that tells you
            whether they actually work. This summer I interned at NIT Raipur on a multimodal RAG
            system for skin disease classification, which is now being written up as a paper.
          </p>
          <p>
            I like the less glamorous parts of ML work. Writing tests, tracking down the bug that
            was quietly inflating accuracy, checking whether a result holds up on a second dataset.
            On my agent memory project it didn't, and I learned more from figuring out why than
            from the part that worked.
          </p>

          <h2>Research Interests</h2>
          <p>
            Mostly LLM agents and retrieval. A lot of my recent work comes back to one question:
            when a model gets the right answer, is it actually using the evidence it retrieved?
            In clinical QA, often it isn't. I'm also interested in how agents should remember and
            forget over long conversations, and in multimodal models for medical imaging. I'd like
            to work on a team that puts ML in front of real users and takes measuring it seriously.
          </p>

          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Research Intern</strong>, National Institute of Technology, Raipur (Jun 2026 - Aug 2026):
              multimodal dermatology RAG pipeline; manuscript under submission.
            </li>
            <li>
              <strong>ML Intern</strong>, YBI Foundation, Remote (Jun 2025 - Jul 2025):
              XGBoost disease classifier on symptom features.
            </li>
          </ul>

          <h2>Personal Details</h2>
          <ul>
            <li><strong>Email:</strong> ritwick2509@gmail.com / se23uari105@mahindrauniversity.edu.in</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/ritwick-sharma-b0bb9034a</li>
            <li><strong>GitHub:</strong> github.com/Ritwick14999</li>
          </ul>

          <h2>Skills</h2>
          <p><strong>Languages:</strong> Python, C, SQL</p>
          <p><strong>ML/AI:</strong> PyTorch, Scikit-learn, TensorFlow</p>
          <p><strong>Cloud:</strong> Google Cloud Platform (GCP)</p>
          <p><strong>Tools & Libs:</strong> GitHub, Pandas, NumPy, Matplotlib, Jupyter, VS Code, Streamlit, ChromaDB</p>

          <h2>Certifications</h2>
          <ul>
            <li>SQL for Data Science, University of California, Davis (Coursera)</li>
            <li>Introduction to AI Hypercomputer, Google Cloud</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;