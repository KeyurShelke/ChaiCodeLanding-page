"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";

export default function CommunityUISection() {
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
          className="max-w-5xl mx-auto"
        >
          {/* Main community UI container */}
          <div className="rounded-2xl overflow-hidden border border-blue-900/30">
            {/* Top section - Community */}
            <div className="bg-gradient-to-r from-blue-950 to-black p-8 border-b border-blue-900/30">
              <h3 className="text-3xl font-bold mb-3">Community</h3>
              <p className="text-gray-400 max-w-xl">
                Join a thriving community of learners and mentors to enhance
                your skills through collaboration and shared insights.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-950/40 rounded-lg p-4">
                  <div className="h-4 w-3/4 bg-blue-900/30 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-blue-900/30 rounded"></div>
                </div>
                <div className="bg-blue-950/40 rounded-lg p-4">
                  <div className="h-4 w-3/4 bg-blue-900/30 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-blue-900/30 rounded"></div>
                </div>
              </div>
            </div>

            {/* Bottom section - Collaborate and Assignments */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Collaborate section */}
              <div className="bg-gradient-to-r from-blue-950 to-black p-8 border-r border-blue-900/30">
                <h3 className="text-3xl font-bold mb-3">Collaborate</h3>
                <p className="text-gray-400 mb-6">
                  Work with peers in real-time, solve challenges together, and
                  improve your problem-solving skills.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center">
                    <Plus className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-2 bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full">
                    Rok.tm
                  </div>
                </div>
              </div>

              {/* Assignments section */}
              <div className="bg-gradient-to-r from-blue-950 to-black p-8">
                <h3 className="text-3xl font-bold mb-3">Assignments</h3>
                <p className="text-gray-400 mb-6">
                  Take on challenging assignments designed to test your
                  knowledge and improve your coding expertise.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center w-full">
                      <span className="text-sm text-blue-300">Next.js</span>
                      <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">
                        Due
                      </div>
                    </div>
                    <div className="ml-2 bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full">
                      Next &gt;
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">
                      Machine Coding
                    </span>
                    <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">
                      New
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-2 flex justify-between items-center">
                    <span className="text-sm text-blue-300">AI Project</span>
                    <div className="bg-blue-800/30 rounded px-2 py-1 text-xs text-blue-300">
                      In Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
