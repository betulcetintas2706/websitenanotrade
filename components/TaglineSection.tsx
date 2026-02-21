
import React from 'react';
import { motion } from 'framer-motion';

const TaglineSection: React.FC = () => {
  return (
    <div className="py-40 px-6 relative overflow-hidden bg-white">
      {/* Subtle 3D-like background elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-black rounded-full rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black rounded-full -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-purple-600 font-black text-[10px] uppercase tracking-[0.4em]">Performance</div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none">Ultra Low Latency</h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
            We removed the operating system overhead. Every rule is etched into the target Sky130 silicon layer for &lt;100ns matching latency.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="text-amber-600 font-black text-[10px] uppercase tracking-[0.4em]">Security</div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none">Real-Time Anomaly Detection</h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
            An onboard multi-layer perceptron analyzes quoting behavior in real-time, autonomously triggering the hardware circuit breaker.
          </p>
        </motion.div>
      </div>

      {/* Animated 3D Trading Visuals (Subtle) */}
      <div className="mt-32 h-[400px] w-full relative overflow-hidden rounded-[40px] border border-black/5 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 180, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border-2 border-purple-500/20 rounded-3xl transform-3d flex items-center justify-center"
            >
                <div className="w-32 h-32 border border-amber-500/30 rounded-full" />
            </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
      </div>
    </div>
  );
};

export default TaglineSection;
