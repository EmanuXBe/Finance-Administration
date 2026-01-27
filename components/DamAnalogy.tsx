import React, { useState } from 'react';
import { Droplets, ShieldAlert, BadgeCheck } from 'lucide-react';

export const DamAnalogy: React.FC = () => {
  // 0 = Empty (Recession), 50 = Optimal, 100 = Flood (Inflation)
  const [waterLevel, setWaterLevel] = useState<number>(50);

  const getStatus = () => {
    if (waterLevel < 30) return { 
      status: 'SEQUÍA (Recesión)', 
      desc: 'No hay suficiente dinero. La economía se seca.',
      color: 'text-orange-700',
    };
    if (waterLevel > 70) return { 
      status: 'INUNDACIÓN (Inflación)', 
      desc: 'Demasiado dinero. El valor se diluye y desborda.',
      color: 'text-red-700',
    };
    return { 
      status: 'NIVEL ÓPTIMO', 
      desc: 'Flujo controlado y crecimiento estable.',
      color: 'text-dusty-olive',
    };
  };

  const status = getStatus();

  return (
    <div className="bg-khaki-beige p-6 rounded-sm shadow-xl max-w-3xl mx-auto border border-saddle-brown">
      <h3 className="text-xl font-heading text-dark-walnut mb-6 flex items-center gap-2 border-b border-saddle-brown/30 pb-2">
        <Droplets size={24} className="text-saddle-brown" />
        La Represa Monetaria
      </h3>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Visualization */}
        <div className="relative w-48 h-64 border-4 border-charcoal-brown rounded-b-lg bg-dry-sage-2/50 overflow-hidden shadow-inner">
          {/* Wall of Dam */}
          <div className="absolute top-0 left-0 w-4 h-full bg-charcoal-brown z-20"></div>
          <div className="absolute top-0 right-0 w-4 h-full bg-charcoal-brown z-20"></div>
          
          {/* Water */}
          <div 
            className="absolute bottom-0 w-full transition-all duration-700 ease-in-out bg-blue-600/70 backdrop-blur-sm"
            style={{ height: `${waterLevel}%` }}
          >
            {/* Waves */}
            <div className="w-full h-2 bg-blue-400/50 absolute top-0 animate-pulse"></div>
          </div>

          {/* Markers */}
          <div className="absolute right-6 top-[30%] w-full border-t border-dashed border-red-700 text-[10px] text-red-800 text-right pr-2 font-bold">Riesgo Inflación</div>
          <div className="absolute right-6 top-[70%] w-full border-t border-dashed border-orange-700 text-[10px] text-orange-800 text-right pr-2 font-bold">Riesgo Recesión</div>
        </div>

        {/* Controls and Info */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-ebony">Control de Liquidez</span>
              <span className="text-sm font-mono text-saddle-brown font-bold">{waterLevel}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={waterLevel}
              onChange={(e) => setWaterLevel(Number(e.target.value))}
              className="w-full h-3 bg-dry-sage-2 rounded-lg appearance-none cursor-pointer accent-saddle-brown"
            />
          </div>

          <div className={`p-4 rounded border border-dry-sage-2 bg-white/40`}>
            <div className={`font-bold font-heading text-lg mb-1 flex items-center gap-2 ${status.color}`}>
              {waterLevel > 70 ? <ShieldAlert size={20}/> : waterLevel < 30 ? <ShieldAlert size={20}/> : <BadgeCheck size={20}/>}
              {status.status}
            </div>
            <p className="text-sm text-charcoal-brown leading-relaxed italic">
              {status.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};