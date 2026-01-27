import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Lightbulb, History, Gamepad2 } from 'lucide-react';
import { ERAS } from './constants';
import { BarterGame } from './components/BarterGame';
import { InflationSimulator } from './components/InflationSimulator';
import { DamAnalogy } from './components/DamAnalogy';
import { StoryReader } from './components/StoryReader';
import { IllustrationPlaceholder } from './components/IllustrationPlaceholder';

const App: React.FC = () => {
  const [currentEraIndex, setCurrentEraIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentEra = ERAS[currentEraIndex];

  const navigate = (newDirection: number) => {
    const newIndex = currentEraIndex + newDirection;
    if (newIndex >= 0 && newIndex < ERAS.length) {
      setDirection(newDirection);
      setCurrentEraIndex(newIndex);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentEraIndex]);

  const renderInteractive = () => {
    switch(currentEra.interactiveComponent) {
      case 'barter': return <BarterGame />;
      case 'inflation': return <InflationSimulator />;
      case 'dam': return <DamAnalogy />;
      default: return null;
    }
  };

  const pageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      rotateY: direction > 0 ? 10 : -10
    }),
    in: {
      opacity: 1,
      x: 0,
      rotateY: 0
    },
    out: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 50 : -50,
      rotateY: direction < 0 ? -10 : 10
    })
  };

  return (
    <div className="min-h-screen text-ebony font-body selection:bg-toffee-brown selection:text-khaki-beige overflow-x-hidden flex flex-col">
      
      {/* Header (Book Spine Style) - Using Charcoal Brown for strong contrast header */}
      <header className="fixed top-0 w-full bg-charcoal-brown text-khaki-beige shadow-xl z-50 h-16 flex items-center justify-between px-4 lg:px-12 border-b-4 border-camel">
        <div className="flex items-center gap-3">
          <div className="p-2 border border-camel rounded-full text-camel">
            <History size={20} />
          </div>
          <h1 className="font-heading font-bold text-xl tracking-widest text-camel hidden sm:block">
            EL VIAJE DEL VALOR
          </h1>
        </div>
        <div className="font-heading text-sm text-khaki-beige/70 tracking-widest">
           CAPÍTULO {currentEraIndex + 1} DE {ERAS.length}
        </div>
      </header>

      {/* Main Content (Book Page) */}
      <main className="flex-grow pt-24 pb-32 px-4 md:px-0">
        {/* Main Card: Light Theme (Dry Sage/Khaki) */}
        <div className="max-w-3xl mx-auto bg-dry-sage shadow-[0_0_50px_rgba(51,61,41,0.3)] min-h-[80vh] relative p-8 md:p-16 border-x-8 border-khaki-beige rounded-sm">
          {/* Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-saddle-brown/40 to-transparent"></div>

          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentEraIndex}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* 1. Header & Illustration */}
              <div className="text-center mb-8">
                <span className="font-heading text-saddle-brown text-sm tracking-[0.3em] uppercase block mb-2 border-b border-saddle-brown/20 inline-block pb-1">
                  {currentEra.yearRange}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-walnut mb-8 leading-tight">
                  {currentEra.title.split(':')[1]}
                </h2>
                <IllustrationPlaceholder type={currentEra.id} />
              </div>

              {/* 2. Narrative Story (Interactive) */}
              <div className="mb-12">
                <StoryReader text={currentEra.story} definitions={currentEra.definitions} />
              </div>

              {/* 3. Did You Know (Sidebar style inserted) */}
              <div className="my-10 p-6 bg-khaki-beige/50 border-y-2 border-saddle-brown/30 relative rounded">
                <div className="flex gap-4 items-start">
                  <Lightbulb className="text-toffee-brown flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-heading font-bold text-dark-walnut mb-1">Curiosidad Histórica</h4>
                    <p className="italic text-ebony">{currentEra.didYouKnow}</p>
                  </div>
                </div>
              </div>

              {/* 4. Engineering Context */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl text-dark-walnut border-b-2 border-camel pb-2 mb-4">
                  El Vínculo con la Ingeniería
                </h3>
                <p className="text-lg leading-relaxed mb-4 text-ebony">
                  <strong className="text-saddle-brown font-bold">{currentEra.engineeringContext.title}: </strong>
                  {currentEra.engineeringContext.content}
                </p>
                <div className="bg-white/30 p-4 rounded-lg border-l-4 border-dusty-olive shadow-sm">
                  <p className="font-bold text-dusty-olive text-sm mb-1 uppercase tracking-wider">Reflexión</p>
                  <p className="italic text-lg text-charcoal-brown">"{currentEra.reflectionQuestion}"</p>
                </div>
              </div>

              {/* 5. Game Section (Distinct visual break) */}
              {renderInteractive() && (
                <div className="mt-16 pt-8 border-t-4 border-double border-charcoal-brown/10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Gamepad2 className="text-toffee-brown" size={28} />
                    <h3 className="font-heading text-2xl font-bold text-dark-walnut">Desafío Práctico</h3>
                  </div>
                  {renderInteractive()}
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 w-full bg-charcoal-brown backdrop-blur border-t border-camel p-4 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            disabled={currentEraIndex === 0}
            className="group flex items-center gap-2 px-4 py-2 text-khaki-beige disabled:opacity-30 disabled:cursor-not-allowed transition hover:-translate-x-1"
          >
            <ChevronLeft size={24} />
            <span className="font-heading font-bold hidden sm:inline">Anterior</span>
          </button>

          {/* Page Indicators */}
          <div className="flex gap-3">
            {ERAS.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => {
                   setDirection(idx > currentEraIndex ? 1 : -1);
                   setCurrentEraIndex(idx);
                }}
                className={`w-3 h-3 rounded-full border border-camel transition-all duration-300 ${idx === currentEraIndex ? 'bg-camel scale-125' : 'bg-transparent hover:bg-camel/30'}`}
              />
            ))}
          </div>

          <button 
            onClick={() => navigate(1)}
            disabled={currentEraIndex === ERAS.length - 1}
            className="group flex items-center gap-2 px-6 py-3 bg-camel text-charcoal-brown rounded shadow-lg hover:bg-toffee-brown hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition hover:translate-x-1"
          >
            <span className="font-heading font-bold hidden sm:inline">Siguiente Capítulo</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;