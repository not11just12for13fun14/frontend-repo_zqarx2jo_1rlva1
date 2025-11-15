import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <section className="relative py-28" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="mb-4 text-sm uppercase tracking-widest text-slate-300">The problem</div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Creative testing is slow, expensive, repetitive</h3>
          <p className="mt-4 text-slate-300">and every brand follows the same process. Most tools generate low-quality concepts that ignore real creative strategist methods.</p>

          <div className="mt-8 relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle, #6F4AFF, transparent 60%)' }} />
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <motion.div key={i} className="aspect-video rounded-lg border border-white/10 bg-white/5" animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }} />
              ))}
            </div>
            <div className="mt-4 text-slate-400 text-sm">Chaotic pile of ads</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="mb-4 text-sm uppercase tracking-widest text-slate-300">The solution</div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Loops replicates elite creative teams</h3>
          <p className="mt-4 text-slate-300">scraping → pattern mining → structural analysis → replication → iteration.</p>

          <div className="mt-8 relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle, #4BE2FF, transparent 60%)' }} />
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <motion.div key={i} className="aspect-video rounded-lg border border-white/10 bg-white/5" whileHover={{ scale: 1.03 }} />
              ))}
            </div>
            <div className="mt-4 text-slate-400 text-sm">Clean aligned ads (Loops)</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
