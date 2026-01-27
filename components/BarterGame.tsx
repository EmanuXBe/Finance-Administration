import React, { useState } from 'react';
import { Package, RefreshCw, CheckCircle2 } from 'lucide-react';

export const BarterGame: React.FC = () => {
  const [inventory, setInventory] = useState<string[]>(['Ladrillos']);
  const [log, setLog] = useState<string[]>([
    'Inicio: Tienes muchos ladrillos sobrantes de la cantera.',
    'Misión: Necesitas conseguir COMIDA para tus trabajadores.'
  ]);
  const [gameState, setGameState] = useState<'playing' | 'won'>('playing');

  const trade = (targetItem: string, costItem: string, receivedItem: string) => {
    if (inventory.includes(costItem)) {
      const newInv = inventory.filter(i => i !== costItem);
      newInv.push(receivedItem);
      setInventory(newInv);
      setLog(prev => [`Intercambiaste ${costItem} por ${receivedItem}.`, ...prev]);
      
      if (receivedItem === 'Comida') {
        setGameState('won');
        setLog(prev => ['¡ÉXITO! Conseguiste comida para la obra.', ...prev]);
      }
    } else {
      setLog(prev => [`FALLO: El comerciante quiere ${costItem}, pero no lo tienes.`, ...prev]);
    }
  };

  const reset = () => {
    setInventory(['Ladrillos']);
    setLog(['Reinicio: Tienes Ladrillos. Necesitas Comida.']);
    setGameState('playing');
  };

  return (
    <div className="bg-khaki-beige p-6 rounded-sm shadow-xl max-w-2xl mx-auto border border-saddle-brown">
      <h3 className="text-xl font-heading text-dark-walnut mb-4 flex items-center gap-2 border-b border-saddle-brown/30 pb-2">
        <Package size={24} className="text-saddle-brown" />
        Simulación: El Enredo del Trueque
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Market */}
        <div className="space-y-4">
          <p className="text-ebony text-sm mb-2 font-heading font-bold">Mercado Local</p>
          
          <div className="bg-white/60 p-4 rounded border border-dry-sage-2">
            <h4 className="font-bold text-dark-walnut font-heading">Granjero</h4>
            <p className="text-xs text-saddle-brown mb-2">Tiene: Comida</p>
            <p className="text-xs text-dusty-olive mb-2 font-bold">Quiere: Herramientas</p>
            <button 
              onClick={() => trade('Granjero', 'Herramientas', 'Comida')}
              disabled={gameState === 'won'}
              className="w-full bg-saddle-brown hover:bg-toffee-brown disabled:opacity-50 text-khaki-beige py-1 px-3 rounded-sm text-sm transition shadow-sm"
            >
              Ofrecer Herramientas
            </button>
            <button 
              onClick={() => trade('Granjero', 'Ladrillos', 'Comida')}
              disabled={gameState === 'won'}
              className="w-full mt-2 bg-dry-sage-2 hover:bg-dry-sage disabled:opacity-50 text-charcoal-brown py-1 px-3 rounded-sm text-sm transition border border-saddle-brown/30"
            >
              Ofrecer Ladrillos
            </button>
          </div>

          <div className="bg-white/60 p-4 rounded border border-dry-sage-2">
            <h4 className="font-bold text-dark-walnut font-heading">Herrero</h4>
            <p className="text-xs text-saddle-brown mb-2">Tiene: Herramientas</p>
            <p className="text-xs text-dusty-olive mb-2 font-bold">Quiere: Ladrillos</p>
            <button 
               onClick={() => trade('Herrero', 'Ladrillos', 'Herramientas')}
               disabled={gameState === 'won'}
               className="w-full bg-saddle-brown hover:bg-toffee-brown disabled:opacity-50 text-khaki-beige py-1 px-3 rounded-sm text-sm transition shadow-sm"
            >
              Ofrecer Ladrillos
            </button>
          </div>
        </div>

        {/* Player Status */}
        <div className="flex flex-col h-full">
          <div className="bg-white/80 p-4 rounded border border-camel mb-4">
            <h4 className="font-bold text-dark-walnut mb-2 font-heading">Tu Inventario</h4>
            <div className="flex flex-wrap gap-2">
              {inventory.map((item, idx) => (
                <span key={idx} className="bg-khaki-beige text-dark-walnut px-2 py-1 rounded-sm text-sm border border-saddle-brown/50 font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-dry-sage/30 p-3 rounded-sm flex-grow font-mono text-xs overflow-y-auto h-32 border border-dry-sage-2 shadow-inner text-charcoal-brown">
            {log.map((entry, i) => (
              <div key={i} className={`mb-1 ${entry.includes('ÉXITO') ? 'text-dusty-olive font-bold' : entry.includes('FALLO') ? 'text-red-700' : 'text-ebony'}`}>
                {entry.includes('ÉXITO') ? '✓ ' : '> '} {entry}
              </div>
            ))}
          </div>

          {gameState === 'won' && (
            <div className="mt-4 bg-dusty-olive/20 p-3 rounded border border-dusty-olive text-dusty-olive font-bold text-sm flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>¡Misión Cumplida!</span>
            </div>
          )}
          
          <button onClick={reset} className="mt-4 flex items-center justify-center gap-2 text-saddle-brown hover:text-dark-walnut text-sm transition">
            <RefreshCw size={14} /> Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};