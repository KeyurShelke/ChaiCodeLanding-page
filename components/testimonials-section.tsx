"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "Microsoft",
    image: "/g1.avif?height=100&width=100",
    content:
      "The structured curriculum and hands-on projects helped me land my dream job. The mentors are incredibly supportive and knowledgeable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Developer",
    company: "Amazon",
    image: "/b1.webp?height=100&width=100",
    content:
      "I tried many online courses before, but nothing compares to the community and support system here. Worth every penny!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Mobile Developer",
    company: "Swiggy",
    image: "/g2.webp?height=100&width=100",
    content:
      "The React Native cohort was exactly what I needed to transition into mobile development. Now I'm building apps for a leading company.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Data Scientist",
    company: "Flipkart",
    image: "/b2.webp?height=100&width=100",
    content:
      "The data science program is rigorous but extremely rewarding. The real-world projects prepared me for actual work scenarios.",
    rating: 5,
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Backend Developer",
    company: "Razorpay",
    image: "/g3.webp?height=100&width=100",
    content:
      "The mentorship and networking opportunities are unmatched. I connected with industry experts who guided my career path.",
    rating: 5,
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "DevOps Engineer",
    company: "Zerodha",
    image: "/b3.jpg?height=100&width=100",
    content:
      "The DevOps module was comprehensive and practical. I implemented the learnings directly in my work environment.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
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
    <section
      className="py-20 bg-gradient-to-b from-black to-black/95"
      id="testimonials"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <p className="text-primary mb-2">What our students say</p>
          <h2 className="heading-large">Student Feedback</h2>
        </motion.div>

        <div className="space-y-8">
          {/* First row - right to left */}
          <div className="relative overflow-hidden" ref={containerRef1}>
            <div className="flex space-x-6 py-4 animate-marquee-reverse">
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl p-6 border border-gray-800 hover-card"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
              {/* Duplicate testimonials for infinite scroll effect */}
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div
                  key={`duplicate-${testimonial.id}`}
                  className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl p-6 border border-gray-800 hover-card"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second row - left to right */}
          <div className="relative overflow-hidden" ref={containerRef2}>
            <div className="flex space-x-6 py-4 animate-marquee">
              {testimonials.slice(3, 6).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl p-6 border border-gray-800 hover-card"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
              {/* Duplicate testimonials for infinite scroll effect */}
              {testimonials.slice(3, 6).map((testimonial) => (
                <motion.div
                  key={`duplicate-${testimonial.id}`}
                  className="flex-shrink-0 w-80 md:w-96 bg-card rounded-xl p-6 border border-gray-800 hover-card"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
