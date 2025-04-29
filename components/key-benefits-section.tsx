"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Gift, Home, Code, Beaker, BookOpen } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Taught by Professionals",
    description:
      "Our cohorts are being taught by top industry experts and educators",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Bounties",
    description:
      "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
    icon: <Gift className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Coding hostels",
    description:
      "There is nothing like late night discussion with fellow learners and solving bugs",
    icon: <Home className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Peer Code Reviews",
    description:
      "With Our internal tools like Mentor!, every coding assignment gets feedback to improve your code",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    id: 5,
    title: "Leet Lab",
    description:
      "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
    icon: <Beaker className="h-6 w-6 text-primary" />,
  },
  {
    id: 6,
    title: "Revision classes",
    description:
      "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
];

const alumniImages = [
  "/img0.jpg?height=100&width=100",
  "/img1.jpg?height=100&width=100",
  "/img2.jpg?height=100&width=100",
  "/img3.jpg?height=100&width=100",
  "/img4.jpg?height=100&width=100",
  "/img5.jpg?height=100&width=100",
];

export default function KeyBenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
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
          <h2 className="heading-large mb-4">Key Benefits of Cohorts</h2>
          <p className="heading-subtitle">
            Cohorts are best way to learn because you finish the course in a
            timely manner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group"
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-50">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-50">
                Alumni Network and job listings
              </h3>
              <p className="text-gray-400">
                The alumni Network that you always wished for in your college.
                We have a dedicated platform where students get to know each
                other, do projects, make agencies and join freelancing. Our HR
                team also post regular job updates that you can apply directly
                whenever you are ready
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bubble-avatars">
                {alumniImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="bubble-avatar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    style={{
                      zIndex: alumniImages.length - index,
                    }}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Alumni ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
