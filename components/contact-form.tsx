'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { contactDetails } from '@/lib/site';
import type { ChangeEvent, FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const subject = useMemo(() => encodeURIComponent(`Portfolio inquiry from ${form.name || 'a recruiter'}`), [form.name]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n`
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          Your Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric/60"
            placeholder="Recruiter / Founder / Hiring Manager"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email Address
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric/60"
            placeholder="name@company.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-slate-300">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-electric/60"
          placeholder="Tell me about the role, AI/ML stack, or project you are hiring for."
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary">
          {status === 'sending' ? 'Opening Email Client...' : 'Send Message'}
        </Button>
        <p className="text-xs text-slate-400">This form opens the default email client using the address below.</p>
      </div>

      {status === 'sent' ? <p className="text-sm text-emerald-300">Draft prepared in your email client.</p> : null}
    </form>
  );
}