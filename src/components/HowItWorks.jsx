import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Scraping & Pattern Mining', desc: 'Crawls competitors, clusters winning motifs, maps performance.' },
  { title: 'Interpretation Layer', desc: 'Copy, hooks, visual logic — translated into creative blueprints.' },
  { title: 'Creative Replication', desc: 'Rebuilds structures adapted to your brand. No plagiarism.' },
  { title: 'Iteration Loop', desc: 'Daily generation with feedback-driven evolution.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-28" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-bold text-white">How Loops Works</h3>
        <p className="text-center mt-3 text-slate-300">Four steps. Fully automated.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative h-full rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
            >
              <motion.div className="absolute inset-x-0 top-0 h-px" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }} style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }} />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg" style={{ background: 'linear-gradient(135deg, #6F4AFF, #4BE2FF)' }} />
                <h4 className="text-white font-semibold">{s.title}</h4>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{s.desc}</p>
              {/* Micro-motion */}
              <motion.div className="mt-6 h-24 rounded-xl border border-white/10 bg-white/5" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }} />
              {/* Neon connectors */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-18px] top-1/2 -translate-y-1/2 w-9 h-px" style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
