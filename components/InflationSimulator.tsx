import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

export const InflationSimulator: React.FC = () => {
  const [initialCost, setInitialCost] = useState<number>(1000000); // 1 Million
  const [inflationRate, setInflationRate] = useState<number>(10); // 10%
  const [years, setYears] = useState<number>(5);

  const data = useMemo(() => {
    const points = [];
    let currentCost = initialCost;
    let purchasingPower = 100;

    for (let i = 0; i <= years; i++) {
      points.push({
        year: i,
        nominalCost: Math.round(currentCost),
        power: Math.round(purchasingPower)
      });
      currentCost = currentCost * (1 + inflationRate / 100);
      purchasingPower = purchasingPower / (1 + inflationRate / 100);
    }
    return points;
  }, [initialCost, inflationRate, years]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-khaki-beige p-6 rounded-sm shadow-xl max-w-4xl mx-auto border border-saddle-brown">
      <h3 className="text-xl font-heading text-dark-walnut mb-4 flex items-center gap-2 border-b border-saddle-brown/30 pb-2">
        <TrendingUp size={24} className="text-saddle-brown" />
        Desafío: El Costo del Futuro
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-ebony mb-1 font-heading font-bold">Costo Inicial</label>
            <input 
              type="number" 
              value={initialCost}
              onChange={(e) => setInitialCost(Number(e.target.value))}
              className="w-full bg-white/70 border border-dry-sage-2 rounded-sm px-3 py-2 text-dark-walnut focus:border-saddle-brown outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-sm text-ebony mb-1 font-heading font-bold">Inflación Anual ({inflationRate}%)</label>
            <input 
              type="range" 
              min="0" 
              max="50" 
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full h-2 bg-dry-sage-2 rounded-lg appearance-none cursor-pointer accent-saddle-brown"
            />
          </div>

          <div>
            <label className="block text-sm text-ebony mb-1 font-heading font-bold">Duración (Años)</label>
            <select 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full bg-white/70 border border-dry-sage-2 rounded-sm px-3 py-2 text-dark-walnut"
            >
              <option value={3}>3 Años</option>
              <option value={5}>5 Años</option>
              <option value={10}>10 Años</option>
            </select>
          </div>

          <div className="bg-white/40 p-4 rounded border border-red-900/20">
            <h4 className="text-red-800 font-bold text-sm mb-1 font-heading">Sobrecosto Final</h4>
            <p className="text-xl font-mono text-dark-walnut">
              {formatCurrency(data[data.length - 1].nominalCost - initialCost)}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 h-80 bg-white/50 rounded border border-dry-sage-2 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#a4ac86" />
              <XAxis dataKey="year" stroke="#414833" label={{ value: 'Años', position: 'insideBottomRight', offset: -5 }} />
              <YAxis yAxisId="left" stroke="#7f4f24" tickFormatter={(val) => `$${val/1000}k`} />
              <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#f3e5ab', borderColor: '#7f4f24', color: '#2c1810' }}
                formatter={(value: number, name: string) => [
                  name === 'nominalCost' ? formatCurrency(value) : `${value}%`, 
                  name === 'nominalCost' ? 'Costo Nominal' : 'Poder Adquisitivo'
                ]}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="nominalCost" name="Costo Nominal" stroke="#7f4f24" strokeWidth={3} dot={{r: 4}} />
              <Line yAxisId="right" type="monotone" dataKey="power" name="Poder Adquisitivo" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};