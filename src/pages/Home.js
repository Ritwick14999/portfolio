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
           
I am a final-year B.Tech student in Artificial Intelligence at Mahindra University,
interested in machine learning, deep learning, and LLM-based agents. I enjoy building
things end to end and, just as much, figuring out where and why they break: rigorous
evaluation, reproducible experiments, and honest reporting of negative results.
Always open to learning, collaborating, and growing in the field of AI.


          </p>

          <h2>Research Interests</h2>
          <p>
          My research interests lie in applied Machine Learning and Natural Language Processing,
          with a focus on retrieval-augmented and agentic LLM systems. I am especially interested in
          evaluating whether these systems are actually grounded in their evidence, in memory and
          forgetting for long-horizon agents, and in multimodal retrieval for healthcare, where AI
          can practically assist in diagnosis and clinical decision-making.
          </p>

          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Research Intern</strong>, National Institute of Technology, Raipur (Jun 2026 – Aug 2026):
              multimodal dermatology RAG pipeline; manuscript under submission.
            </li>
            <li>
              <strong>ML Intern</strong>, YBI Foundation, Remote (Jun 2025 – Jul 2025):
              XGBoost disease classifier on symptom features.
            </li>
          </ul>

          <h2>Personal Details</h2>
          <ul>
            <li><strong>Email:</strong> ritwick2509@gmail.com / se23uari105@mahindrauniversity.edu.in</li>
            <li><strong>Phone:</strong> 9009875477</li>
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