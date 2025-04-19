"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Logo - Left */}
          <div className="absolute left-4">
            <Image
              src="/cclogo.png" // Path to your logo in the public folder
              alt="Your Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed
              className="h-10 w-auto" // Adjust styling as needed
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#udemy"
              className="text-white hover:text-primary transition-colors"
            >
              Udemy
            </Link>

            <Link
              href="https://docs.chaicode.com/"
              className="text-white hover:text-primary transition-colors"
            >
              Docs
            </Link>

            <Link
              href="#cohorts"
              className="relative text-white hover:text-primary transition-colors group"
            >
              Cohorts
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </Link>

            <Link
              href="#testimonials"
              className="text-white hover:text-primary transition-colors"
            >
              Reviews
            </Link>
          </nav>

          {/* Login Button - Right */}
          <div className="absolute right-4">
            <a
              href="https://courses.chaicode.com/learn/account/signin"
              className="button-glow"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#cohorts"
              className="relative text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cohorts
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Udemy
            </Link>
            <Link
              href="#"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="#testimonials"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Button variant="outline" className="button-glow w-full">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
