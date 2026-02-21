
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Shield, Zap, AlertTriangle } from 'lucide-react';

const LogicFlowSection: React.FC = () => {
  const steps = [
    { label: 'Market Data In', icon: <Database className="w-5 h-5" />, color: 'text-blue-500' },
    { label: 'L1 Cache', icon: <Zap className="w-5 h-5" />, color: 'text-yellow-500' },
    { label: 'ML Confidence Gate', icon: <Cpu className="w-5 h-5" />, color: 'text-purple-500' },
    { label: '99% Anomaly', icon: <AlertTriangle className="w-5 h-5" />, color: 'text-orange-500' },
    { label: 'Circuit Breaker', icon: <Shield className="w-5 h-5" />, color: 'text-red-500' },
    { label: 'EXECUTION_HALT', icon: <Zap className="w-5 h-5" />, color: 'text-red-600' },
  ];

  return (
    <div className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Pipeline</div>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tight">Logic Flow Visualization</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 group relative"
              >
                <div className={`w-20 h-20 rounded-3xl bg-slate-50 border border-black/5 flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ${step.color}`}>
                  {step.icon}
                </div>
                <div className="text-[10px] font-black text-black uppercase tracking-widest text-center max-w-[100px]">
                  {step.label}
                </div>
                
                {/* Animated Pulse */}
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-3xl animate-ping pointer-events-none" />
              </motion.div>
              
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 'auto' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="hidden md:block text-slate-200"
                >
                  <ArrowRight className="w-6 h-6 animate-pulse" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
          
          {/* Background Flow Line */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-slate-100 -z-10 hidden md:block" />
        </div>

        <div className="mt-40 p-12 bg-slate-50 rounded-[48px] border border-black/5 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h3 className="text-3xl font-black text-black tracking-tight">Deterministic Execution</h3>
                    <p className="text-slate-500 leading-relaxed">
                        Unlike software engines that rely on OS thread scheduling, NanoTrade ASIC executes every instruction in a fixed number of clock cycles. This removes jitter entirely, providing a perfectly predictable latency profile for institutional HFT.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 bg-white rounded-2xl border border-black/5 shadow-sm">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Jitter</div>
                            <div className="text-xl font-black text-black">0.00ns</div>
                        </div>
                        <div className="px-6 py-3 bg-white rounded-2xl border border-black/5 shadow-sm">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reliability</div>
                            <div className="text-xl font-black text-black">99.999%</div>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-square bg-white rounded-[40px] shadow-2xl border border-black/5 p-8 flex items-center justify-center">
                    <div className="w-full h-full border border-slate-100 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        <div className="w-4 h-4 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                    </div>
                    <div className="absolute text-center">
                        <div className="text-5xl font-black text-black tracking-tighter">400</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MHz Target</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogicFlowSection;
