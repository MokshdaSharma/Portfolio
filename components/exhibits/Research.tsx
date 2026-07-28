export default function Research() {
  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-5xl font-black mb-10 text-center uppercase tracking-widest border-b border-cyan-900/50 pb-4 neon-text font-mono">
        Research.Log
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Paper 1 */}
        <div className="glass-card p-8 h-full flex flex-col hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:border-cyan-400 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-500 opacity-50 rounded-tr-lg"></div>
          
          <h3 className="text-2xl font-bold mb-2 text-white">
            From Pixels to Language: Benchmarking Visual Reasoning
          </h3>
          <p className="text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
            Springer | ICAMC-2026
          </p>
          
          <p className="text-slate-300 font-light flex-grow leading-relaxed">
            Evaluated reliability of Vision Language Models (GPT-4o vs Claude-Sonnet-4.5) focusing on hallucination, OCR accuracy, and response consistency under controlled experimental settings.
          </p>
          
          <div className="mt-8 self-start border border-cyan-500/50 rounded-full px-6 py-2 text-xs font-mono text-cyan-400 group-hover:bg-cyan-500/10 transition-colors cursor-pointer">
            Read Publication →
          </div>
        </div>

        {/* Paper 2 */}
        <div className="glass-card p-8 h-full flex flex-col hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:border-cyan-400 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-500 opacity-50 rounded-tr-lg"></div>
          
          <h3 className="text-2xl font-bold mb-2 text-white">
            Boom in Data Science: Drivers, Trends, and Future Prospects
          </h3>
          <p className="text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
            IJSRD (2024)
          </p>
          
          <p className="text-slate-300 font-light flex-grow leading-relaxed">
            Examined the rapid growth of data science adoption and the expanding role of ML-driven decision systems across sectors, highlighting drivers like cloud maturity and automation.
          </p>
          
          <div className="mt-8 self-start border border-cyan-500/50 rounded-full px-6 py-2 text-xs font-mono text-cyan-400 group-hover:bg-cyan-500/10 transition-colors cursor-pointer">
            Read Publication →
          </div>
        </div>
      </div>
    </div>
  );
}
