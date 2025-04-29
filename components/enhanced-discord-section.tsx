"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function EnhancedDiscordSection() {
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
              <Link
                href="https://discord.com/invite/WDrH3zuWFb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button-glow relative flex items-center">
                  80,000 Active coders in Discord
                  <span className="ml-2 h-3 w-3 rounded-full bg-red-500 pulse-ring"></span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="bg-black rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="aspect-video relative bg-black rounded-t-xl overflow-hidden">
              <Image
                src="hidiscord.jpeg?height=400&width=600"
                alt="Discord Community"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
            <div className="p-4 bg-black text-white flex items-center justify-center border-t border-gray-800">
              <Image
                src="dis.png"
                alt="Discord Logo"
                width={200}
                height={60}
                className="h-12 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
