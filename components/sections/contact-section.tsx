import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { buttonClassName } from '@/components/ui/button';
import { contactDetails } from '@/lib/site';

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Contact"
        description="Reach out for ML, Data Science, and GenAI opportunities."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <p className="text-sm leading-7 text-slate-300">
              I am open to ML Engineer, Data Scientist, GenAI Developer, and AI Engineer internship or entry-level roles
              where I can contribute to production workflows, experimentation, and product-quality deployment.
            </p>

            <div className="mt-6 space-y-4">
              <Link href={`mailto:${contactDetails.email}`} className={buttonClassName('secondary', 'w-full justify-start')}>
                <Mail className="h-4 w-4" />
                {contactDetails.email}
              </Link>
              <Link href={contactDetails.linkedin} target="_blank" rel="noreferrer" className={buttonClassName('secondary', 'w-full justify-start')}>
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </Link>
              <Link href={contactDetails.github} target="_blank" rel="noreferrer" className={buttonClassName('secondary', 'w-full justify-start')}>
                <Github className="h-4 w-4" />
                GitHub Profile
              </Link>
            </div>
          </div>
        </Reveal>

        <ContactForm />
      </div>
    </section>
  );
}