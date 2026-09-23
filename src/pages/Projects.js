import React from 'react';

const research = [
  {
    title: "Multimodal Dermatology RAG Pipeline",
    date: "Jun 2026 - Aug 2026",
    org: "Research Intern, National Institute of Technology, Raipur",
    tech: "Python, BiomedCLIP, Qwen3-VL-8B-Instruct, ChromaDB",
    points: [
      "Built a multimodal retrieval-augmented pipeline for skin-condition classification, reaching 73.26% accuracy and 53.77% balanced accuracy, beating the Swin-B baseline (70.41%) and five further published supervised baselines.",
      "Designed soft superclass alignment over 8 DermaCon-IN superclasses with a retrieval-consistency fallback, late-fusion scoring, and a supervised meta-classifier head over retrieval-pool features.",
      "Debugged and refined the evaluation pipeline, including regex-based prediction extraction and scoring-bug fixes, ahead of manuscript submission."
    ],
    status: "Paper under submission · code will be released on publication"
  }
];

const projects = [
  {
    title: "Evidence-Grounding Benchmark for Clinical QA Agents",
    date: "Aug 2026",
    tech: "Python, PyTorch, Ollama, DeBERTa-NLI",
    points: [
      "Evaluation framework measuring why retrieval-augmented LLM agents fail, not just how often: 74-90% of correct PubMedQA answers contain at least one claim not entailed by the retrieved evidence, a failure invisible to accuracy metrics.",
      "Validated the automated failure-mode classifier against blind human annotation at Cohen's κ = 0.737 (82.5% agreement), with thresholds calibrated on dev and reported on a disjoint set.",
      "Ran 3,400+ agent episodes across two 8B open-weight models; a paired closed-book ablation showed removing tools cost 16-18 accuracy points (McNemar p < 10⁻⁶) while justifications stayed ungrounded.",
      "Two-stage rollout/eval architecture: every reported number regenerates from committed traces with no GPU, model, or network. 331 tests, ~10k LOC."
    ],
    link: "https://github.com/Ritwick14999/Clinical-reasoning-agent"
  },
  {
    title: "Long-Horizon Agent Memory & Forgetting",
    date: "Sep 2026",
    tech: "Python, scikit-learn, SQLite, FAISS, sentence-transformers, Ollama",
    points: [
      "Trained a logistic-regression retention policy for a three-tier (episodic / semantic / procedural) agent memory that beat FIFO 5.7× on recall accuracy (0.71 vs 0.13) and solved multi-hop recall (1.00 vs 0.00) where every hand-written heuristic failed.",
      "Evaluation harness over 500-turn conversations (5 policies × 5 seeds × 2 personas) trading off recall, token cost, and hallucination, split into fabricated / stale / wrong-source modes via ground-truth matching and a cross-model LLM judge.",
      "Found the result did not transfer to LoCoMo; tested and falsified three candidate explanations and reported the negative result.",
      "Ranking replicated across 5 seeds and 2 personas (t > 3); 266 offline tests caught an accuracy-inflating bug and a train/eval leak."
    ],
    link: "https://github.com/Ritwick14999/long-horizon-agent-memory"
  },
  {
    title: "Gita & Advaita RAG Spiritual Chatbot",
    date: "Nov 2025",
    tech: "Python, QLoRA, LangChain, ChromaDB, Streamlit",
    points: [
      "Contributed to a team-built RAG chatbot retrieving passages from Vedic scriptures using ChromaDB and LangChain.",
      "Contributed to QLoRA fine-tuning of Llama-3.2-3B on 18k+ Vedic philosophy Q&A pairs.",
      "Helped develop the Streamlit chat interface and source-citation display for the Hugging Face Spaces deployment."
    ],
    link: "https://github.com/Ritwick14999/gita-advaita-llm-chatbot"
  }
];

function ProjectCard({ proj }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{proj.title}</h2>
        {proj.date && <span className="project-date">{proj.date}</span>}
      </div>
      {proj.org && <p className="project-org">{proj.org}</p>}
      <p className="tech-stack"><strong>Tech:</strong> {proj.tech}</p>
      <ul className="project-points">
        {proj.points.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
      {proj.link && (
        <a href={proj.link} target="_blank" rel="noreferrer" className="btn">View on GitHub</a>
      )}
      {proj.status && <span className="status-badge">{proj.status}</span>}
    </div>
  );
}

function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>

      <h3 className="section-title">Research</h3>
      <div className="projects-grid">
        {research.map((proj) => <ProjectCard key={proj.title} proj={proj} />)}
      </div>

      <h3 className="section-title">Projects</h3>
      <div className="projects-grid">
        {projects.map((proj) => <ProjectCard key={proj.title} proj={proj} />)}
      </div>
    </div>
  );
}

export default Projects;
