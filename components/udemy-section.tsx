"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Play } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
  },
  {
    id: 2,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
  },
  {
    id: 3,
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    badge: "Top Rated",
  },
]

export default function UdemySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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
          <h2 className="heading-large mb-4">Udemy</h2>
          <p className="heading-subtitle">Not only in India, we are global leaders in tech education</p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-6 py-4 animate-marquee">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                className="flex-shrink-0 w-[500px] bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 group"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-[1fr_180px] h-full">
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{course.description}</p>
                    <div className="mt-auto">
                      <div className="text-4xl font-bold mb-2">4.7 Stars</div>
                      <div className="text-gray-400">{course.badge}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary/80 rounded-full p-3">
                          <Play className="h-8 w-8 text-black" />
                        </div>
                      </div>
                    </div>
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
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-[1fr_180px] h-full">
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{course.description}</p>
                    <div className="mt-auto">
                      <div className="text-4xl font-bold mb-2">4.7 Stars</div>
                      <div className="text-gray-400">{course.badge}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary/80 rounded-full p-3">
                          <Play className="h-8 w-8 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
