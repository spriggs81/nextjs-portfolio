// components/PortfolioHubPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';

const PortfolioHubPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            My Work: Turning Challenges into Solutions.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            I specialize in designing and building efficient systems that solve complex business problems. This portfolio is a showcase of my professional experience, technical projects, and proven ability to deliver quantifiable results.
          </p>
        </div>
      </section>

      {/* Portfolio Hub Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {/* Card 1: Experience */}
            <div className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">My Professional Experience</h3>
              <p className="text-gray-600 mb-6">
                A deep dive into my work history, key achievements, and case studies.
              </p>
              <Link
                href="/experience"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Experience
              </Link>
            </div>
            {/* Card 2: Projects */}
            <div className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">My Personal Projects</h3>
              <p className="text-gray-600 mb-6">
                A showcase of my hands-on skills and continuous learning mindset.
              </p>
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1: For Companies */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">For Companies</h3>
              <p className="text-gray-600 mb-4">
                A look into my professional experience, key achievements, and portfolio of projects.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
                <h4 className="font-semibold text-lg mb-2">Key Achievement Spotlight</h4>
                <p className="text-gray-700">
                  Transformed a chaotic, year-long client account migration project, completing it three months ahead of schedule and converting 98% of clients.
                </p>
              </div>
              <Link
                href="/experience"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                View All Experience
              </Link>
            </div>
            
            {/* Column 2: For Local Businesses */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">For Local Businesses</h3>
              <p className="text-gray-600 mb-4">
                Find out how I can help your business solve its top pain points and optimize your workflows.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
                <h4 className="font-semibold text-lg mb-2">Consulting Scenario Spotlight</h4>
                <p className="text-gray-700">
                  Solving the "Spreadsheet Automation" problem: We'll migrate your data to a secure database and automate the entire process, freeing you from manual entry.
                </p>
              </div>
              <Link
                href="/consulting"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                See My Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioHubPage;
