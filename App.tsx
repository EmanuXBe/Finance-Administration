
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Lightbulb, Gamepad2, 
  BookOpen, GraduationCap, ArrowRight, Linkedin, Github, 
  FileText, Award, Menu, X, ArrowLeft
} from 'lucide-react';
import { ERAS, MILESTONES, AFFILIATIONS, BOOKS, PAPERS, ARCADE_ACTIVITIES } from './constants';
import { BarterGame } from './components/BarterGame';
import { InflationSimulator } from './components/InflationSimulator';
import { DamAnalogy } from './components/DamAnalogy';
import { StoryReader } from './components/StoryReader';
import { IllustrationPlaceholder } from './components/IllustrationPlaceholder';

type ViewState = 'home' | 'about' | 'research' | 'books' | 'arcade' | 'game-valor';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [currentEraIndex, setCurrentEraIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigateEra = (newDirection: number) => {
    const newIndex = currentEraIndex + newDirection;
    if (newIndex >= 0 && newIndex < ERAS.length) {
      setCurrentEraIndex(newIndex);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, currentEraIndex]);

  // COMPONENTES DE VISTA
  const Nav = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-jet-black-100 h-16 flex items-center justify-between px-6 lg:px-12">
      <div 
        onClick={() => setView('home')} 
        className="font-display font-black text-xl tracking-tighter cursor-pointer flex items-center gap-2"
      >
        L.Y. MORALES <span className="text-twilight-400 font-light">| PhD</span>
      </div>
      
      <div className="hidden lg:flex gap-10 font-body text-xs font-bold uppercase tracking-widest text-jet-black-600">
        <button onClick={() => setView('about')} className={`hover:text-twilight-500 transition ${view === 'about' ? 'text-twilight-500' : ''}`}>Sobre Mí</button>
        <button onClick={() => setView('research')} className={`hover:text-twilight-500 transition ${view === 'research' ? 'text-twilight-500' : ''}`}>Investigación</button>
        <button onClick={() => setView('arcade')} className={`px-4 py-2 rounded-full border border-periwinkle-500 text-periwinkle-500 hover:bg-periwinkle-500 hover:text-white transition ${view === 'arcade' ? 'bg-periwinkle-500 text-white' : ''}`}>Arcade</button>
      </div>

      <button className="lg:hidden p-2" onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );

  const HomeView = () => (
    <div className="min-h-screen selection-hub-bg flex flex-col lg:flex-row overflow-hidden">
      {/* Lado Profesional */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col items-center justify-center p-12 text-center group cursor-pointer relative"
        onClick={() => setView('about')}
      >
        <div className="absolute inset-0 bg-jet-black-900 opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative z-10">
          <GraduationCap size={64} className="text-twilight-400 mb-6 mx-auto group-hover:scale-110 transition-transform" />
          <h2 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">Explorar al Profesional</h2>
          <p className="font-body text-jet-black-300 max-w-sm mx-auto mb-8">Trayectoria académica, investigación en materiales y gestión del conocimiento.</p>
          <div className="text-twilight-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto justify-center group-hover:gap-4 transition-all">
            Ver Perfil <ArrowRight size={16} />
          </div>
        </div>
      </motion.div>

      {/* Lado Arcade */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col items-center justify-center p-12 text-center group cursor-pointer relative"
        onClick={() => setView('arcade')}
      >
        <div className="absolute inset-0 bg-periwinkle-950 opacity-80 group-hover:opacity-60 transition-opacity"></div>
        <div className="relative z-10">
          <Gamepad2 size={64} className="text-periwinkle-400 mb-6 mx-auto group-hover:scale-110 transition-transform" />
          <h2 className="font-display text-4xl text-ghost-white-50 mb-4 tracking-widest uppercase">Jugar para Aprender</h2>
          <p className="font-body text-periwinkle-200 max-w-sm mx-auto mb-8">Interactúa con mini-juegos diseñados para transformar la educación técnica.</p>
          <div className="text-periwinkle-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto justify-center group-hover:gap-4 transition-all">
            Entrar al Arcade <ArrowRight size={16} />
          </div>
        </div>
      </motion.div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-32 pb-24 bg-jet-black-50">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20 asym-header">
          <h2 className="font-display text-7xl text-jet-black-900 mb-8 border-l-8 border-twilight-500 pl-8">MI HISTORIA</h2>
          <p className="font-body text-xl text-jet-black-600 max-w-2xl italic leading-relaxed">
            "Enseñar es encender un viaje. Como PhD en Ciencias de la Ingeniería con 30 años de experiencia, mi misión es fusionar la técnica con la narrativa lúdica."
          </p>
        </header>

        {/* Timeline */}
        <div className="relative border-l-2 border-jet-black-200 ml-4 mb-32 space-y-24">
          {MILESTONES.map((m, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-12 group"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-twilight-500 border-4 border-jet-black-50 group-hover:scale-150 transition-transform"></div>
              <span className="block font-display text-xl font-bold text-twilight-600 mb-1">{m.year}</span>
              <h3 className="text-2xl font-bold text-jet-black-800 mb-2">{m.title}</h3>
              <p className="text-jet-black-600 max-w-xl leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Cargos */}
        <section>
          <h3 className="font-display text-3xl mb-12 flex items-center gap-4">
            <Award className="text-twilight-500" /> AFILIACIONES INSTITUCIONALES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {AFFILIATIONS.map((aff, i) => (
              <div key={i} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-jet-black-100 flex flex-col items-center">
                <div className="h-20 mb-6 flex items-center grayscale group-hover:grayscale-0 transition duration-500">
                  <img src={aff.logo} alt={aff.name} className="max-h-full" />
                </div>
                <h4 className="font-bold text-jet-black-900 text-center">{aff.name}</h4>
                <p className="text-sm text-jet-black-500 mt-2 text-center">{aff.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const ResearchView = () => (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20">
          <h2 className="font-display text-7xl text-jet-black-900 mb-8 border-l-8 border-twilight-500 pl-8">INVESTIGACIÓN</h2>
        </header>

        {/* Books Grid */}
        <section className="mb-32">
          <h3 className="font-display text-3xl mb-12 flex items-center gap-4">
            <BookOpen className="text-twilight-500" /> LIBRERÍA VIRTUAL
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {BOOKS.map((b, i) => (
              <div key={i} className="group perspective-1000 cursor-pointer">
                <div className="relative aspect-[2/3] shadow-2xl rounded-sm overflow-hidden transform group-hover:rotate-y-12 transition-all duration-500 border-r-4 border-jet-black-800">
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                </div>
                <h4 className="mt-6 font-bold text-jet-black-900 group-hover:text-twilight-500 transition">{b.title}</h4>
                <p className="text-sm text-jet-black-500">{b.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Papers Table */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h3 className="font-display text-3xl flex items-center gap-4">
              <FileText className="text-twilight-500" /> PAPERS Y PUBLICACIONES
            </h3>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-jet-black-100 text-jet-black-600 text-[10px] font-bold uppercase rounded-full tracking-widest">Filtro: Recientes</span>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-jet-black-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-jet-black-50 text-jet-black-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                <tr>
                  <th className="p-4 border-b">Año</th>
                  <th className="p-4 border-b">Título del Trabajo</th>
                  <th className="p-4 border-b">Tema</th>
                  <th className="p-4 border-b text-center">Citas</th>
                  <th className="p-4 border-b">Acceso</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm">
                {PAPERS.map((p, i) => (
                  <tr key={i} className="hover:bg-jet-black-50/50 transition">
                    <td className="p-4 font-bold text-twilight-600">{p.year}</td>
                    <td className="p-4 text-jet-black-900 font-medium md:max-w-md">{p.title}</td>
                    <td className="p-4"><span className="px-2 py-1 bg-twilight-50 text-twilight-600 text-[10px] font-bold rounded uppercase">{p.topic}</span></td>
                    <td className="p-4 text-center font-bold text-jet-black-400">{p.citations}</td>
                    <td className="p-4"><a href={p.link} className="text-periwinkle-500 font-bold hover:underline">DOI/PDF</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );

  const ArcadeView = () => (
    <div className="pt-32 pb-24 min-h-screen bg-jet-black-950 text-ghost-white-50">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="font-display text-7xl italic text-transparent bg-clip-text bg-gradient-to-r from-periwinkle-400 to-ghost-white-100">ARCADE EDUCATIVO</h2>
          <p className="font-body text-periwinkle-300 mt-4 tracking-widest uppercase font-bold">Dashboard del Estudiante //</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARCADE_ACTIVITIES.map((g, i) => (
            <div 
              key={i} 
              className="group bg-jet-black-900 border border-periwinkle-900/50 rounded-2xl overflow-hidden hover:border-periwinkle-400 transition-all cursor-pointer"
              onClick={() => g.id === 'viaje-del-valor' && setView('game-valor')}
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet-black-950 to-transparent opacity-80"></div>
                {g.status === 'coming-soon' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <span className="font-display text-sm tracking-widest">PRÓXIMAMENTE</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-periwinkle-400 font-bold text-[10px] tracking-widest uppercase">{g.course}</span>
                <h3 className="text-2xl font-display mt-2">{g.title}</h3>
                <p className="text-sm text-jet-black-400 mt-3 leading-relaxed">{g.description}</p>
                <div className="mt-8 flex justify-between items-center">
                  <span className="px-2 py-1 bg-jet-black-800 text-jet-black-400 text-[10px] font-bold rounded uppercase tracking-widest">{g.status}</span>
                  <button className="flex items-center gap-2 text-periwinkle-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    {g.status === 'playable' ? 'Jugar Ahora' : 'Notificar'} <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GameValorView = () => {
    const era = ERAS[currentEraIndex];
    return (
      <div className="min-h-screen text-ebony font-roman selection:bg-toffee-brown selection:text-khaki-beige overflow-hidden flex flex-col bg-dry-sage">
        <header className="bg-charcoal-brown text-khaki-beige h-16 flex items-center justify-between px-8 border-b-4 border-camel z-10">
          <button onClick={() => setView('arcade')} className="flex items-center gap-2 hover:text-white transition group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Salir al Arcade
          </button>
          <h1 className="font-heading font-bold text-xl tracking-widest text-camel uppercase">EL VIAJE DEL VALOR</h1>
          <div className="text-xs opacity-70">CAPÍTULO {currentEraIndex + 1} DE {ERAS.length}</div>
        </header>

        <main className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-12 relative">
          <div className="max-w-3xl mx-auto bg-white/40 p-8 md:p-16 rounded shadow-inner border-x-4 border-khaki-beige min-h-full">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentEraIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <span className="block text-saddle-brown text-sm tracking-[0.3em] font-heading uppercase mb-2">{era.yearRange}</span>
                  <h2 className="font-heading text-4xl font-bold text-dark-walnut mb-8 leading-tight">{era.title.split(':')[1]}</h2>
                  <IllustrationPlaceholder type={era.id} />
                </div>

                <StoryReader text={era.story} definitions={era.definitions} />

                <div className="my-12 p-6 bg-khaki-beige/30 border-y-2 border-saddle-brown/20 rounded-lg flex gap-4">
                  <Lightbulb className="text-toffee-brown flex-shrink-0" />
                  <p className="italic text-ebony leading-relaxed">{era.didYouKnow}</p>
                </div>

                {era.interactiveComponent && (
                  <div className="mt-16 pt-8 border-t-2 border-dashed border-dark-walnut/20">
                    <div className="flex items-center justify-center gap-3 mb-8">
                      <Gamepad2 className="text-toffee-brown" />
                      <h3 className="font-heading text-2xl font-bold text-dark-walnut">Desafío Práctico</h3>
                    </div>
                    {era.interactiveComponent === 'barter' && <BarterGame />}
                    {era.interactiveComponent === 'inflation' && <InflationSimulator />}
                    {era.interactiveComponent === 'dam' && <DamAnalogy />}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        <footer className="bg-charcoal-brown p-4 border-t border-camel flex justify-between items-center px-8">
          <button onClick={() => navigateEra(-1)} disabled={currentEraIndex === 0} className="flex items-center gap-2 text-khaki-beige disabled:opacity-30"><ChevronLeft size={24}/> Anterior</button>
          <div className="flex gap-2">
            {ERAS.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full border border-camel ${i === currentEraIndex ? 'bg-camel' : ''}`} />
            ))}
          </div>
          <button onClick={() => navigateEra(1)} disabled={currentEraIndex === ERAS.length - 1} className="flex items-center gap-2 px-6 py-2 bg-camel text-charcoal-brown font-bold rounded shadow-lg">Siguiente <ChevronRight size={24}/></button>
        </footer>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {view === 'home' ? <HomeView /> : (
        <>
          {view !== 'game-valor' && <Nav />}
          <main>
            {view === 'about' && <AboutView />}
            {view === 'research' && <ResearchView />}
            {view === 'arcade' && <ArcadeView />}
            {view === 'game-valor' && <GameValorView />}
          </main>
          
          {view !== 'game-valor' && (
            <footer className="bg-jet-black-950 text-jet-black-400 py-16 px-12 border-t border-jet-black-900">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h4 className="font-display text-2xl text-white mb-6">L.Y. MORALES <span className="text-twilight-400 font-light">| PhD</span></h4>
                  <p className="text-sm leading-relaxed max-w-xs">Educadora investigadora transformando la ingeniería a través del storytelling interactivo.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className="font-bold uppercase tracking-widest text-[10px] text-jet-black-200">Encuéntrame en</h5>
                  <div className="flex gap-6">
                    <a href="#" className="hover:text-twilight-400 transition"><Linkedin /></a>
                    <a href="#" className="hover:text-periwinkle-400 transition"><Github /></a>
                    <a href="#" className="hover:text-ghost-white-50 transition"><FileText /></a>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-[10px] text-jet-black-200 mb-6">Contacto Directo</h5>
                  <p className="text-sm mb-4">luz.morales@unimilitar.edu.co</p>
                  <button className="px-6 py-3 border border-jet-black-700 rounded-lg hover:border-twilight-500 hover:text-twilight-500 transition text-[10px] font-bold uppercase tracking-widest">Solicitar Conferencia</button>
                </div>
              </div>
            </footer>
          )}
        </>
      )}
    </div>
  );
};

export default App;
