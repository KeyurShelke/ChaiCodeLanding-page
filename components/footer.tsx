"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

// Footer links organized by category
const footerLinks = {
  learning: [
    { name: "Courses", url: "https://courses.chaicode.com/learn" },
    {
      name: "Cohort",
      url: "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
    },
    {
      name: "Coding Hero",
      url: "https://courses.chaicode.com/learn/batch/about?bundleId=226894",
    },
    { name: "FreeAPI", url: "https://freeapi.app/" },
    { name: "Masterji", url: "https://masterji.co/login" },
  ],
  resources: [
    { name: "Docs", url: "https://docs.chaicode.com/" },
    { name: "Privacy Policy", url: "https://www.chaicode.com/privacy-policy" },
    {
      name: "Terms of Service",
      url: "https://www.chaicode.com/terms-of-services",
    },
    { name: "Pricing Policy", url: "https://www.chaicode.com/pricing-policy" },
    { name: "Refund Policy", url: "https://www.chaicode.com/refund-policy" },
  ],
};

// Social media links
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/hiteshchoudhary",
    icon: <Github size={20} />,
  },
  {
    name: "Twitter",
    url: "https://x.com/hiteshdotcom",
    icon: <Twitter size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hiteshchoudhary/?originalSubdomain=in",
    icon: <Linkedin size={20} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourname",
    icon: <Instagram size={20} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@chaiaurcode",
    icon: <Youtube size={20} />,
  },
];

export default function Footer() {
  const logoUrl = "/chai-white.svg?height=40&width=40";
  const logoAlt = "/";
  const companyName = "ChaiCode";

  return (
    <footer className="bg-[#0c0806] pt-16 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Company info column */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 relative mr-2">
                  <Image
                    src={logoUrl || "/placeholder.svg"}
                    alt={logoAlt}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-white">
                  {companyName}
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering developers with cutting-edge education and resources to
              build the future of technology.
            </p>

            {/* Social icons */}
            <div className="flex space-x-5 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>

          {/* Learning links column */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">Learning</h3>
            <ul className="space-y-4">
              {footerLinks.learning.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="mr-2 text-primary">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links column */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="mr-2 text-primary">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom taglines */}
        <div className="text-center relative z-10 py-12 border-t border-gray-800">
          <p className="text-gray-400 mb-2">
            Made with <span className="text-red-500">❤️</span> for developers
          </p>
          <p className="text-gray-500">Brew code, sip chai, repeat.</p>
        </div>
      </div>

      {/* Large background text - with gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden text-center leading-none">
        <h2 className="text-[10rem] font-black footer-gradient-text opacity-50">
          {companyName.toUpperCase()}
        </h2>
      </div>
    </footer>
  );
}
