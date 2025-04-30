"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  Bell,
  Code,
  Layers,
  Zap,
  Smartphone,
  Star,
  ExternalLink,
} from "lucide-react";

export default function YoutubeChannelsSection() {
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

      {/* Glow effect behind phone */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Engaging YouTube Channels
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 items-center">
          {/* Phone mockup - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-[300px] h-[600px] rounded-[40px] overflow-hidden border-4 border-gray-800 shadow-2xl shadow-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(249,115,22,0.4)] hover:border-primary/70">
              {/* Phone header */}
              <div className="bg-primary rounded-t-3xl p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-white" />
                  <span className="text-white font-bold">ChaiCode</span>
                </div>
                <Bell className="h-5 w-5 text-white" />
              </div>

              {/* Phone content */}
              <div className="bg-[#1a1f2e] h-full p-4">
                {/* Trending course */}
                <div className="mb-4">
                  <div className="text-xs text-primary mb-1">TRENDING</div>
                  <div className="bg-[#252a3a] p-3 rounded-lg">
                    <div className="text-white font-medium mb-1">
                      React Native Masterclass
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-400">
                        <Star className="h-3 w-3 text-primary fill-primary mr-1" />
                        <span>4.8</span>
                        <span className="mx-2">•</span>
                        <span>2.5h</span>
                      </div>
                      <div className="bg-primary text-xs px-2 py-0.5 rounded text-white">
                        LIVE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for phone screen */}
                <div className="flex items-center justify-center h-[300px] rounded-xl bg-black/50 mb-4">
                  {/* Download buttons in the middle of the phone */}
                  <div className="flex flex-col space-y-4 w-full px-4">
                    <motion.a
                      href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share"
                      className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg border border-gray-700 transition-all duration-300 hover:bg-gray-900 hover:border-primary hover:shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-400">GET IT ON</span>
                        <span className="font-bold text-base">Google Play</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://apps.apple.com/in/app/chaicode/id6504993143"
                      className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg border border-gray-700 transition-all duration-300 hover:bg-gray-900 hover:border-primary hover:shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-400">
                          DOWNLOAD ON THE
                        </span>
                        <span className="font-bold text-base">App Store</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Phone footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#1a1f2e] border-t border-gray-800 p-2 flex justify-around">
                <div className="flex flex-col items-center">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-xs text-gray-400">Courses</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="h-4 w-4 text-gray-500" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
                <div className="flex flex-col items-center">
                  <Smartphone className="h-4 w-4 text-gray-500" />
                  <span className="text-xs text-gray-400">Profile</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* YouTube Channels - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Chai aur Code Channel */}
            <div className="bg-[#0f1117] border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:bg-gradient-to-b hover:from-[#0f1117] hover:to-[#1a1410] group">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)]">
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
                      className="text-white"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Chai aur Code
                    </h3>
                    <p className="text-gray-400">@chaiaurcode</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex justify-center"
                >
                  <Link
                    href="https://www.youtube.com/@chaiaurcode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button-glow">
                      Visit Channel
                      <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                <div className="bg-gray-800 rounded-full px-4 py-1 text-gray-300">
                  <span className="font-bold text-primary">600K</span>{" "}
                  subscribers
                </div>
                <div className="bg-gray-800 rounded-full px-4 py-1 text-gray-300">
                  <span className="font-bold text-primary">545</span> videos
                </div>
              </div>

              <div className="mt-4">
                <span className="text-2xl text-primary">हिंदी</span>
              </div>
            </div>

            {/* Hitesh Choudhary Channel */}
            <div className="bg-[#0f1117] border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:bg-gradient-to-b hover:from-[#0f1117] hover:to-[#1a1410] group">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)]">
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
                      className="text-white"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Hitesh Choudhary
                    </h3>
                    <p className="text-gray-400">@HiteshCodeLab</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex justify-center"
                >
                  <Link
                    href="https://www.youtube.com/@HiteshCodeLab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button-glow">
                      Visit Channel
                      <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                <div className="bg-gray-800 rounded-full px-4 py-1 text-gray-300">
                  <span className="font-bold text-primary">987K</span>{" "}
                  subscribers
                </div>
                <div className="bg-gray-800 rounded-full px-4 py-1 text-gray-300">
                  <span className="font-bold text-primary">1.6K</span> videos
                </div>
              </div>

              <div className="mt-4">
                <span className="text-2xl text-primary">English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
