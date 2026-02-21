
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Cpu } from 'lucide-react';
import { InteractiveText } from './Hero';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Speed Bottleneck",
      description: "Exchanges process 500M+ orders daily. Software engines take 50–100 microseconds per order—creating unfair advantages and bottlenecks.",
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Market Manipulation",
      description: "Flash Crash 2010: $1T erased in 15 minutes. Knight Capital 2012: $440M lost in 45 minutes. Current systems detect anomalies hours or days too late.",
      icon: <Activity className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Cost & Power",
      description: "FPGAs cost $50,000+ per unit and consume 15W+. $5M+ capital costs for large exchanges.",
      icon: <Cpu className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <div className="py-40 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <div className="flex items-center justify-center gap-3 text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_#F59E0B]" />
          Structural Vulnerability
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[0.95] flex flex-wrap justify-center">
          <InteractiveText text="The" className="mr-4" hoverColor="#F59E0B" />
          <InteractiveText text="Problem." className="text-amber-500 neon-orange" hoverColor="#FFFFFF" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((prob, i) => (
          <motion.div
            key={prob.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-[#111] rounded-[40px] border border-white/5 group hover:border-amber-500/30 transition-all hover:bg-[#161616]"
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
              {prob.icon}
            </div>
            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-amber-500 transition-colors uppercase tracking-tight">
              {prob.title}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              {prob.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Target Market Block */}
      <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="text-[10px] font-black uppercase tracking-[0.3em]">Target Market</div>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest">
          <span>Stock Exchanges</span>
          <span>Crypto Exchanges</span>
          <span>HFT Firms</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">$5B+ Global Infrastructure</div>
      </div>
    </div>
  );
};

export default ProblemSection;
