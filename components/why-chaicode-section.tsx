"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  BookOpen,
  Code,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Comprehensive Curriculum",
    description:
      "We've carefully crafted our curriculum to cover everything you need to become a skilled developer in today's market.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    position: "top-left",
  },
  {
    id: 2,
    title: "Code and Chill",
    description:
      "Learning should be fun! Our relaxed yet effective approach makes coding enjoyable while ensuring you gain practical skills.",
    icon: <Code className="h-6 w-6 text-primary" />,
    position: "top-right",
  },
  {
    id: 3,
    title: "You finish it",
    description:
      "Our focus is on completion rates. We provide accountability, support, and motivation to ensure you finish what you start.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    position: "middle-left",
  },
  {
    id: 4,
    title: "Improve Communication",
    description:
      "We focus on developing your communication skills alongside technical abilities, making you a well-rounded professional.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    position: "middle-right",
  },
  {
    id: 5,
    title: "Industry Guards",
    description:
      "We've partnered with industry leaders to ensure our content is relevant and our students are prepared for real-world challenges.",
    icon: <Users className="h-6 w-6 text-primary" />,
    position: "bottom-left",
  },
  {
    id: 6,
    title: "Bounties",
    description:
      "Earn while you learn with our bounty system where you can take on real projects and get paid for your work.",
    icon: <Zap className="h-6 w-6 text-primary" />,
    position: "bottom-right",
  },
];

export default function WhyChaiCodeSection() {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-large mb-4">But Why ChaiCode?</h2>
          <p className="heading-subtitle">
            ChaiCode exists because we love tech and teaching
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[0].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[0].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[2].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[2].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[4].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[4].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[4].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center column - Founder */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl overflow-hidden mb-4 w-48 h-48"
            >
              <img
                src="/hitesh.jpeg?height=300&width=300"
                alt="Hitesh Choudhary"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-1">Hitesh Choudhary</h3>
              <p className="text-gray-400 text-sm mb-4">
                YouTuber • Creator of LCO • Instructor at Unacademy • Founder of
                iNeuron • Taught over 3.2M+ students across 160+ countries
              </p>
              <div className="mt-4">
                <h4 className="text-xl font-bold mb-2 text-primary">
                  Approach
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Project based courses with peer reviews and live sessions that
                  make learning fun
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
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

          <div className="space-y-8">
            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[1].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[1].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[3].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[3].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[3].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  {benefits[5].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefits[5].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {benefits[5].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
