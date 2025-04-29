"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Code, FileText, Star, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div>
            <Link href="/" className="flex items-center">
              {/* Replace this with your logo image */}
              <Image
                src="/cclogo.png?height=40&width=40"
                alt="Logo"
                width={120}
                height={120}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#cohorts"
              className="flex items-center text-white hover:text-orange-300 transition-colors"
            >
              <Code className="h-5 w-5 mr-1.5" />
              <span>Cohorts</span>
            </Link>
            <Link
              href="https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35"
              className="flex items-center text-white hover:text-orange-300 transition-colors"
            >
              <FileText className="h-5 w-5 mr-1.5" />
              <span>Udemy</span>
            </Link>
            <Link
              href="https://docs.chaicode.com/"
              className="flex items-center text-white hover:text-orange-300 transition-colors"
            >
              <FileText className="h-5 w-5 mr-1.5" />
              <span>Docs</span>
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center text-white hover:text-orange-300 transition-colors"
            >
              <Star className="h-5 w-5 mr-1.5" />
              <span>Reviews</span>
            </Link>
          </nav>

          {/* Login Button - Right */}
          <div className="hidden md:block">
            <button>
              <a
                href="https://courses.chaicode.com/learn/account/signin"
                className="button-glow"
              >
                Login
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="#cohorts"
              className="flex items-center text-white hover:text-orange-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Code className="h-5 w-5 mr-1.5" />
              <span>Cohorts</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-white hover:text-orange-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5 mr-1.5" />
              <span>Udemy</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-white hover:text-orange-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5 mr-1.5" />
              <span>Docs</span>
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center text-white hover:text-orange-300 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Star className="h-5 w-5 mr-1.5" />
              <span>Reviews</span>
            </Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md flex items-center justify-center transition-colors shadow-glow-orange mt-2">
              <span>Login</span>
            </button>
          </nav>
        </div>
      )}

      <div className="border-t border-gray-700/50 mt-1"></div>
    </header>
  );
}
