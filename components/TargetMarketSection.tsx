
import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Coins, Zap } from 'lucide-react';

const TargetMarketSection: React.FC = () => {
  const markets = [
    {
      title: 'Stock Exchanges',
      subtitle: 'NASDAQ, NYSE, CME',
      description: 'Co-located matching with built-in surveillance. Sub-100ns latency with real-time anomaly detection.',
      icon: <Landmark className="w-8 h-8" />,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Crypto Exchanges',
      subtitle: 'Binance, Coinbase, Kraken',
      description: 'High-frequency order flow with built-in manipulation detection. 1000× faster, 100× cheaper than FPGAs.',
      icon: <Coins className="w-8 h-8" />,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'HFT Firms',
      subtitle: 'Proprietary Trading',
      description: 'Co-located matching with built-in surveillance. Detects spoofing, wash trades, and flash crashes in real-time at hardware speed.',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <div className="py-40 px-6 bg-slate-50 border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Market</div>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tight mb-8">Target Market — $5B+ Annually</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Our architecture is designed for the most demanding institutional trading environments on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {markets.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[48px] border border-black/5 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${m.color}`}>
                {m.icon}
              </div>
              <h3 className="text-3xl font-black text-black mb-2">{m.title}</h3>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">{m.subtitle}</div>
              <p className="text-slate-500 leading-relaxed">{m.description}</p>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-slate-100" />
                <div className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Institutional</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetMarketSection;
