'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type Props = {
  phrases: string[];
};

export function TypingText({ phrases }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  const currentPhrase = useMemo(() => phrases[phraseIndex] ?? '', [phrases, phraseIndex]);

  useEffect(() => {
    const speed = isDeleting ? 36 : 54;
    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        setTyped(currentPhrase.slice(0, typed.length + 1));
        if (typed.length + 1 === currentPhrase.length) {
          window.setTimeout(() => setIsDeleting(true), 900);
        }
        return;
      }

      const nextLength = Math.max(typed.length - 1, 0);
      setTyped(currentPhrase.slice(0, nextLength));
      if (nextLength === 0) {
        setIsDeleting(false);
        setPhraseIndex((value) => (value + 1) % phrases.length);
      }
    }, speed);

    return () => window.clearTimeout(timer);
  }, [currentPhrase, isDeleting, phraseIndex, phrases.length, typed.length]);

  useEffect(() => {
    void controls.start({ opacity: [0.35, 1, 0.35], transition: { duration: 2.4, repeat: Number.POSITIVE_INFINITY } });
  }, [controls]);

  return (
    <motion.div animate={controls} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
      <span>{typed}</span>
      <span className="h-5 w-[1px] animate-pulse bg-white/70" />
    </motion.div>
  );
}