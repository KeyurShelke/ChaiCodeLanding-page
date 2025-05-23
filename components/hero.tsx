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

    // Add floating animation to the CSS
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, -15px) rotate(5deg); }
        50% { transform: translate(-5px, 10px) rotate(-5deg); }
        75% { transform: translate(-15px, -5px) rotate(3deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
      .animate-float {
        animation: float linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [controls]);

  // Feature pills data with links
  const features = [
    {
      id: 1,
      name: "Peer learning",
      icon: <Code className="h-4 w-4 text-orange-500 mr-2" />,
      link: "",
    },
    {
      id: 2,
      name: "Code reviews",
      icon: <FileCode className="h-4 w-4 text-orange-500 mr-2" />,
      link: "",
    },
    {
      id: 3,
      name: "Virtual hostel",
      icon: <Monitor className="h-4 w-4 text-orange-500 mr-2" />,
      link: "",
    },
    {
      id: 4,
      name: "Doubt sessions",
      icon: <MessageSquare className="h-4 w-4 text-orange-500 mr-2" />,
      link: "",
    },
    {
      id: 5,
      name: "Bounties",
      icon: <Zap className="h-4 w-4 text-orange-500 mr-2" />,
      link: "",
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

      {/* Enhanced background glow effects */}
      <div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-orange-600/5 blur-[100px] animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/90 z-10"></div>

      {/* Animated floating orbs */}
      <div
        className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-primary/30 blur-sm animate-float"
        style={{ animationDuration: "15s", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full bg-primary/20 blur-sm animate-float"
        style={{ animationDuration: "20s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-primary/20 blur-sm animate-float"
        style={{ animationDuration: "18s", animationDelay: "3s" }}
      ></div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Trusted by badge */}
        <div className="button-glow inline-block px-6 py-3 mb-16 z-10">
          <span className="text-white text-sm font-medium">
            Trusted by 1.5M Code Learners
          </span>
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
