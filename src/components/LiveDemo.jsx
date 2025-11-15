import React from 'react'
import { motion } from 'framer-motion'

export default function LiveDemo() {
  return (
    <section id="demo" className="relative py-28" style={{ backgroundColor: '#0A0F1F' }}>
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-bold text-white">Live Demo</h3>
        <p className="text-center mt-3 text-slate-300">Watch an ad generate itself.</p>

        <div className="mt-10 relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <div className="ml-3 text-slate-300 text-sm">Loops Creative Engine</div>
          </div>

          <div className="p-6 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                {/* Elements fly in and place */}
                {[
                  { w: 'w-48', h: 'h-8', y: -30, x: -120, d: 0 },
                  { w: 'w-72', h: 'h-10', y: 40, x: 200, d: 0.2 },
                  { w: 'w-40', h: 'h-40', y: 50, x: -200, d: 0.4 },
                  { w: 'w-56', h: 'h-6', y: -100, x: 100, d: 0.6 },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: b.x, y: b.y }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.4 + b.d, type: 'spring', stiffness: 120, damping: 14 }}
                    viewport={{ once: true }}
                    className={`absolute left-6 top-6 ${b.w} ${b.h} rounded-lg`}
                    style={{ background: 'linear-gradient(135deg, rgba(111,74,255,0.6), rgba(75,226,255,0.6))' }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }} className="rounded-xl p-4 border border-white/10 bg-white/5">
                  <div className="text-slate-200 font-medium">Generated Variant #{i + 1}</div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div className="h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${60 + i * 8}%` }} transition={{ duration: 1.2 }} style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
