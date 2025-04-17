"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"

const cohorts = [
  {
    id: 1,
    title: "Web Dev Cohort - Live 1.0",
    description: "Learn to build products for web and more",
    price: "₹6999",
    originalPrice: "₹8999",
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Mobile Dev Cohort - Live 2.0",
    description: "Master mobile app development with React Native",
    price: "₹7999",
    originalPrice: "₹9999",
    tag: "New Batch",
  },
  {
    id: 3,
    title: "Data Science Cohort - Live 1.0",
    description: "Become a data scientist in 12 weeks",
    price: "₹8999",
    originalPrice: "₹10999",
    tag: "Limited Seats",
  },
  {
    id: 4,
    title: "AI & ML Cohort - Live 1.0",
    description: "Master artificial intelligence and machine learning",
    price: "₹9999",
    originalPrice: "₹12999",
    tag: "Advanced",
  },
]

export default function CohortsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="cohorts" ref={ref}>
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
          <span className="button-glow inline-block px-4 py-1 mb-4">Live training classes</span>
          <h2 className="heading-large mb-4">Cohorts</h2>
          <p className="heading-subtitle">Join our intensive, mentor-led cohorts and accelerate your career</p>
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
                boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="relative">
                <div className="absolute top-0 left-0 bg-primary text-black font-bold px-3 py-1 text-sm z-10">
                  {cohort.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                  <motion.div
                    className="bg-primary rounded-full p-3 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="h-8 w-8 text-black" />
                  </motion.div>

                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">LIVE</span>
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="font-bold text-xl mb-2">{cohort.title}</h3>
                <p className="text-gray-400 mb-4">{cohort.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold">{cohort.price}</span>
                  <span className="text-gray-400 line-through ml-2">{cohort.originalPrice}</span>
                </div>
                <motion.button className="w-full button-glow" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orange divider */}
      <div className="orange-divider mt-20"></div>
    </section>
  )
}
