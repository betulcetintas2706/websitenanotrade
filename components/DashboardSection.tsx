
import React from 'react';
import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { InteractiveText } from './Hero';

const data = [
  { time: '0ms', load: 12 },
  { time: '1ms', load: 15 },
  { time: '2ms', load: 8 },
  { time: '3ms', load: 45 },
  { time: '4ms', load: 120 },
  { time: '5ms', load: 85 },
  { time: '6ms', load: 150 },
  { time: '7ms', load: 160 },
];

const DashboardSection: React.FC = () => {
  return (
    <div id="simulation" className="py-40 px-6 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 pointer-events-auto">
          <div className="text-purple-600 font-black tracking-[0.4em] uppercase text-[10px] mb-6">
            Hardware Validation
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tight mb-8">Live Market Streaming</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            NanoTrade is validated using active, real-time simulation. True WebSocket market feeds from Coinbase and Binance are streamed directly into the RTL via cocotb.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-slate-50 p-12 rounded-[48px] border border-black/5 relative overflow-hidden">
            {/* Background Lines */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 40px' }} />
            
            <div className="flex justify-between items-center mb-12 relative z-10">
              <h3 className="font-black text-black uppercase tracking-widest text-xs">RTL Verification Pipeline (cocotb)</h3>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7] animate-pulse" />
                <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Live Feed Active</span>
              </div>
            </div>
            <div className="h-[350px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A855F7" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="time" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFF', borderColor: '#E2E8F0', borderRadius: '16px', color: '#000' }}
                    itemStyle={{ color: '#A855F7' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="load" 
                    stroke="#A855F7" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorLoad)" 
                    dot={{ fill: '#A855F7', strokeWidth: 2, r: 4, stroke: '#FFF' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-slate-50 p-10 rounded-[40px] border border-black/5 flex flex-col justify-between h-full group hover:border-purple-500/30 transition-all hover:bg-white hover:shadow-xl">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Verification Status</div>
                <div className="text-6xl font-black mb-4 mono text-black">100<span className="text-purple-600">%</span></div>
                <div className="text-purple-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <span>Deterministic Coverage</span>
                </div>
              </div>
              <div className="mt-12 space-y-6">
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Testbench</span>
                  <span className="font-black mono text-sm text-black uppercase">cocotb</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Simulator</span>
                  <span className="font-black mono text-sm text-purple-600 uppercase">Icarus Verilog</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Clock Domains</span>
                  <span className="font-black mono text-sm text-purple-600 uppercase">Fixed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-slate-50 rounded-3xl border border-black/5">
                <h4 className="text-black font-black uppercase text-xs tracking-widest mb-4">Deterministic Verification</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Verified alert timing, cascade detection, and circuit-breaker activation. Zero nondeterministic behavior observed. Simulation demonstrates sub-microsecond reaction to real market events — before software systems can context-switch.
                </p>
            </div>
            <div className="p-8 bg-purple-500/5 rounded-3xl border border-purple-500/10">
                <h4 className="text-purple-600 font-black uppercase text-xs tracking-widest mb-4">Live Market Feeds</h4>
                <p className="text-purple-900/60 text-sm leading-relaxed">
                    Hardware reacts to actual market volatility in simulation. Live feeds are enabled for local demos and validation, while recorded market traces are used for CI and GitHub Actions.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
