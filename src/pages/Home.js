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
           
I am a third-year BTech student with interest in Artificial Intelligence, 
particularly in machine learning and deep learning. I am always expanding 
my scope for learning and improving. I enjoy exploring AI concepts and 
constantly working on my problem-solving skills. Currently, I am focused 
on gaining hands-on experience through self-learning, coursework, and 
practical applications.
Always open to learning, collaborating, and growing in the field of AI.


          </p>

          <h2>Research Interests</h2>
          <p>
          My primary research interests lie in applied Machine Learning and Natural Language Processing. 
          Specifically, I am exploring Retrieval-Augmented Generation (RAG) architectures to make 
          large language models more accurate and domain-specific. Alongside NLP, I am highly interested 
          in building robust predictive models for healthcare, focusing on how AI can be practically deployed 
          to assist in disease diagnosis and clinical decision-making..
          </p>

          <h2>Personal Details</h2>
          <ul>
            <li><strong>Email:</strong> ritwick2509@gmail.com / se23uari105@mahindrauniversity.edu.in</li>
            <li><strong>Phone:</strong> 9009875477</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/ritwick-sharma-b0bb9034a</li>
            <li><strong>GitHub:</strong> github.com/Ritwick14999</li>
          </ul>

          <h2>Skills</h2>
          <p><strong>Languages:</strong> C, Python, SQL</p>
          <p><strong>ML/AI:</strong> PyTorch, Scikit-learn, TensorFlow</p>
          <p><strong>Tools & Libs:</strong> GitHub, Pandas, NumPy, Matplotlib, Jupyter, VS Code, Streamlit</p>
        </div>
      </div>
    </div>
  );
}

export default Home;