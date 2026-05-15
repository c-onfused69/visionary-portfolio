/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headphones } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const terminalMessages = [
  "// DECRYPTING DATA STREAMS...",
  "// SYNCHRONIZING PARALLEL REALITIES...",
  "// TRANSMITTING QUANTUM SIGNALS...",
  "// UNLOCKING DIGITAL DIMENSIONS...",
  "// YOU'RE ABOUT TO ENTER THE FUTURE...",
  "// INITIALIZING NEURAL INTERFACE..."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'terminal' | 'interactive'>('terminal');
  const [typedText, setTypedText] = useState("");
  const fullText = "HANG TIGHT, EXPLORER. THE DATA TRANSFER IS IN PROGRESS. IT MIGHT TAKE A MOMENT, BUT THE JOURNEY AHEAD IS WORTH THE WAIT...";

  useEffect(() => {
    if (stage !== 'terminal') return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'terminal') return;

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage('interactive'), 600);
          return 100;
        }
        return Math.min(p + Math.floor(Math.random() * 4) + 1, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [stage]);



  const currentMsgIdx = Math.min(
    Math.floor((progress / 100) * terminalMessages.length), 
    terminalMessages.length - 1
  );

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-100 bg-brand-indigo flex items-center justify-center p-6 text-white overflow-hidden pointer-events-auto font-mono"
    >
      <AnimatePresence mode="wait">
        {stage === 'terminal' ? (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-350 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-xs md:text-sm tracking-widest"
          >
            {/* Left: Terminal Messages */}
            <div className="flex flex-col gap-2">
              {terminalMessages.map((msg, idx) => {
                const isVisible = idx <= currentMsgIdx;
                const isCurrent = idx === currentMsgIdx;
                if (!isVisible) return <div key={idx} className="opacity-0 h-6" />;
                return (
                  <div 
                    key={idx} 
                    className={`h-6 flex items-center px-2 w-fit ${isCurrent ? 'bg-white text-brand-indigo font-bold' : 'text-white/70'}`}
                  >
                    {msg}
                  </div>
                );
              })}
            </div>

            {/* Center: Progress */}
            <div className="text-center text-white/90 font-bold tracking-[0.2em]">
              ( {progress.toString().padStart(2, '0')}% )
            </div>

            {/* Right: Message */}
            <div className="text-right text-white/70 max-w-sm justify-self-end leading-relaxed opacity-80">
              {typedText}
              <span className="animate-pulse ml-1 inline-block">█</span>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="interactive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-2xl text-center space-y-12"
          >
            <div className="flex flex-col items-center gap-6">
              <Headphones size={48} className="text-white/80" />
              <p className="font-mono text-sm md:text-base uppercase tracking-widest leading-relaxed max-w-md">
                For optimal immersion in this digital frontier, we highly recommend activating your audio receptors with headphones
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <button 
                onClick={onComplete}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 font-bold tracking-wide backdrop-blur-sm"
              >
                ENTER WITH AUDIO
              </button>
              
              <button 
                onClick={onComplete}
                className="w-full sm:w-auto px-8 py-3 text-sm text-white/60 hover:text-white underline decoration-white/30 hover:decoration-white transition-all duration-300 tracking-wide"
              >
                ENTER WITHOUT SOUND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
