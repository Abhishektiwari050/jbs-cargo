import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HeritageTimeline() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            Foundation & Vision
          </p>
          <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-100 rounded-3xl p-6 border border-black/5">
                <p className="text-2xl font-black text-[var(--color-brand-blue)]">Strategic Launch</p>
                <p className="text-sm font-medium text-neutral-600">Established JBS Cargo Movers in New Delhi with a focus on premium logistics.</p>
              </div>
              <div className="bg-neutral-100 rounded-3xl p-6 border border-black/5">
                <p className="text-2xl font-black text-[var(--color-brand-blue)]">Pan-India Network</p>
                <p className="text-sm font-medium text-neutral-600">Rapidly scaled to cover 28 states with 24/7 domestic operations.</p>
              </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            Operations & Scale
          </p>
          <p className="text-neutral-700 text-sm md:text-base font-medium mb-8">
            Under the leadership of Lalit and Preet Saini, we optimized our hub-and-spoke model to achieve a 5.0-star service rating on Justdial.
          </p>
          <div className="bg-[var(--color-brand-blue)] text-white p-8 rounded-[3rem] shadow-2xl">
             <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">Service Excellence</h4>
             <p className="opacity-80 font-medium">Achieved industry-leading delivery speeds through dedicated air and surface channels.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-black uppercase mb-4 tracking-widest">
            JBS Cargo Movers Today
          </p>
          <p className="text-neutral-700 text-sm md:text-base font-medium mb-4">
            Today, we operate as a unified entity, providing seamless logistics and workforce solutions for modern enterprises across India.
          </p>
          <div className="bg-[var(--color-brand-orange)] text-white p-8 rounded-[3rem] shadow-2xl">
             <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">Integrated Future</h4>
             <p className="opacity-80 font-medium">Delivering reliability through a balanced mix of professional logistics and expert manpower.</p>
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
