"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Define a type for the topic
type Topic = {
  id: number;
  name: string;
  size: "small" | "medium" | "large"; // Explicitly define the size type
  url: string;
};

// Define the topics array with the Topic type
const topics: Topic[] = [
  {
    id: 1,
    name: "Docker",
    size: "medium",
    url: "https://www.youtube.com/watch?v=oBLpqSHc3lA&t=1s",
  },
  {
    id: 2,
    name: "MCP Server",
    size: "medium",
    url: "https://www.youtube.com/watch?v=dZyQNy3-HjU",
  },
  {
    id: 3,
    name: "Fast API",
    size: "medium",
    url: "https://www.youtube.com/watch?v=foGklduxhM0",
  },
  {
    id: 4,
    name: "Python",
    size: "medium",
    url: "https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
  },
  {
    id: 5,
    name: "React Native",
    size: "medium",
    url: "https://www.youtube.com/watch?v=UwFFsS33xG8",
  },
  {
    id: 6,
    name: "Django",
    size: "medium",
    url: "https://www.youtube.com/watch?v=j6szNSzw4BU&list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy",
  },
  {
    id: 7,
    name: "NextJS",
    size: "medium",
    url: "https://www.youtube.com/watch?v=OgS1ZWZItno&list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq",
  },
  {
    id: 8,
    name: "JavaScript",
    size: "medium",
    url: "https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
  },
  {
    id: 9,
    name: "Auth",
    size: "medium",
    url: "https://www.youtube.com/watch?v=3BEn2E9PvBM&list=PLu71SKxNbfoCXO80Z4miZHTL5GxfFbz7A",
  },
  {
    id: 10,
    name: "Node.js",
    size: "medium",
    url: "https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW",
  },
  {
    id: 11,
    name: "MongoDB",
    size: "medium",
    url: "https://www.youtube.com/watch?v=fDTf1mk-jQg",
  },
  {
    id: 12,
    name: "Git",
    size: "medium",
    url: "https://www.youtube.com/watch?v=q8EevlEpQ2A",
  },
  {
    id: 13,
    name: "AWS",
    size: "medium",
    url: "https://www.youtube.com/watch?v=TLf5OASKf18",
  },
  {
    id: 14,
    name: "JWT",
    size: "medium",
    url: "https://www.youtube.com/watch?v=xrj3zzaqODw",
  },
  {
    id: 15,
    name: "React",
    size: "medium",
    url: "https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
  },
  {
    id: 16,
    name: "System Design",
    size: "medium",
    url: "https://youtu.be/VJVfWWdtJ4c?si=hRXE3K700Ris6EzP",
  },
  {
    id: 17,
    name: "Streamlit",
    size: "medium",
    url: "https://youtu.be/yKTEC1Y5bEQ?si=opBVj1SB3Hp2C1-j",
  },
  {
    id: 18,
    name: "SAAS",
    size: "medium",
    url: "https://youtu.be/1i8R-iJiEi8?si=y2MUDGI5RgokrAeH",
  },
  {
    id: 19,
    name: "Numpy",
    size: "medium",
    url: "https://youtu.be/x7ULDYs4X84?si=01EJA939PdjDssp4",
  },
  {
    id: 20,
    name: "Frontend",
    size: "medium",
    url: "https://youtu.be/3DvxjJPKdzI?si=_61dzhomCT9oSgvg",
  },
  {
    id: 21,
    name: "C++",
    size: "medium",
    url: "https://youtu.be/7G4IkcCqNlc?si=6FEzUgQpEzT1s1pY",
  },
  {
    id: 14,
    name: "JWT",
    size: "medium",
    url: "https://www.youtube.com/watch?v=xrj3zzaqODw",
  },
];

export default function TopicsCloudSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const getSizeClass = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "py-2 px-4 text-sm";
      case "large":
        return "py-3 px-6 text-lg";
      default:
        return "py-2 px-5 text-base";
    }
  };

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
          <p className="heading-subtitle">
            You can find videos and courses on topics and much more
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {topics.map((topic, index) => (
            <motion.a
              key={topic.id}
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
                borderColor: "rgba(249, 115, 22, 0.5)",
              }}
              className={`${getSizeClass(
                topic.size
              )} bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 font-medium cursor-pointer`}
            >
              {topic.name}
            </motion.a>
          ))}
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
              Link to youtube videos
              <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
