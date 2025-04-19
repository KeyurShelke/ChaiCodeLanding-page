"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Twitter } from "lucide-react";
import Link from "next/link";

const tweets = [
  {
    id: 1,
    username: "@dev_michael",
    role: "Mobile Developer",
    content:
      '"The mentorship and code reviews helped me improve faster than any other platform."',
  },
  {
    id: 2,
    username: "@sarah_codes",
    role: "Frontend Developer",
    content:
      '"This course completely changed my career path. The instructors are incredibly supportive!"',
  },
  {
    id: 3,
    username: "@tech_alex",
    role: "Software Engineer",
    content:
      '"I landed my dream job at Google after completing this program. Best investment ever!"',
  },
  {
    id: 4,
    username: "@js_ninja",
    role: "Full Stack Developer",
    content:
      '"The community is what makes this special. I\'ve made friends and found job opportunities."',
  },
];

export default function TweetCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      className="pt-20 pb-10 bg-black relative overflow-hidden"
      id="tweets"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link
            href="https://x.com/ChaiCodeHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-glow inline-block px-4 py-1 mb-4">
              Community Love
            </button>
            <h2 className="heading-large mb-4">Tweet Love</h2>
            <p className="heading-subtitle">
              See what our community is saying about their learning experience
              with us
            </p>
          </Link>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-6 py-4 animate-marquee">
            {tweets.map((tweet) => (
              <motion.div
                key={tweet.id}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Twitter className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{tweet.username}</p>
                      <p className="text-sm text-gray-400">{tweet.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{tweet.content}</p>
                </div>
              </motion.div>
            ))}
            {/* Duplicate tweets for infinite scroll effect */}
            {tweets.map((tweet) => (
              <motion.div
                key={`duplicate-${tweet.id}`}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Twitter className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{tweet.username}</p>
                      <p className="text-sm text-gray-400">{tweet.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">{tweet.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-glow">
                Join Cohorts Live Classes
                <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="text-center mt-8 text-gray-400 max-w-3xl mx-auto">
          <p>
            Our students are not only working in big tech companies but are now
            founders of funded startups and product creators
          </p>
        </div>
      </div>
    </section>
  );
}
