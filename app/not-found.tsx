"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Code } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  // Particles for background effect
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; speed: number }>
  >([]);

  useEffect(() => {
    setMounted(true);

    // Generate random particles for the background
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      {/* Particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute bg-primary/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.speed * 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>

      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Code className="h-10 w-10 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10rem] font-bold text-white leading-none"
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              This page could not be found.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="flex items-center bg-primary hover:bg-primary/90 text-black font-medium py-3 px-6 rounded-full transition-colors shadow-glow-orange"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Animated glitch effect */}
          <div className="relative mt-16">
            <div className="glitch-404-container">
              <div className="glitch-404" data-text="404">
                404
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
