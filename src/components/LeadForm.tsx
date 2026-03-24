"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[var(--color-surface-light)] border border-[var(--color-brand-blue)]/10 p-10 rounded-3xl text-center max-w-lg mx-auto shadow-2xl"
      >
        <div className="w-20 h-20 bg-[var(--color-brand-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-black text-[var(--color-brand-blue)] mb-4">Quote Requested</h3>
        <p className="text-[var(--color-text-secondary)] font-medium">
          Our logistics engineers are analyzing your route. We will contact you within 2 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="surface-lift p-8 md:p-12 rounded-3xl relative overflow-hidden group">
      {/* Structural Grain overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-surface-light)] to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700" />
      
      <h3 className="text-3xl font-black text-[var(--color-brand-blue)] mb-2 uppercase tracking-tighter font-display">
        Enterprise Inquiry
      </h3>
      <p className="text-[var(--color-text-secondary)] mb-8 font-medium">Global freight forwarding and technical logistics.</p>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Company Name</label>
            <input id="companyName" placeholder="Acme Corp" title="Company Name" required type="text" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
          </div>
          <div className="space-y-2">
            <label htmlFor="workEmail" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Work Email</label>
            <input id="workEmail" placeholder="ops@enterprise.com" title="Work Email" required type="email" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Phone Number</label>
            <input id="phone" placeholder="+91 XXXX-XXXXXX" title="Phone Number" required type="tel" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
          </div>
          <div className="space-y-2">
            <label htmlFor="volume" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Shipment Volume</label>
            <input id="volume" placeholder="e.g. 50+ Containers" title="Shipment Volume" required type="text" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
          </div>
          <div className="space-y-2">
            <label htmlFor="shipDate" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Est. Shipment Date</label>
            <input id="shipDate" title="Shipment Date" required type="date" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all font-medium text-[var(--color-text-secondary)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
             <label htmlFor="origin" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Origin Hub</label>
             <input id="origin" placeholder="e.g. ICD Dadri / Mumbai" title="Origin" required type="text" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
           </div>
           <div className="space-y-2">
             <label htmlFor="destination" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Destination Hub</label>
             <input id="destination" placeholder="e.g. Kathmandu / Dubai" title="Destination" required type="text" className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all placeholder:text-gray-400 font-medium" />
           </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="logisticsService" className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest">Service Division</label>
          <select id="logisticsService" title="Select Service" required className="w-full bg-[var(--color-surface-soft)] px-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--color-brand-orange)] outline-none transition-all appearance-none cursor-pointer font-medium text-[var(--color-text-secondary)]">
            <option value="">Select Service Division...</option>
            <option value="cold_chain">Cold Chain Operations</option>
            <option value="freight">Freight Forwarding (Ocean/Air)</option>
            <option value="cha">Customs & Compliance</option>
            <option value="cross_border">Cross-Border (Nepal/Bhutan)</option>
            <option value="auto">Automobile Logistics</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={submitting}
          className="w-full py-5 bg-[var(--color-brand-blue)] text-white rounded-xl font-black text-xl hover:bg-[var(--color-brand-orange)] transition-all duration-500 disabled:opacity-70 mt-4 shadow-2xl hover:shadow-[var(--color-brand-orange)]/30 uppercase tracking-tighter"
        >
          {submitting ? "PROCESSING..." : "SUBMIT LOGISTICS REQUEST"}
        </button>
      </form>
    </div>
  );
}
