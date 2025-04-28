"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

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
        <span className="text-white text-sm font-medium">
          Trusted by 1.5M Code Learners
        </span>
      </div>

      {/* Main heading */}
      <motion.div
        className="text-center max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1 className="text-[5rem] md:text-[6rem] font-bold leading-tight mb-6">
          <span className="text-gray-200">
            Consistency and <span className="text-primary">Community</span>
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          An unmatched Learning Experience for coding courses.
        </p>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Content is every where, we provide a learning experience that is
          unmatched. Bounties, peer learning, peer code reviews, Virtual hostel,
          Alumni Network, Doubt sessions, Group projects and so many other
          activities to keep you on track.
        </p>

        <motion.div
          className="relative inline-block mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-glow relative flex items-center">
              Check all Live Cohorts
              <span className="ml-2 h-3 w-3 rounded-full bg-red-500 pulse-ring"></span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
