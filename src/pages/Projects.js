import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "Procrastination Analyzer",
      tech: "Python, Pandas, Scikit-learn, Streamlit, TF-IDF",
      desc: "Analyzed timestamp logs to identify productivity patterns (inactivity gaps, burst sessions). Built a heuristic scoring system to predict next-day procrastination risk and set up an interactive Streamlit dashboard.",
      link: "https://github.com/Ritwick14999/procrastination-analyzer" 
    },
    {
      title: "AI-Based Disease Diagnosis System",
      tech: "Python, Scikit-learn, XGBoost, SMOTE, Pandas",
      desc: "Developed an AI model predicting diseases from 132 clinical symptoms using supervised learning. Trained an XGBoost classifier with SMOTE class balancing for diagnosis support.",
      link: "https://github.com/Ritwick14999/Disease-Predictor"
    },
    {
      title: "Gita & Advaita RAG Spiritual Chatbot",
      tech: "Python, QLoRA, LangChain, ChromaDB, Streamlit",
      desc: "Built a RAG chatbot to retrieve passages from Vedic scriptures. Fine-tuned Llama-3.2-3B on 18k+ Q&A pairs and deployed it with a Streamlit interface.",
      link: "https://github.com/Ritwick14999/gita-advaita-llm-chatbot"
    }
  ];

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h2>{proj.title}</h2>
            <p className="tech-stack"><strong>Tech:</strong> {proj.tech}</p>
            <p>{proj.desc}</p>
            {/* If you have specific repo links, replace the href below */}
            <a href={proj.link} target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;