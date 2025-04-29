"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, FileCode, Monitor, MessageSquare, Zap } from "lucide-react";
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

  // Feature pills data with links
  const features = [
    {
      id: 1,
      name: "Peer learning",
      icon: <Code className="h-4 w-4 text-orange-500 mr-2" />,
      link: "/peer-learning",
    },
    {
      id: 2,
      name: "Code reviews",
      icon: <FileCode className="h-4 w-4 text-orange-500 mr-2" />,
      link: "/code-reviews",
    },
    {
      id: 3,
      name: "Virtual hostel",
      icon: <Monitor className="h-4 w-4 text-orange-500 mr-2" />,
      link: "/virtual-hostel",
    },
    {
      id: 4,
      name: "Doubt sessions",
      icon: <MessageSquare className="h-4 w-4 text-orange-500 mr-2" />,
      link: "/doubt-sessions",
    },
    {
      id: 5,
      name: "Bounties",
      icon: <Zap className="h-4 w-4 text-orange-500 mr-2" />,
      link: "/bounties",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Animated gradient background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-gray-900/30 to-transparent"></div>

        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-[100px]"></div>
      </div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Trusted by badge */}
        <div className="inline-block px-4 py-2 mb-12 bg-black/80 border border-gray-800 rounded-full backdrop-blur-sm">
          <div className="flex items-center">
            <span className="text-white text-sm sm:text-base">
              Trusted by 1.5M Code Learners
            </span>
            <span className="ml-2 h-2 w-2 rounded-full bg-orange-500"></span>
          </div>
        </div>

        {/* Main heading */}
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Consistency and Community
          </h1>

          <p className="text-xl sm:text-2xl text-orange-500 font-medium mb-8">
            An unmatched Learning Experience for coding courses.
          </p>

          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 mb-10">
              Content is everywhere, but we provide a learning experience that
              is unmatched — bounties, peer learning, code reviews, virtual
              hostel, alumni network, doubt sessions, and group projects.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={feature.link}
                className="flex items-center bg-gray-900/80 hover:bg-gray-800 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/30 hover:scale-105 hover:shadow-glow"
              >
                {feature.icon}
                <span className="text-sm">{feature.name}</span>
              </Link>
            ))}
          </div>

          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
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
      </div>
    </section>
  );
}
