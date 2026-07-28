import CanvasBackground from "@/components/3d/CanvasApp";
import Introduction from "@/components/exhibits/Introduction";
import Skills from "@/components/exhibits/Skills";
import Experience from "@/components/exhibits/Experience";
import Projects from "@/components/exhibits/Projects";
import Leadership from "@/components/exhibits/Leadership";
import Research from "@/components/exhibits/Research";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* 3D Network Background */}
      <CanvasBackground />
      


      {/* Main Scrolling Content */}
      <div className="relative z-0 flex flex-col items-center gap-24 py-32 px-6 max-w-6xl mx-auto">
        <section id="about" className="w-full flex justify-center"><Introduction /></section>
        <section id="skills" className="w-full flex justify-center"><Skills /></section>
        <section id="experience" className="w-full flex justify-center"><Experience /></section>
        <section id="leadership" className="w-full flex justify-center"><Leadership /></section>
        <section id="projects" className="w-full flex justify-center"><Projects /></section>
        <section id="research" className="w-full flex justify-center"><Research /></section>
        
        <section id="contact" className="glass-card p-10 text-center w-full max-w-md mx-auto mt-12">
          <h2 className="font-bold text-3xl mb-4 neon-text">Initialize Connection</h2>
          <p className="text-slate-300 mb-6 font-mono text-sm">System ready for new collaborations.</p>
          <p className="text-cyan-400 font-mono mb-6">mokshda.official@gmail.com</p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/MokshdaSharma" target="_blank" className="px-6 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors font-mono text-sm text-cyan-400">GitHub</a>
            <a href="https://www.linkedin.com/in/mokshda-sharma-55a913273/" target="_blank" className="px-6 py-2 rounded-full border border-purple-500/50 hover:bg-purple-500/10 transition-colors font-mono text-sm text-purple-400">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}