"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, X } from "lucide-react";

export default function VideoEmbed() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay
  const videoId = "oBLpqSHc3lA"; // Replace with your YouTube video ID

  // Function to extract video ID from various YouTube URL formats
  const getYouTubeVideoId = (url: string | null) => {
    if (!url) return null;

    // Regular YouTube URL format: https://www.youtube.com/watch?v=VIDEO_ID
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <section className="py-12 pb-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative rounded-lg overflow-hidden border border-gray-800 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video bg-gray-900">
              {!isPlaying ? (
                // Thumbnail and play button view
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to medium quality thumbnail if maxres is not available
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10"></div>

                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">LIVE</span>
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  </div>

                  <motion.button
                    className="relative z-10 bg-primary rounded-full p-4 text-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className="h-8 w-8" />
                  </motion.button>

                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white">
                      Check This Out !
                    </h3>
                  </div>
                </div>
              ) : (
                // YouTube iframe embed
                <div className="relative w-full h-full">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
                      isMuted ? 1 : 0
                    }&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Controls overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.button
                      className="bg-black/70 text-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                          width="20"
                          height="20"
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
                      className="bg-black/70 text-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(false)}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
