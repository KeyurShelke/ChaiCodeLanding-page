"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Introduction to Web Development",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "12:45",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "18:30",
  },
  {
    id: 3,
    title: "React for Beginners",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "22:15",
  },
  {
    id: 4,
    title: "Building Full Stack Apps",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "25:10",
  },
]

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/95" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <p className="text-primary mb-2">Learn at your own pace</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Videos</h2>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-6 py-4 animate-marquee">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl overflow-hidden hover-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <motion.div
                      className="bg-primary rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm">
                    Learn the fundamentals and advanced concepts with our expert instructors.
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Duplicate videos for infinite scroll effect */}
            {videos.map((video) => (
              <motion.div
                key={`duplicate-${video.id}`}
                className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl overflow-hidden hover-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <motion.div
                      className="bg-primary rounded-full p-3"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm">
                    Learn the fundamentals and advanced concepts with our expert instructors.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
