
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Shield, Server, Globe, Code } from 'lucide-react';

const HackathonSection: React.FC = () => {
  const metrics = [
    { label: 'Matching Latency', value: '<100ns', icon: <Zap className="w-4 h-4" /> },
    { label: 'Throughput', value: '10M+/s', icon: <Activity className="w-4 h-4" /> },
    { label: 'Clock', value: '400 MHz', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Power', value: '8-15 mW', icon: <Zap className="w-4 h-4" /> },
    { label: 'Unit Cost', value: '$500', icon: <Server className="w-4 h-4" /> },
    { label: 'TinyTapeout', value: 'Sky130', icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <div id="documentation" className="py-40 px-6 bg-slate-50 border-y border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.5em]">Event Spotlight</div>
            <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none">HFT ASIC<br />HACKATHON</h2>
            <p className="text-slate-500 text-xl font-medium">AI-Powered Matching Engine.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-purple-600"><Code className="w-6 h-6" /></div>
             <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-amber-600"><Shield className="w-6 h-6" /></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:text-purple-600 transition-colors">
                {m.icon}
              </div>
              <div className="text-2xl font-black text-black mb-1">{m.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Animated Visual Elements */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-[40px] overflow-hidden bg-black group">
                <img 
                  src="https://picsum.photos/seed/asic/800/450" 
                  alt="ASIC Circuitry" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                    <div className="text-white font-black text-2xl uppercase tracking-tighter">Silicon Core</div>
                    <div className="text-purple-400 text-[10px] font-black uppercase tracking-widest">SkyWater Technology</div>
                </div>
            </div>
            <div className="space-y-8">
                <div className="p-8 bg-white rounded-[32px] border border-black/5 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                        <Server className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-black text-black uppercase tracking-tight mb-2">Institutional Infrastructure</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Designed for co-located matching with built-in surveillance. Sub-100ns latency with real-time anomaly detection.</p>
                    </div>
                </div>
                <div className="p-8 bg-white rounded-[32px] border border-black/5 shadow-sm flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-black text-black uppercase tracking-tight mb-2">Cyber Security Native</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Every rule is etched into silicon. No OS, no kernel, no network stack vulnerabilities.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonSection;
