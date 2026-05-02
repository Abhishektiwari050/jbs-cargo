"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";

export const FeaturesSection = () => {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-[6rem] font-black tracking-tighter text-[var(--color-brand-blue)] uppercase font-display leading-[0.9]">
              The JBS <br />
              <span className="text-[var(--color-brand-orange)]">Advantage.</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-medium max-w-sm">
            Leveraging next-gen infrastructure to redefine cargo velocity across the Indian subcontinent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[var(--color-brand-blue)] min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-black tracking-[-0.015em] text-white uppercase font-display">
                Automated Hub <br /> Coordination.
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200 font-medium">
                Our Dadri Mega-Hub utilizes 80% automated sorting, reducing transition times by 40% for express shipments.
              </p>
            </div>
            <Image
              src="/images/warehouse.png"
              width={500}
              height={500}
              alt="Warehouse technology"
              className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl opacity-80"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-900">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-black tracking-[-0.015em] text-white uppercase font-display">
              Real-time <br /> Telemetry.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-medium">
              Every vehicle in our 70+ fleet is equipped with active GPS and temperature monitoring.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[var(--color-brand-orange)] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-black tracking-[-0.015em] text-white uppercase font-display">
                Enterprise <br /> Grade Mobility.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-medium">
                Dedicated customer portal with one-click manifests and instant POD retrieval.
              </p>
            </div>
            <Image
              src="/images/tracking-app.png"
              width={500}
              height={500}
              alt="Logistics App"
              className="absolute -right-10 md:-right-[10%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};
