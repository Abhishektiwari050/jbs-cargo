"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const IndustryCard = ({ title, description, image, index }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[400px] w-full overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span className="text-[10px] font-black text-[var(--color-brand-orange)] uppercase tracking-[0.3em] mb-2 block">
            Sector 0{index + 1}
          </span>
          <h3 className="text-3xl font-black text-white uppercase font-display tracking-tighter mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-zinc-300 text-sm font-medium line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-white/0 transition-colors duration-300 group-hover:border-white/10 rounded-[2rem]" />
    </motion.div>
  );
};
