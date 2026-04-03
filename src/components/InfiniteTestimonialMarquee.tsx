"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "JBS Cargo's reefer network is unparalleled. Their commitment to 14.2°C precision for our biologics has been a turning point for our supply chain reliability.",
    name: "Dr. Arvin Mehta",
    title: "Supply Chain Director, Global Pharma Corp",
  },
  {
    quote: "The move to ICD Dadri was seamless thanks to the JSB onsite team. Their technical approach to logistics isn't just a service; it's a competitive advantage.",
    name: "Sarah Chen",
    title: "Logistics Lead, Tech Global Solutions",
  },
  {
    quote: "Twenty years of heritage shows in every interaction. From reefer monitoring to customs clearance at the border, JBS handles the complex with industrial ease.",
    name: "Capt. Rajesh Varma",
    title: "Operations Head, SAARC Logistics Group",
  },
];

export const InfiniteTestimonialMarquee = () => {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};
