import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = {
  initial: { opacity: 0.6, scale: 1 },
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
  }
}

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.1 * i, duration: 0.6 } })
}

function AdCard({ i, title, color }) {
  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="relative overflow-hidden rounded-2xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl"
    >
      <div className={`absolute inset-0 opacity-20`} style={{ background: `radial-gradient(120px 120px at 10% 10%, ${color}, transparent)` }} />
      <div className="relative flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg" style={{ background: `linear-gradient(135deg, ${color}, #6F4AFF)` }} />
        <div>
          <p className="text-slate-200 text-sm">Concept</p>
          <h4 className="text-slate-50 font-semibold">{title}</h4>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="aspect-[4/5] rounded-lg bg-white/5 border border-white/10" />
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ads = [
    { title: 'Hook-first UGC Variations', color: '#6F4AFF' },
    { title: 'Comparative Carousels', color: '#4BE2FF' },
    { title: 'Benefit-led Static', color: '#9B8CFF' },
  ]

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center" style={{ backgroundColor: '#0A0F1F' }}>
      {/* 3D background via Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Holographic gradient overlay */}
      <motion.div
        variants={glow}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 30%, rgba(111,74,255,0.25) 0%, rgba(10,15,31,0.0) 60%), radial-gradient(40% 40% at 20% 80%, rgba(75,226,255,0.18) 0%, rgba(10,15,31,0) 60%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-[12px] text-slate-300 w-max">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4BE2FF' }} />
              AI Creative Engine
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              Your Creative Engine that works continuously, powered by competitor data.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
              Loops analyzes, learns, and generates new high-performing ads every day — fully automated.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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

            {/* Loopi mascot */}
            <motion.div
              className="mt-10 inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
              animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-8 h-8 rounded-full ring-2 ring-white/20" style={{ background: 'radial-gradient(circle at 30% 30%, #4BE2FF, #6F4AFF)' }} />
              <div className="text-slate-300 text-sm">
                Meet <span className="text-white font-semibold">Loopi</span> — your glowing creative sidekick
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel / Ads */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #6F4AFF, transparent 60%)' }} />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #4BE2FF, transparent 60%)' }} />
          <div className="relative grid gap-4">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              {ads.map((a, i) => (
                <AdCard key={i} i={i} title={a.title} color={a.color} />
              ))}
            </motion.div>
            {/* Autoplay strip */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}
            >
              <motion.div className="flex gap-3 p-4" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="min-w-[180px] aspect-video rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
