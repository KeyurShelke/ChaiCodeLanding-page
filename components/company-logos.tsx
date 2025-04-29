"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Company logos data
const companyLogos = [
  { id: 1, name: "Amazon", logo: "/placeholder.svg?height=150&width=150" },
  { id: 2, name: "Google", logo: "/placeholder.svg?height=150&width=150" },
  { id: 3, name: "Microsoft", logo: "/placeholder.svg?height=150&width=150" },
  {
    id: 4,
    name: "Goldman Sachs",
    logo: "/placeholder.svg?height=150&width=150",
  },
  { id: 5, name: "PayPal", logo: "/placeholder.svg?height=150&width=150" },
  { id: 6, name: "Samsung", logo: "/placeholder.svg?height=150&width=150" },
  { id: 7, name: "Apple", logo: "/placeholder.svg?height=150&width=150" },
  { id: 8, name: "Meta", logo: "/placeholder.svg?height=150&width=150" },
  { id: 9, name: "Twitter", logo: "/placeholder.svg?height=150&width=150" },
  { id: 10, name: "LinkedIn", logo: "/placeholder.svg?height=150&width=150" },
  { id: 11, name: "Netflix", logo: "/placeholder.svg?height=150&width=150" },
  { id: 12, name: "Uber", logo: "/placeholder.svg?height=150&width=150" },
];

export default function CompanyLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thousands of students achieved their{" "}
            <span className="text-blue-500">dream job at</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          {/* First row - left to right */}
          <div className="flex space-x-8 py-4 animate-marquee">
            {companyLogos.slice(0, 6).map((company) => (
              <motion.div
                key={company.id}
                className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-[80%] max-h-[80%]"
                />
              </motion.div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {companyLogos.slice(0, 6).map((company) => (
              <motion.div
                key={`duplicate-${company.id}`}
                className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-[80%] max-h-[80%]"
                />
              </motion.div>
            ))}
          </div>

          {/* Second row - right to left */}
          <div className="flex space-x-8 py-4 animate-marquee-reverse mt-4">
            {companyLogos.slice(6, 12).map((company) => (
              <motion.div
                key={company.id}
                className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-[80%] max-h-[80%]"
                />
              </motion.div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {companyLogos.slice(6, 12).map((company) => (
              <motion.div
                key={`duplicate-${company.id}`}
                className="flex-shrink-0 w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-[80%] max-h-[80%]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
