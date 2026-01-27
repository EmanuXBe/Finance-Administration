import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface StoryReaderProps {
  text: string;
  definitions: { term: string; definition: string }[];
}

export const StoryReader: React.FC<StoryReaderProps> = ({ text, definitions }) => {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  // Helper to split text but keep the terms identifiable
  const parseText = () => {
    let parts: { text: string; isTerm: boolean; def?: string }[] = [{ text: text, isTerm: false }];

    definitions.forEach(def => {
      const newParts: typeof parts = [];
      parts.forEach(part => {
        if (part.isTerm) {
          newParts.push(part);
        } else {
          // Case insensitive split, but we want to preserve the original casing in the text
          const regex = new RegExp(`(${def.term})`, 'gi');
          const split = part.text.split(regex);
          
          split.forEach(s => {
            if (s.toLowerCase() === def.term.toLowerCase()) {
              newParts.push({ text: s, isTerm: true, def: def.definition });
            } else if (s.length > 0) {
              newParts.push({ text: s, isTerm: false });
            }
          });
        }
      });
      parts = newParts;
    });

    return parts;
  };

  const contentParts = parseText();

  return (
    <div className="relative font-body text-lg md:text-xl leading-relaxed text-ebony text-justify">
      <div className="absolute -left-6 top-0 text-toffee-brown/10 -z-10">
        <BookOpen size={60} />
      </div>
      
      <p>
        {contentParts.map((part, i) => (
          part.isTerm ? (
            <span 
              key={i} 
              className="relative inline-block cursor-help group"
              onMouseEnter={() => setActiveTerm(part.text)}
              onMouseLeave={() => setActiveTerm(null)}
              onClick={() => setActiveTerm(activeTerm === part.text ? null : part.text)} // Mobile toggle
            >
              <span className="font-bold text-saddle-brown border-b-2 border-dotted border-saddle-brown/50 hover:border-saddle-brown transition-colors bg-camel/10 px-1 rounded">
                {part.text}
              </span>
              
              <AnimatePresence>
                {activeTerm === part.text && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-charcoal-brown text-khaki-beige p-4 rounded-md shadow-2xl text-base text-left border-2 border-camel"
                  >
                    <span className="block font-heading font-bold text-camel mb-2 border-b border-white/20 pb-1">
                      {part.text.toUpperCase()}
                    </span>
                    {part.def}
                    {/* Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-camel"></span>
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          ) : (
             <span key={i}>{part.text}</span>
          )
        ))}
      </p>
    </div>
  );
};