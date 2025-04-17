"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const logos = [
  { id: 1, name: "Google" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Amazon" },
  { id: 5, name: "Netflix" },
  { id: 6, name: "Microsoft" },
  { id: 7, name: "Tesla" },
]

export default function LogoCarousel() {
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
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <span className="button-glow inline-block px-4 py-1 mb-4">Success Stories</span>
          <h2 className="heading-large mb-4">Top Companies</h2>
          <p className="heading-subtitle">Where our graduates work after completing our programs</p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-8 py-8 animate-marquee-reverse">
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="flex-shrink-0 w-32 h-32 bg-gradient-to-b from-gray-900 to-black rounded-xl flex items-center justify-center border border-gray-800 logo-card group"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(249, 115, 22, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="font-bold text-primary relative z-10">{logo.name}</p>
              </motion.div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {logos.map((logo) => (
              <motion.div
                key={`duplicate-${logo.id}`}
                className="flex-shrink-0 w-32 h-32 bg-gradient-to-b from-gray-900 to-black rounded-xl flex items-center justify-center border border-gray-800 logo-card group"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(249, 115, 22, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="font-bold text-primary relative z-10">{logo.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
