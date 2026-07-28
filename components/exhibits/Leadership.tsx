export default function Leadership() {
  const roles = [
    {
      title: "Secretary",
      org: "FPF - Future Prep Forum Club",
      loc: "Chandigarh University",
      desc: "Served as Secretary and supported club coordination, communication, and planning for student-focused initiatives."
    },
    {
      title: "Vice-Chairperson",
      org: "IEEE PBSC",
      loc: "Chandigarh University",
      desc: "Served as Vice-Chairperson and helped lead organizing efforts, collaboration, and execution for IEEE student activities."
    }
  ];

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-5xl font-black mb-10 text-center uppercase tracking-widest border-b border-purple-900/50 pb-4 neon-text font-mono">
        Leadership
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {roles.map((r, i) => (
          <div key={i} className="glass-card p-8 h-full flex flex-col hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:border-purple-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-purple-500 opacity-50 rounded-tr-lg"></div>
            <h3 className="text-2xl font-bold mb-2 text-white">{r.title}</h3>
            <p className="text-xs font-mono text-purple-400 mb-6 uppercase tracking-wider">{r.org} · {r.loc}</p>
            <p className="text-slate-300 font-light flex-grow leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
