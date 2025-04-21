"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

export default function UdemySection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
          <h2 className="heading-large mb-4">Our Courses on Udemy</h2>
          <p className="heading-subtitle">
            Join thousands of students who have transformed their careers with
            our comprehensive courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Course details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
              borderColor: "rgba(249, 115, 22, 0.3)",
            }}
            className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-gray-800 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              Complete web development course
            </h3>
            <p className="text-gray-400 mb-6">
              Only web development course that you will need. Covers HTML, CSS,
              Tailwind, Node, React, MongoDB, Prisma, Deployment etc
            </p>

            <div className="flex items-center mb-4">
              <div className="text-4xl font-bold mr-3">4.7</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <div className="ml-2 text-sm text-gray-400">Top Rated</div>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-primary text-3xl font-bold">₹499</span>
              <span className="text-gray-400 line-through ml-3">₹3,099</span>
              <span className="ml-3 bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                87% off
              </span>
            </div>

            <motion.a
              href="https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35"
              className="inline-block bg-primary text-black font-bold py-3 px-6 rounded-lg transition-all hover:bg-primary/90"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Check Udemy Courses
            </motion.a>
          </motion.div>

          {/* Right column - Video embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-xl overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KZ31wDjYleI?si=XAmNcq3la9KCTJCcc"
              title="Most affordable web dev course launch"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
