import React from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ background: 'linear-gradient(180deg, rgba(10,15,31,0.8), rgba(10,15,31,0))' }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md" style={{ background: 'linear-gradient(135deg, #6F4AFF, #4BE2FF)' }} />
          <span className="text-white font-semibold">Loops</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#" className="hover:text-white transition">Product</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#cta" className="hover:text-white transition">Waitlist</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="relative group hidden sm:inline-flex">
            <span className="absolute -inset-0.5 rounded-xl blur-xl opacity-60 group-hover:opacity-90 transition" style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }} />
            <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-slate-900" style={{ background: 'linear-gradient(90deg, #6F4AFF, #4BE2FF)' }}>
              Join waitlist
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
