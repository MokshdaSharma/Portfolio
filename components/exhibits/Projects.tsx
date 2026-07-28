export default function Projects() {
  const projects = [
    {
      title: "CogniHire",
      tech: "Python, Polars, LightGBM, FAISS, HuggingFace",
      desc: "Offline-first AI recruitment engine processing 50K+ resumes using SBERT embeddings, FAISS vector search, and LambdaMART reranking.",
      link: "https://github.com/MokshdaSharma/vyakriti_cognihire"
    },
    {
      title: "CareerCraft AI",
      tech: "FastAPI, Streamlit, OpenAI-API, PyPDF",
      desc: "End-to-end LLM-powered application for resume evaluation and interview prep with AI-driven workflows.",
      link: "https://github.com/MokshdaSharma/CareerCraft-AI"
    },
    {
      title: "LawEase AI",
      tech: "NLP, LangChain, Python, React, Docker, FastAPI",
      desc: "LLM-powered legal assistant for document understanding and summarization with structured responses.",
      link: "https://github.com/MokshdaSharma/LawEase-AI"
    },
    {
      title: "FoodieBot",
      tech: "Python, FastAPI, Gemini API, Pydantic, Docker",
      desc: "AI-Powered Fast Food Recommender System that generates structured data and personalizes recommendations.",
      link: "https://github.com/MokshdaSharma/Food_Agent"
    },
    {
      title: "Interactive Face Particle Visualization",
      tech: "Python, ModernGL, MediaPipe, OpenCV",
      desc: "Engineered a custom rendering pipeline simulating 1,000,000+ physics-based particles directly on the GPU.",
      link: "https://github.com/MokshdaSharma/particle_strom"
    },
    {
      title: "Video Capsule Endoscopy Analysis",
      tech: "Python, DL, Streamlit, HuggingFace",
      desc: "Deep learning medical image classification system using MobileNetV2 to detect gastrointestinal abnormalities.",
      link: "https://github.com/MokshdaSharma/Video-Capsule-Endoscopy-Analysis"
    },
    {
      title: "Brain-Spine Neural Network",
      tech: "Python, ML",
      desc: "Bio-inspired neural network architecture integrating a primary brain network with a secondary spine network.",
      link: "https://github.com/Palak-Kaushik/Brain_Spine_Neural_Network"
    },
    {
      title: "Krishi Vyakriti",
      tech: "GEE, Pytorch, Keras, Tensorflow, MERN",
      desc: "Low-cost, multilingual platform using satellite data and AI to support smallholder farmers with crop insights.",
      link: "#"
    },
    {
      title: "Vyakriti SAR",
      tech: "SNAP, Copernicus, FPGA, Python, C, Matlab",
      desc: "Pipeline to identify man-made changes in SAR satellite imagery, optimized for FPGA hardware processing.",
      link: "#"
    }
  ];

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-5xl font-black mb-10 text-center uppercase tracking-widest border-b border-cyan-900/50 pb-4 neon-text font-mono">
        Active.Deployments
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((p, i) => (
          <a href={p.link} target="_blank" key={i} className="block group">
            <div className="glass-card p-6 h-full flex flex-col hover:bg-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] group-hover:border-cyan-400 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-500 opacity-50 rounded-tr-lg"></div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>
              <p className="text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">{p.tech}</p>
              <p className="text-slate-300 font-light flex-grow leading-relaxed">{p.desc}</p>
              
              <div className="mt-6 self-end text-cyan-500 font-mono text-sm flex items-center gap-2 group-hover:text-cyan-300">
                <span>View Source</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
