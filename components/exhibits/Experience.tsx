export default function Experience() {
  return (
    <div className="w-full max-w-4xl relative mt-10">
      {/* Tech timeline line */}
      <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-cyan-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      
      <h2 className="text-5xl font-black mb-10 pl-16 neon-text uppercase font-mono tracking-widest">
        Experience.Log
      </h2>

      <div className="mb-12 relative pl-24 group">
        <div className="absolute left-[37px] top-4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)] group-hover:scale-150 transition-transform"></div>
        <div className="glass-card p-8 group-hover:border-cyan-400 transition-colors">
          <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Data Scientist Intern</h3>
              <h4 className="text-lg text-cyan-400 font-mono mt-1">Tecnvirons Pvt. Ltd.</h4>
            </div>
            <span className="bg-cyan-950/50 border border-cyan-500/50 text-cyan-400 px-3 py-1 font-mono text-xs rounded-md uppercase">
              10/2025 - 02/2026
            </span>
          </div>
          <p className="text-slate-300 mb-6 font-light leading-relaxed">
            Built AI-powered customer automation workflows integrating WhatsApp Business API, FastAPI, Supabase, and LLMs. Developed an LLM-powered conversational voice assistant capable of natural, context-aware interactions.
          </p>
          <div className="flex flex-wrap gap-2">
            {["WhatsApp API", "FastAPI", "Supabase", "NLP", "LLM"].map(tag => (
              <span key={tag} className="text-xs font-mono text-purple-300 bg-purple-950/30 border border-purple-500/30 px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pl-24 group">
        <div className="absolute left-[37px] top-4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,1)] group-hover:scale-150 transition-transform"></div>
        <div className="glass-card p-8 group-hover:border-purple-400 transition-colors">
          <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Data Scientist Intern</h3>
              <h4 className="text-lg text-purple-400 font-mono mt-1">Marktine Technology Solutions</h4>
            </div>
            <span className="bg-purple-950/50 border border-purple-500/50 text-purple-400 px-3 py-1 font-mono text-xs rounded-md uppercase">
              05/2024 - 07/2024
            </span>
          </div>
          <p className="text-slate-300 mb-6 font-light leading-relaxed">
            Worked on time series analysis & forecasting via hotel booking demand forecasting, vehicle price prediction, and Airbnb price estimation. Performed EDA, feature engineering, and model evaluation.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "Streamlit", "Predictive Analytics", "Time Series"].map(tag => (
              <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/30 px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pl-24 mt-12 group">
        <div className="absolute left-[37px] top-4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)] group-hover:scale-150 transition-transform"></div>
        <div className="glass-card p-8 group-hover:border-blue-400 transition-colors">
          <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Data Analyst Intern</h3>
              <h4 className="text-lg text-blue-400 font-mono mt-1">PrepInsta · Remote / India</h4>
            </div>
            <span className="bg-blue-950/50 border border-blue-500/50 text-blue-400 px-3 py-1 font-mono text-xs rounded-md uppercase">
              12/2023 - 01/2024
            </span>
          </div>
          <p className="text-slate-300 mb-6 font-light leading-relaxed">
            Built interactive AQI dashboards in Tableau for exploratory analysis of India air quality trends. Cleaned, transformed, and explored datasets using Python and Excel to visualize regional patterns for stakeholder review.
          </p>
        </div>
      </div>

      <div className="relative pl-24 mt-12 group">
        <div className="absolute left-[37px] top-4 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(236,72,153,1)] group-hover:scale-150 transition-transform"></div>
        <div className="glass-card p-8 group-hover:border-pink-400 transition-colors">
          <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Forward Graduate</h3>
              <h4 className="text-lg text-pink-400 font-mono mt-1">McKinsey & Company</h4>
            </div>
            <span className="bg-pink-950/50 border border-pink-500/50 text-pink-400 px-3 py-1 font-mono text-xs rounded-md uppercase">
              10-week program
            </span>
          </div>
          <p className="text-slate-300 mb-6 font-light leading-relaxed">
            A 10-week program that pushed me to sharpen how I think, make decisions, and balance logic with broad business and finance capabilities.
          </p>
          <div className="space-y-2 mb-6 text-sm text-slate-300">
            <p>• Breaking down ambiguous problems into structured, actionable components.</p>
            <p>• Communicating recommendations with greater clarity and purpose.</p>
            <p>• Leading with adaptability while balancing analytical thinking with practical execution.</p>
          </div>
          <p className="text-slate-400 text-sm">
            The program provided a practical toolkit across business, finance, digital, and leadership, grounded in real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
}
