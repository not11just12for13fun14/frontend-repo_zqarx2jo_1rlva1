import React from 'react'
import { motion } from 'framer-motion'

export default function Proof() {
  const stats = [
    { label: '+20% ROAS', note: 'Average lift across pilots' },
    { label: '-70% creation time', note: 'Replace repetitive production' },
    { label: '7–10k MRR internal', note: 'Generated using Loops' },
  ]

  return (
    <section className="relative py-28" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-bold text-white">Proof & ROI</h3>
        <p className="text-center mt-3 text-slate-300">Real outcomes from automated iteration.</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur">
              <div className="text-white text-2xl font-bold">{s.label}</div>
              <div className="text-slate-400 mt-1 text-sm">{s.note}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {[...Array(12)].map((_, i) => (
            <motion.div key={i} className="aspect-[4/5] rounded-xl border border-white/10 bg-white/5" whileHover={{ y: -4 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
