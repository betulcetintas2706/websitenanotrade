
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const AlphaAccessSection: React.FC = () => {
  return (
    <div id="alpha" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-[64px] p-12 md:p-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <div className="text-purple-500 font-black text-[10px] uppercase tracking-[0.5em]">Join the Alpha</div>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">Alpha Access</h2>
                    <p className="text-slate-400 text-xl font-medium">Get early access to our chip simulation.</p>
                    <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                        TARGET: TINYTAPEOUT 400MHZ
                    </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Legal Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Corporate Email</label>
                        <input 
                          type="email" 
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>
                    <button className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-purple-500 hover:text-white transition-all group">
                        Submit Application
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaAccessSection;
