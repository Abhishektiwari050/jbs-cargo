import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { 
  Rocket, 
  Building2, 
  Truck, 
  Globe, 
  Trophy, 
  Zap, 
  Users,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export function HeritageTimeline() {
  const data = [
    {
      title: "2006",
      content: (
        <CardSpotlight color="orange" className="p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl">
              <Building2 className="w-8 h-8 text-[var(--color-brand-orange)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">The Genesis</p>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter">Delhi Foundations</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed mb-6">
            JBS Cargo Movers was founded with a singular vision: to redefine logistics in the Delhi-NCR region through absolute transparency and reliability.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-100 text-[10px] font-bold text-neutral-500 rounded-full uppercase tracking-wider border border-black/5">Delhi-NCR Reach</span>
            <span className="px-3 py-1 bg-neutral-100 text-[10px] font-bold text-neutral-500 rounded-full uppercase tracking-wider border border-black/5">Core Team of 10+</span>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "2012",
      content: (
        <CardSpotlight color="blue" className="p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <Truck className="w-8 h-8 text-[var(--color-brand-blue)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">Infrastructure</p>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter">The Fleet Surge</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed mb-6">
            Transitioned from a service provider to an asset-heavy infrastructure company, acquiring a dedicated fleet of specialized cargo container vehicles.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                <p className="text-xl font-black text-[var(--color-brand-orange)]">50+</p>
                <p className="text-[10px] font-bold text-neutral-400 uppercase">Owned Vehicles</p>
             </div>
             <div className="p-4 bg-slate-50 rounded-2xl border border-black/5">
                <p className="text-xl font-black text-[var(--color-brand-orange)]">24/7</p>
                <p className="text-[10px] font-bold text-neutral-400 uppercase">Dedicated Ops</p>
             </div>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "2018",
      content: (
        <CardSpotlight color="orange" className="p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl">
              <Globe className="w-8 h-8 text-[var(--color-brand-orange)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">Technology</p>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter">Digital Frontier</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed mb-8">
            Integrated real-time GPS tracking and ERP systems across the entire operation, bringing global-standard visibility to domestic logistics.
          </p>
          <div className="bg-[var(--color-brand-blue)] text-white p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-orange-400" />
              <p className="text-sm font-black uppercase tracking-widest">Digital Security</p>
            </div>
            <p className="text-xs opacity-80 leading-relaxed font-medium">99.9% Tracking accuracy achieved across 28 Indian states.</p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "2023",
      content: (
        <CardSpotlight color="blue" className="p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <Rocket className="w-8 h-8 text-[var(--color-brand-blue)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">Evolution</p>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter">Strategic Rebrand</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed mb-8">
            Under the leadership of Lalit Saini and Preet Saini, JBS Cargo Movers pivoted to a more integrated "Cargo & Workforce" model, serving blue-chip giants.
          </p>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center">
                    <Users className="w-4 h-4 text-neutral-400" />
                  </div>
                ))}
             </div>
             <p className="text-[10px] font-bold text-neutral-400 uppercase ml-2 tracking-widest">Enterprise Support Team</p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "2024",
      content: (
        <CardSpotlight color="orange" className="p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-500/10 rounded-2xl">
              <Trophy className="w-8 h-8 text-[var(--color-brand-orange)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-xs uppercase tracking-[0.2em]">Recognition</p>
              <h3 className="text-2xl md:text-3xl font-black text-[var(--color-brand-blue)] tracking-tighter">National Excellence</h3>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-neutral-600 text-sm md:text-base font-medium leading-relaxed">
              Achieved a prestigious 5.0-star rating on Justdial and expanded operations to encompass a massive network of surface and air cargo routes.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-black text-[var(--color-brand-orange)] uppercase">User Satisfaction</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Zap key={s} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
            </div>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "2025",
      content: (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CardSpotlight color="blue" className="p-8 md:p-12 bg-slate-900 border-none">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/50 font-black text-xs uppercase tracking-[0.2em]">The Future</p>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">Integrated Ecosystem</h3>
              </div>
            </div>
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-8">
              Moving beyond logistics into a unified enterprise ecosystem where workforce solutions and cargo movement operate in perfect, tech-driven harmony.
            </p>
            <div className="p-[1px] bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl overflow-hidden">
              <div className="bg-slate-950 p-4 rounded-[calc(1rem-1px)] text-center">
                <p className="text-xs font-black text-white uppercase tracking-[0.3em]">Building India's Backbone</p>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
