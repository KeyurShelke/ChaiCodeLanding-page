"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, X } from "lucide-react";
import Link from "next/link";

// Updated cohorts array with videoId field
const cohorts = [
  {
    id: 1,
    title: "Web Dev Cohort - Live 1.0",
    description: "Learn to build products for web and more",
    price: "₹6,999",
    originalPrice: "₹8,999",
    tag: "Most Popular",
    videoId: "8yyrAfsjPTw",
    link: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
  },
  {
    id: 2,
    title: "Devops for Developers Cohort - Live 1.0",
    description: "Master Devops for web and more!",
    price: "₹4,999",
    originalPrice: "₹7,999",
    tag: "New Batch",
    videoId: "oBLpqSHc3lA",
    link: "https://courses.chaicode.com/learn/batch/about?bundleId=227963",
  },
  {
    id: 3,
    title: "Data Science Cohort - Live 1.0",
    description: "Become a data scientist in 12 weeks",
    price: "₹6,999",
    originalPrice: "₹8,999",
    tag: "Limited Seats",
    videoId: "Kjd-SWpe1do",
    link: "https://courses.chaicode.com/learn/batch/about?bundleId=227817",
  },
  {
    id: 4,
    title: "Gen AI Cohort - Live 1.0",
    description: "Master advanced Artifical Intelligance and ML ",
    price: "₹4,999",
    originalPrice: "₹7,999",
    tag: "Advanced",
    videoId: "VNb_LawBBWU",
    link: "https://courses.chaicode.com/learn/batch/about?bundleId=227321",
  },
];

export default function CohortsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Track which video is currently playing
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay

  return (
    <section
      className="py-20 bg-black relative overflow-hidden"
      id="cohorts"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="button-glow inline-block px-4 py-1 mb-4">
            Live training classes
          </span>
          <h2 className="heading-large mb-4">Cohorts</h2>
          <p className="heading-subtitle">
            Join our intensive, mentor-led cohorts and accelerate your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cohorts.map((cohort, index) => (
            <motion.div
              key={cohort.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 group"
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="relative">
                <div className="absolute top-0 left-0 bg-primary text-black font-bold px-3 py-1 text-sm z-10">
                  {cohort.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="h-48 bg-gray-800 relative">
                  {playingVideo === cohort.id ? (
                    // YouTube iframe when playing
                    <div className="absolute inset-0 w-full h-full">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${
                          cohort.videoId
                        }?autoplay=1&mute=${
                          isMuted ? 1 : 0
                        }&rel=0&modestbranding=1`}
                        title={`${cohort.title} video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      {/* Video controls */}
                      <div className="absolute bottom-2 right-2 flex space-x-2 z-20">
                        <motion.button
                          className="bg-black/70 text-white p-1.5 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                        >
                          {isMuted ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                              <line x1="23" y1="9" x2="17" y2="15"></line>
                              <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                          )}
                        </motion.button>

                        <motion.button
                          className="bg-black/70 text-white p-1.5 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideo(null);
                          }}
                        >
                          <X size={16} />
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    // Thumbnail and play button
                    <>
                      {/* YouTube thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${cohort.videoId}/mqdefault.jpg`}
                        alt={`${cohort.title} thumbnail`}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <motion.div
                          className="bg-primary rounded-full p-3 relative z-10"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setPlayingVideo(cohort.id)}
                        >
                          <Play className="h-8 w-8 text-black" />
                        </motion.div>
                      </div>

                      {/* Live indicator */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">
                          LIVE
                        </span>
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="font-bold text-xl mb-2">{cohort.title}</h3>
                <p className="text-gray-400 mb-4">{cohort.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold">{cohort.price}</span>
                  <span className="text-gray-400 line-through ml-2">
                    {cohort.originalPrice}
                  </span>
                </div>
                <Link href={cohort.link}>
                  <motion.button
                    className="w-full button-glow"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Buy Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orange divider */}
      <div className="orange-divider mt-20"></div>
    </section>
  );
}
