"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, X } from "lucide-react";
import Link from "next/link";

// Updated courses array with videoId field
const courses = [
  {
    id: 1,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
    videoId: "dQw4w9WgXcQ", // Add YouTube video ID for each course
    url: "https://www.udemy.com/course/web-development-complete", // Add course URL
  },
  {
    id: 2,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
    videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
    url: "https://www.udemy.com/course/web-development-complete-2", // Add course URL
  },
  {
    id: 3,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
    videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
    url: "https://www.udemy.com/course/web-development-complete-3", // Add course URL
  },
];

export default function UdemySection() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      id="udemy"
      ref={ref}
    >
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
          <h2 className="heading-large mb-4">Udemy</h2>
          <p className="heading-subtitle">
            Not only in India, we are global leaders in tech education
          </p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-6 py-4 animate-marquee">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                className="flex-shrink-0 w-[500px] bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 group"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-[1fr_180px] h-full">
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <div className="text-4xl font-bold mb-2">4.7 Stars</div>
                      <div className="text-gray-400">{course.badge}</div>
                      <Link
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block"
                      >
                        <motion.button
                          className="button-glow mt-4"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          View Course
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    {playingVideo === course.id ? (
                      // YouTube iframe when playing
                      <div className="absolute inset-0 w-full h-full">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${
                            course.videoId
                          }?autoplay=1&mute=${
                            isMuted ? 1 : 0
                          }&rel=0&modestbranding=1`}
                          title={`${course.title} video`}
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
                      <div className="absolute inset-0 bg-gray-800">
                        {/* YouTube thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${course.videoId}/mqdefault.jpg`}
                          alt={`${course.title} thumbnail`}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="bg-primary/80 rounded-full p-3"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideo(course.id);
                            }}
                          >
                            <Play className="h-8 w-8 text-black" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate courses for infinite scroll effect */}
            {courses.map((course) => (
              <motion.div
                key={`duplicate-${course.id}`}
                className="flex-shrink-0 w-[500px] bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 group"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-[1fr_180px] h-full">
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <div className="text-4xl font-bold mb-2">4.7 Stars</div>
                      <div className="text-gray-400">{course.badge}</div>
                      <Link
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block"
                      >
                        <motion.button
                          className="button-glow mt-4"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          View Course
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                  playingVideo === course.id ? (
                      // YouTube iframe when playing
                      <div className="absolute inset-0 w-full h-full">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${
                            course.videoId
                          }?autoplay=1&mute=${
                            isMuted ? 1 : 0
                          }&rel=0&modestbranding=1`}
                          title={`${course.title} video`}
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
                      <div className="absolute inset-0 bg-gray-800">
                        {/* YouTube thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${course.videoId}/mqdefault.jpg`}
                          alt={`${course.title} thumbnail`}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="bg-primary/80 rounded-full p-3"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideo(null);
                            }}
                          >
                            <X size={16} />
                            <Play className="h-8 w-8 text-black" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
