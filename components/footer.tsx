"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0c0806] pt-16 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* Top section with logo and tagline */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-black mr-2">
                <span className="text-xl font-bold">C</span>
              </div>
              <Link href="/" className="text-2xl font-bold text-white">
                <span className="text-primary">Chai</span>Code
              </Link>
            </div>
            <p className="text-gray-400">Home for programmers</p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 mb-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube size={20} />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-12">© 2025 ChaiCode. All rights reserved.</p>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-primary font-bold mb-6">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Learn</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Coding Hero
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  FreeAPI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Mastery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Assignments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold mb-6">Register</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
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
        <h2 className="text-[10rem] font-black footer-gradient-text opacity-50">CHAICODE</h2>
      </div>
    </footer>
  )
}
