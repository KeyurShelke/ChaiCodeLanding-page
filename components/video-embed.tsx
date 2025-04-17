"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function VideoEmbed() {
  const [isPlaying, setIsPlaying] = useState(false)

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
            {!isPlaying ? (
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
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
                  <h3 className="text-lg font-bold text-white">Video embed</h3>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
