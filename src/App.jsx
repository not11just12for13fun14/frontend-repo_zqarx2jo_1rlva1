import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import LiveDemo from './components/LiveDemo'
import Proof from './components/Proof'
import HumanAI from './components/HumanAI'
import FinalCTA from './components/FinalCTA'
import Navigation from './components/Navigation'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1F' }}>
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <LiveDemo />
      <Proof />
      <HumanAI />
      <FinalCTA />
      <footer className="py-10 text-center text-slate-400" style={{ backgroundColor: '#0A0F1F' }}>
        © {new Date().getFullYear()} Loops. All rights reserved.
      </footer>
    </div>
  )
}
