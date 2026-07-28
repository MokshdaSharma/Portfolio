export default function Skills() {
  const skills = [
    { cat: "Languages", items: "Python, SQL, C++" },
    { cat: "Frameworks", items: "FastAPI, LangChain, HuggingFace Transformers, TensorFlow, Keras, PyTorch, Streamlit, MERN Stack, Pydantic, Scikit-Learn, Pandas, NumPy" },
    { cat: "Core AI", items: "Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI, Computer Vision" },
    { cat: "Tools & Platforms", items: "Docker, Docker Compose, QGIS, Google Earth Engine (GEE), SNAP (ESA Sentinel Toolbox), Supabase, Git" }
  ];

  return (
    <div className="glass-card w-full max-w-3xl p-8 relative">
      <h2 className="text-4xl font-black mb-8 neon-text font-mono uppercase tracking-widest border-b border-cyan-900/50 pb-4">
        System.Toolkit
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-sm font-mono font-bold text-cyan-400 mb-2 uppercase tracking-widest">
              {"//"} {s.cat}
            </span>
            <p className="text-lg font-light text-slate-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5">
              {s.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
