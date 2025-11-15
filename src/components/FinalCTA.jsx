import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <motion.div className="absolute -inset-10 blur-3xl opacity-60" animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity }} style={{ background: 'conic-gradient(from 0deg at 50% 50%, #6F4AFF, #4BE2FF, #6F4AFF)' }} />
          <div className="relative p-10 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Accelerate your growth with the Loops Creative Engine.</h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#demo" className="relative group">
                <span className="absolute -inset-0.5 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition" style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }} />
                <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-slate-900" style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }}>
                  Try the demo
                </span>
              </a>
              <a href="#cta" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
