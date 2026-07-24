import { useState } from "react";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";

export default function Navigation() {
  const { isScrolled, isVisible } = useNavbarVisibility();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <a href="/">
          <img
            src="/favicon.png"
            alt="Algorithm Alchemists"
            className="h-8 sm:h-12 w-auto"
          />
        </a>

        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <a
            href="/#about"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            About
          </a>
          <a
            href="/#classes"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Classes
          </a>
          <a
            href="/#reviews"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Reviews
          </a>
          <a
            href="/#faq"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            FAQ
          </a>
          <a
            href="/our-team"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Our Team
          </a>
          <a
            href="/events"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Events
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors text-sm lg:text-base"
          >
            Contact
          </a>
          <a
            href="/sign-up"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <button className="bg-white text-purple-900 px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-lg font-bold rounded-3xl transition-all duration-300 shadow-lg transform hover:scale-105">
              Sign Up
            </button>
          </a>
        </div>

        <button
          className="md:hidden flex flex-col space-y-1 p-2 bg-transparent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="/#about"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/#classes"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Classes
          </a>
          <a
            href="/#reviews"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            href="/#faq"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="/our-team"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Team
          </a>
          <a
            href="/events"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/sign-up"
            className="text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button className="bg-white text-purple-900 px-6 py-3 text-lg font-bold rounded-3xl transition-all duration-300 shadow-lg transform hover:scale-105 w-full">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
