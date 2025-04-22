"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

// Footer links data - replace with your actual links
const footerLinks = {
  pages: [
    { name: "All Products", url: "https://example.com/products" },
    { name: "Community", url: "https://example.com/community" },
    { name: "Courses", url: "https://example.com/courses" },
    { name: "Pricing", url: "https://example.com/pricing" },
    { name: "Blog", url: "https://example.com/blog" },
  ],
  learn: [
    { name: "Coding Hero", url: "https://example.com/coding-hero" },
    { name: "FreeAPI", url: "https://example.com/freeapi" },
    { name: "Mastery", url: "https://example.com/mastery" },
    { name: "Assignments", url: "https://example.com/assignments" },
    { name: "Docs", url: "https://example.com/docs" },
  ],
  socials: [
    {
      name: "Facebook",
      url: "https://facebook.com/yourpage",
      icon: <Twitter size={20} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourpage",
      icon: <Instagram size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourpage",
      icon: <Twitter size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/yourpage",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Discord",
      url: "https://discord.gg/yourserver",
      icon: <Github size={20} />,
    },
  ],
  register: [
    { name: "Sign Up", url: "https://example.com/signup" },
    { name: "Login", url: "https://example.com/login" },
    { name: "Forgot Password", url: "https://example.com/forgot-password" },
    { name: "Privacy Policy", url: "https://example.com/privacy-policy" },
    { name: "Terms of Service", url: "https://example.com/terms-of-service" },
  ],
};

// Social media links
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/yourname",
    icon: <Github size={20} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourname",
    icon: <Twitter size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    icon: <Linkedin size={20} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourname",
    icon: <Instagram size={20} />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/c/yourname",
    icon: <Youtube size={20} />,
  },
];

export default function Footer() {
  const logoUrl = "/chai-white.svg?height=40&width=40";
  const logoAlt = "ChaiCode";
  const companyName = "ChaiCode";

  return (
    <footer className="bg-[#0c0806] pt-16 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* Top section with logo and tagline */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-2">
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
            <p className="text-gray-400">Home for programmers</p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-12">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-primary font-bold mb-6">Pages</h3>
            <ul className="space-y-4">
              {footerLinks.pages.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Learn</h3>
            <ul className="space-y-4">
              {footerLinks.learn.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Socials</h3>
            <ul className="space-y-4">
              {footerLinks.socials.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Register</h3>
            <ul className="space-y-4">
              {footerLinks.register.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
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
