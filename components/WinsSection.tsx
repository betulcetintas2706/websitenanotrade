
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WinsSection: React.FC = () => {
  return (
    <div className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
                <div>
                    <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">The Edge</div>
                    <h2 className="text-4xl md:text-7xl font-black text-black tracking-tight leading-none">Why NanoTrade Wins</h2>
                </div>
                
                <p className="text-slate-500 text-xl leading-relaxed">
                    Current exchanges choose between speed (FPGAs for matching) and safety (slow software for monitoring). We're the first ASIC that delivers both on a single chip—faster matching than any FPGA, with real-time AI anomaly detection that can stop the next Flash Crash in microseconds instead of minutes.
                </p>

                <div className="space-y-6">
                    {[
                        'Monolithic Die Integration',
                        'Hardware-Native Circuit Breaker',
                        'Zero-Jitter Determinism',
                        '95%+ Anomaly Sensitivity'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-black font-black uppercase tracking-widest text-xs">
                            <CheckCircle2 className="w-5 h-5 text-purple-600" />
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="relative">
                <div className="aspect-square bg-slate-50 rounded-[64px] border border-black/5 p-12 flex items-center justify-center overflow-hidden">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-5"
                    >
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black" />
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black" />
                    </motion.div>
                    
                    <div className="relative z-10 text-center space-y-4">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Silicon Advantage</div>
                        <div className="text-8xl md:text-[12rem] font-black text-black tracking-tighter leading-none">1000X</div>
                        <div className="text-xl font-black text-purple-600 uppercase tracking-widest">Faster than Software</div>
                    </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute -top-10 -right-10 glass p-6 rounded-3xl border border-black/5 shadow-xl">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Cost Reduction</div>
                    <div className="text-2xl font-black text-black">100X</div>
                </div>
                <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border border-black/5 shadow-xl">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Power Efficiency</div>
                    <div className="text-2xl font-black text-black">2000X</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WinsSection;
