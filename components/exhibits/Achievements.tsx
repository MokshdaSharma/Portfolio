export default function Achievements() {
  return (
    <div className="glass-card w-full max-w-3xl p-10 relative overflow-hidden">
      {/* Decorative scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
      
      <h2 className="text-4xl font-black mb-10 neon-text font-mono uppercase tracking-widest border-b border-purple-900/50 pb-4">
        Awards & Publications
      </h2>
      
      <div className="space-y-8 relative z-10">
        <div className="flex gap-6 items-start group">
          <div className="w-12 h-12 bg-purple-950/50 border border-purple-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl">🏆</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Best Paper Presenter & Best Paper Award</h3>
            <p className="text-purple-300 font-mono text-sm mb-2">ICAMC-2026</p>
            <p className="text-slate-300 font-light">&quot;From Pixels to Language: Benchmarking Visual Reasoning in GPT-4o vs Claude-Sonnet-4.5&quot;</p>
          </div>
        </div>

        <div className="flex gap-6 items-start group">
          <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl">🧬</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Winner (3rd) Biomimicry Build-a-thon</h3>
            <p className="text-slate-300 font-light">Showcased the Brain-Spine Neural Network in an International Hackathon based on bio-inspired solutions.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start group">
          <div className="w-12 h-12 bg-purple-950/50 border border-purple-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl">⭐</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Achiever&apos;s Award 2024-25</h3>
            <p className="text-slate-300 font-light">In recognition of involvement in co-curricular activities at Chandigarh University.</p>
          </div>
        </div>

        <div className="flex gap-6 items-start group">
          <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl">💡</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Smart India Hackathon 2024 Finalist</h3>
            <p className="text-slate-300 font-light">Demonstrated Vyakriti SAR in defense and urbanization.</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 my-6"></div>
        
        <div className="flex gap-6 items-start group">
          <div className="w-12 h-12 bg-blue-950/50 border border-blue-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
            <span className="text-xl">📄</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Publication</h3>
            <p className="text-blue-300 font-mono text-sm mb-2">IJSRD Vol. 12, Issue 10, 2024</p>
            <p className="text-slate-300 font-light italic">&quot;Boom in Data Science: Drivers, Trends, and Future Prospects&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
