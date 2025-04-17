"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    })
  }, [controls])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-primary/30 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-primary/40 animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-primary/20 animate-pulse delay-700"></div>

        {/* Add stylish background elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/3 blur-3xl"></div>
      </div>

      {/* Blue glowing line at the top */}
      <div className="w-full max-w-3xl mx-auto mb-24">
        <div className="h-1 bg-cyan-500 rounded-full glow"></div>
      </div>

      {/* Trusted by badge */}
      <div className="button-glow inline-block px-6 py-3 mb-16 z-10">
        <span className="text-white text-sm font-medium">Trusted by 1.5M Code Learners</span>
      </div>

      {/* Main heading */}
      <motion.div className="text-center max-w-4xl mx-auto z-10" initial={{ opacity: 0, y: 20 }} animate={controls}>
        <h1 className="text-[5rem] font-bold leading-tight mb-6">
          <span className="text-gray-200">Consistency and</span>
          <br />
          <span className="text-primary">Community</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">An unmatched Learning Experience for coding courses.</p>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Content is every where, we provide a learning experience that is unmatched. Bounties, peer learning, peer code
          reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep
          you on track.
        </p>

        <motion.div className="relative inline-block mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="button-glow relative">Check all Live Cohorts</button>
        </motion.div>
      </motion.div>

      {/* Animated arrow down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
