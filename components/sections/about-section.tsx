import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { profile } from '@/lib/site';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="About"
          description={profile.bio}
        />
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-slate-300 backdrop-blur-xl md:p-8">
            <p>
              I build intelligent AI systems that bridge modern research with production-grade engineering. My work focuses on 
              LLM's, RAG, NLP pipelines, and AI-powered platforms designed for real-world usability and scale. With experience 
              spanning industry and academia, I've worked on diverse projectspanning GenAI applications, conversational systems, 
              geospatial AI, and multimodal research, I have developed systems involving FastAPI-based AI services, WhatsApp-integrated 
              automation platforms, AI-driven recommendation engines, resume intelligence systems, and satellite-image analysis 
              pipelines. 
            </p>
            <p className="mt-4">
              Alongside engineering, I actively explore AI research and innovation. My research on visual reasoning capabilities 
              in frontier multimodal models earned the Best Paper Award at an international conference on Artificial Intelligence,
               Machine Learning, and Cybersecurity.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Location</p>
                <p className="mt-2 text-white">Mohali, India</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">Degree</p>
                <p className="mt-2 text-white">B.E. CSE (AI & ML - IBM)</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/75">CGPA</p>
                <p className="mt-2 text-white">8.34</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}