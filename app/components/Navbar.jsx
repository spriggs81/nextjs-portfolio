// components/Navbar.jsx
"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'; // <-- Added this import

// API Contract Data for the unified navbar
const navbarContract = {
  "logo_name": "John Spriggs",
  "logo_link": "/images/logo.png",
  "nav_items": [
    {
      "name": "Home",
      "path": "/",
      "description": "The main landing page and central hub of the website."
    },
    {
      "name": "Portfolio",
      "path": "/portfolio",
      "description": "Showcase of personal projects, technical skills, and professional experience for potential employers."
    },
    {
      "name": "Consulting",
      "path": "/consulting",
      "description": "Dedicated hub for the consulting business, including services, process, and case studies."
    },
    {
      "name": "About",
      "path": "/about",
      "description": "Your professional narrative, story, and business philosophy."
    },
    {
      "name": "Contact",
      "path": "/contact",
      "description": "A centralized contact page for all inquiries (employment, consulting, etc.)."
    }
  ]
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 bg-white shadow-md top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Title */}
          <div className="flex-shrink-0">
            <Link href={navbarContract.logo_link}>
              <div className="h-15 md:h-15 w-16">
                <Image
                  src="/images/logo.png" // <-- Updated src path
                  alt="John Spriggs Consulting Logo"
                  width={100}
                  height={20}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navbarContract.nav_items.map((item) => (
              <Link key={item.name} href={item.path} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarContract.nav_items.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;