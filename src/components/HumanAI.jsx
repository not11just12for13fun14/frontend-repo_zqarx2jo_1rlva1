import React from 'react'
import { motion } from 'framer-motion'

export default function HumanAI() {
  return (
    <section className="relative py-28" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(50% 60% at 70% 30%, rgba(111,74,255,0.18), rgba(10,15,31,0)), radial-gradient(40% 40% at 20% 80%, rgba(75,226,255,0.14), rgba(10,15,31,0))' }} />
          <div className="relative grid md:grid-cols-2 gap-6 p-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Human + AI</h3>
              <p className="mt-3 text-slate-300">
                Loops does not replace creative teams. It frees them from repetitive production so they can focus on strategy, ideation, and artistic direction.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-white/10 bg-white/5">
                <div className="w-8 h-8 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #4BE2FF, #6F4AFF)' }} />
                <div className="text-slate-300 text-sm">Loopi passes the torch</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                <motion.div className="absolute inset-10 rounded-3xl border border-white/10 bg-white/5" animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.div className="absolute inset-20 rounded-full" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ background: 'radial-gradient(circle, rgba(111,74,255,0.25), rgba(75,226,255,0.2))' }} />
                <motion.div className="absolute inset-0 m-auto w-28 h-28 rounded-full ring-2 ring-white/20" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ background: 'radial-gradient(circle at 40% 40%, #4BE2FF, #6F4AFF)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
