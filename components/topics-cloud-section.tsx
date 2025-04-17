"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"

const topics = [
  { id: 1, name: "Docker", size: "medium" },
  { id: 2, name: "MCP Server", size: "medium" },
  { id: 3, name: "Kubernetes", size: "medium" },
  { id: 4, name: "Python", size: "medium" },
  { id: 5, name: "React Native", size: "medium" },
  { id: 6, name: "Django", size: "small" },
  { id: 7, name: "NextJS", size: "small" },
  { id: 8, name: "JavaScript", size: "large" },
  { id: 9, name: "TypeScript", size: "medium" },
  { id: 10, name: "Node.js", size: "medium" },
  { id: 11, name: "MongoDB", size: "small" },
  { id: 12, name: "GraphQL", size: "small" },
  { id: 13, name: "AWS", size: "medium" },
  { id: 14, name: "Firebase", size: "small" },
  { id: 15, name: "React", size: "large" },
]

export default function TopicsCloudSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const getSizeClass = (size) => {
    switch (size) {
      case "small":
        return "py-2 px-4 text-sm"
      case "large":
        return "py-3 px-6 text-lg"
      default:
        return "py-2 px-5 text-base"
    }
  }

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
          <h2 className="heading-large mb-4">Topics Cloud</h2>
          <p className="heading-subtitle">You can find videos and courses on topics and much more</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                borderColor: "rgba(249, 115, 22, 0.5)",
              }}
              className={`${getSizeClass(
                topic.size,
              )} bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 font-medium cursor-pointer`}
            >
              {topic.name}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="button-glow inline-flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            <span>Link to youtube videos</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
