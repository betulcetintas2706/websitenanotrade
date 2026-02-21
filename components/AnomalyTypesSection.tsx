
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, TrendingUp, RefreshCw, BarChart2, Zap } from 'lucide-react';

const AnomalyTypesSection: React.FC = () => {
  const anomalies = [
    {
      title: 'Flash Crash',
      subtitle: 'Rapid price decline',
      description: 'Price drops >5% in <10s',
      icon: <TrendingDown className="w-6 h-6" />,
      color: 'bg-red-50 text-red-600 border-red-100'
    },
    {
      title: 'Pump and Dump',
      subtitle: 'Artificial price inflation',
      description: 'Volume spike + rapid reversal',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600 border-green-100'
    },
    {
      title: 'Spoofing',
      subtitle: 'Fake order manipulation',
      description: 'Large orders with >80% cancel rate',
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      title: 'Wash Trading',
      subtitle: 'Self-trading for fake volume',
      description: 'Same counterparties trading repeatedly',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Liquidity Crisis',
      subtitle: 'Extreme order imbalance',
      description: 'Order book >95% on one side',
      icon: <BarChart2 className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      title: 'Volatility Spike',
      subtitle: 'Unusual price variation',
      description: 'Std dev exceeds 5× historical',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-100'
    }
  ];

  return (
    <div className="py-40 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Detection</div>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tight mb-8">Six Detected Anomaly Types</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Our on-chip MLP is trained to identify and halt these specific market manipulation patterns in microseconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anomalies.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[40px] border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${a.color}`}>
                {a.icon}
              </div>
              <h3 className="text-2xl font-black text-black mb-2">{a.title}</h3>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{a.subtitle}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{a.description}</p>
              
              <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Confidence</div>
                <div className="text-xs font-black text-black">98.4%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnomalyTypesSection;
