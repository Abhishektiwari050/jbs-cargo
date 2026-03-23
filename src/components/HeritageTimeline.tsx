import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HeritageTimeline() {
  const data = [
    {
      title: "2005",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            Founding & Core Infrastructure
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-neutral-100 rounded-3xl p-6 border border-black/5">
                <p className="text-2xl font-black text-[var(--color-brand-blue)]">Initial Fleet</p>
                <p className="text-sm font-medium text-neutral-600">Established core reefer operations in North India.</p>
             </div>
             <div className="bg-neutral-100 rounded-3xl p-6 border border-black/5">
                <p className="text-2xl font-black text-[var(--color-brand-blue)]">SAARC Expansion</p>
                <p className="text-sm font-medium text-neutral-600">Launched dedicated routes to Nepal and Bhutan.</p>
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            Technical Precision Era
          </p>
          <p className="text-neutral-700 text-sm md:text-base font-medium mb-8">
            Integrated real-time IoT monitoring across the entire cold chain fleet. Achieved 99.9% temperature compliance for global pharma giants.
          </p>
          <div className="bg-[var(--color-brand-blue)] text-white p-8 rounded-[3rem] shadow-2xl">
             <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">ICD Dadri Hub</h4>
             <p className="opacity-80 font-medium">Strategic partnership launched at the Dadri Inland Container Depot, revolutionizing custom clearance speeds.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            The Digital Nexus
          </p>
          <p className="text-neutral-700 text-sm md:text-base font-medium mb-4">
            Today, JBS Cargo operates as a technical logistics architectural firm, blending heritage reliability with AI-driven route optimization.
          </p>
          <div className="bg-[var(--color-brand-orange)] text-white p-8 rounded-[3rem] shadow-2xl">
             <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">The 20-Year Milestone</h4>
             <p className="opacity-80 font-medium">Over 5 Million Tonnages moved with zero structural failures.</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
