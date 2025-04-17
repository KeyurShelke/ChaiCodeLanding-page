"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function DiscordSection() {
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
        <div className="text-primary text-sm font-medium mb-6">Community</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-large mb-12">
              Join our
              <br />
              community
              <br />
              where creativity
              <br />
              thrives.
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <div className="button-glow inline-block">89,898 Active coders in Discord</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1e2e] rounded-xl overflow-hidden border border-[#2a2f45]"
          >
            <div className="aspect-video relative bg-[#111827] rounded-t-xl p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#4f46e5] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#4f46e5]"></div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#4f46e5] text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <span className="text-xl font-bold">Discord</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 border-t border-gray-800 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FreeAPI - Open Source</h3>
              <p className="text-gray-400 mb-6">
                Unlock Your Potential with Our API Hub. Our API Hub is designed to streamline your learning experience
                in API handling across various programming languages. With our resources, you can efficiently build and
                showcase your frontend portfolio in both web and mobile applications. Join us to enhance your skills and
                take your coding projects to the next level!
              </p>
              <motion.button className="button-glow" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Check FreeAPI Docs
              </motion.button>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">FreeAPI</h3>
              <p className="text-gray-400 mb-4">Youtube</p>
              <p className="text-gray-400">Video</p>
            </div>
          </div>
        </motion.div>

        {/* F3 Section - New Community UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="f3-container">
            <div className="f3-section">
              <h3 className="f3-title">Community</h3>
              <p className="f3-description">
                Join a thriving community of learners and mentors to enhance your skills through collaboration and
                shared insights.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-4">
                  <div className="h-4 w-3/4 bg-blue-900/30 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-blue-900/30 rounded"></div>
                </div>
                <div className="bg-black/40 rounded-lg p-4">
                  <div className="h-4 w-3/4 bg-blue-900/30 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-blue-900/30 rounded"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="f3-section">
                <h3 className="f3-title">Collaborate</h3>
                <p className="f3-description">
                  Work with peers in real-time, solve challenges together, and improve your problem-solving skills.
                </p>
                <div className="mt-4 flex space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src="/placeholder.svg?height=48&width=48" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center">
                    <span className="text-blue-400 text-xl">+</span>
                  </div>
                </div>
              </div>

              <div className="f3-section">
                <h3 className="f3-title">Assignments</h3>
                <p className="f3-description">
                  Take on challenging assignments designed to test your knowledge and improve your coding expertise.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">React.js</span>
                    <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">Due</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">Machine Learning</span>
                    <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">New</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">AI Project</span>
                    <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">In Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 f3-footer">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-2">
                <span className="text-gray-400 text-xs">☕</span>
              </div>
              <span className="text-white font-bold">ChaiCode</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Home for programmers</p>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
            </div>
            <p className="text-gray-500 text-xs mb-8">© 2024 ChaiCode. All rights reserved.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400 mb-8">
              <div>
                <p className="font-bold text-white mb-2">Courses</p>
                <p>Cohort</p>
                <p>Coding Hero</p>
                <p>FreeAPI</p>
                <p>Mastery</p>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Docs</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Pricing Policy</p>
                <p>Refund Policy</p>
              </div>
            </div>

            <h2 className="chaiaurcode">CHAIAURCODE</h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
