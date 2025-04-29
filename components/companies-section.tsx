"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Visa",
    logo: "/visa.png?height=60&width=120",
  },
  {
    id: 2,
    name: "Google",
    logo: "/google.png",
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 4,
    name: "Goldman Sachs",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 5,
    name: "PayPal",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 6,
    name: "Samsung",
    logo: "/placeholder.svg?height=60&width=120",
  },
];

export default function CompaniesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our students are not only working in big tech companies but are now{" "}
            <span className="text-amber-600">founders </span>
            of funded startups and{" "}
            <span className="text-amber-600">product creators</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-12 py-8 animate-marquee">
            {companies.map((company) => (
              <motion.div
                key={company.id}
                className="flex-shrink-0 h-16 flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
            {/* Duplicate companies for infinite scroll effect */}
            {companies.map((company) => (
              <motion.div
                key={`duplicate-${company.id}`}
                className="flex-shrink-0 h-16 flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
