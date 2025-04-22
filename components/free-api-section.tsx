"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import Link from "next/link";

export default function freeapisection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-large mb-4">FreeAPI - Open Source</h2>
          <p className="heading-subtitle">
            Unlock Your Potential with Our API Hub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Course details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
              borderColor: "rgba(249, 115, 22, 0.3)",
            }}
            className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-gray-800 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">FreeAPI - Open Source</h3>
            <p className="text-gray-400 mb-6">
              Unlock Your Potential with Our API Hub. Our API Hub is designed to
              streamline your learning experience in API handling across various
              programming languages. With our resources, you can efficiently
              build and showcase your frontend portfolio in both web and mobile
              applications.Join us to enhance your skills and take your coding
              projects to the next level!
            </p>

            <div className="flex items-center mb-4">
              <div className="text-4xl font-bold mr-3"></div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <div className="ml-2 text-sm text-gray-400"></div>
            </div>

            <div className="flex items-center mb-6">
              <span className="ml-3 bg-primary/20 text-primary px-2 py-1 rounded text-sm"></span>
            </div>

            <Link
              href="https://freeapi.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-glow">
                Check Free API-docs
                <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
              </button>
            </Link>
          </motion.div>

          {/* Right column - Video embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-xl overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DxedlhTyR7Q?si=3rSNaKj4bglPTj8i"
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
