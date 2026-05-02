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
        <CardSpotlight color="orange" className="p-6 md:p-10 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-orange-500/10 rounded-xl">
              <Building2 className="w-6 h-6 text-[var(--color-brand-orange)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-[10px] uppercase tracking-[0.2em]">Genesis</p>
              <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] tracking-tighter">Delhi Foundations</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm font-medium leading-relaxed">
            Founded with a vision to redefine logistics in Delhi-NCR through absolute transparency.
          </p>
        </CardSpotlight>
      ),
    },
    {
      title: "2018",
      content: (
        <CardSpotlight color="orange" className="p-6 md:p-10 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-orange-500/10 rounded-xl">
              <Globe className="w-6 h-6 text-[var(--color-brand-orange)]" />
            </div>
            <div>
              <p className="text-neutral-900 font-black text-[10px] uppercase tracking-[0.2em]">Technology</p>
              <h3 className="text-xl md:text-2xl font-black text-[var(--color-brand-blue)] tracking-tighter">Digital Frontier</h3>
            </div>
          </div>
          <p className="text-neutral-600 text-sm font-medium leading-relaxed">
            Integrated real-time GPS tracking and ERP systems across the entire operation.
          </p>
        </CardSpotlight>
      ),
    },
    {
      title: "2024",
      content: (
        <CardSpotlight color="blue" className="p-6 md:p-10 bg-slate-900 border-none">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/10 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/50 font-black text-[10px] uppercase tracking-[0.2em]">Modern Era</p>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter">Integrated Ecosystem</h3>
            </div>
          </div>
          <p className="text-white/80 text-sm font-medium leading-relaxed">
            Unified enterprise ecosystem where workforce and cargo operate in tech-driven harmony.
          </p>
        </CardSpotlight>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
