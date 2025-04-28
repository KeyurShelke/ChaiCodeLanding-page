"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Twitter } from "lucide-react";

const tweets = [
  {
    id: 1,
    username: "@saurabhHD",
    role: "Full stack developer",
    content:
      '"Feeling super blessed to receive a prize from Hitesh sir ! Now my motivation level is officially higher than my phones screen time 😁. Thank you sir "',
    twitterLink:
      "https://x.com/saurabhHD/status/1906390359841640771?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1906390359841640771%7Ctwgr%5E1116824cb32c80ef4777006c7dffa62d5b21774f%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.chaicode.com%2F",
  },
  {
    id: 2,
    username: "@jahanweee",
    role: "Developer",
    content:
      '"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful.Thank you, @Hiteshdotcomand @piyushgarg_devfor the fantastic giveaway. This has doubled my motivation."',
    twitterLink: "https://x.com/jahanweee/status/1907045909394788416",
  },
  {
    id: 3,
    username: "@prasenjitbasu44",
    role: "Software Engineer",
    content:
      '" Thank you will be a very small word for you all. I cant express my love and respect for you all in words. I had never heard or joined any bootcamp who gave away the fees of a student just to motivate other students and this can only be done in our WebDev Cohort-1 by Hitesh Sir "',
    twitterLink:
      "https://x.com/prasenjitbasu44/status/1906393735203836076?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1906393735203836076%7Ctwgr%5E1116824cb32c80ef4777006c7dffa62d5b21774f%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.chaicode.com%2F",
  },
  {
    id: 4,
    username: "@js_ninja",
    role: "Full Stack Developer",
    content:
      '"The community is what makes this special. I\'ve made friends and found job opportunities."',
    twitterLink: "https://twitter.com/js_ninja/status/1234567893",
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

  const handleTweetClick = (twitterLink: string) => {
    window.open(twitterLink, "_blank", "noopener,noreferrer");
  };

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
          <span className="button-glow inline-block px-4 py-1 mb-4">
            Community Love
          </span>
          <h2 className="heading-large mb-4">Tweet Love</h2>
          <p className="heading-subtitle">
            See what our community is saying about their learning experience
            with us
          </p>
        </motion.div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-6 py-4 animate-marquee">
            {tweets.map((tweet) => (
              <motion.div
                key={tweet.id}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group cursor-pointer"
                onClick={() => handleTweetClick(tweet.twitterLink)}
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
                  <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view on Twitter
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Duplicate tweets for infinite scroll effect */}
            {tweets.map((tweet) => (
              <motion.div
                key={`duplicate-${tweet.id}`}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 group cursor-pointer"
                onClick={() => handleTweetClick(tweet.twitterLink)}
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
                  <div className="mt-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view on Twitter
                  </div>
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
            <button className="button-glow">
              Join Cohorts Live Classes
              <span className="ml-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
            </button>
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
