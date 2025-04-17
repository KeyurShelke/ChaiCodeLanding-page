"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FreeApiSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative elements - remove the blue line */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FreeAPI - Open Source</h3>
              <p className="text-gray-400 mb-6">
                Unlock Your Potential with Our API Hub. Our API Hub is designed to streamline your learning experience
                in API handling across various programming languages. With our resources, you can efficiently build and
                showcase your frontend portfolio in both web and mobile applications. Join us to enhance your skills and
                take your coding projects to the next level!
              </p>
              <motion.button className="button-glow" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Check FreeAPI Docs
              </motion.button>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">FreeAPI</h3>
              <p className="text-gray-400 mb-4">Youtube</p>
              <p className="text-gray-400">Video</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
