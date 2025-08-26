// components/Homepage.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Homepage = () => {
  const linkedin = "https://www.linkedin.com/in/john-s-836703a/";
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Professional Headshot - Placeholder */}
          <div className="flex justify-center">
            <Image
              src="/images/headshot.png"
              alt="Professional headshot of John Spriggs"
              width={256}
              height={256}
              className="rounded-full object-cover w-64 h-64"
            />
          </div>
          
          {/* Main Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Expert Technical Problem-Solver and Operations Leader
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700 mb-6">
              I build systems that simplify complex problems and help high-growth companies scale their operations with confidence.
            </h2>
            <p className="text-gray-600 mb-8">
              With over a decade of experience, I specialize in transforming complex technical issues into streamlined solutions and optimizing support operations for high-growth SaaS companies.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/experience"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                View My Work
              </Link>
              <a
                href= {linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "What I Do" Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl mb-4 inline-block">🔍</span>
              <h3 className="text-2xl font-semibold mb-2">Relentless Root Cause Analysis</h3>
              <p className="text-gray-600">
                I excel at diagnosing complex software and system issues, performing deep-dives into APIs and data to resolve problems at their source.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl mb-4 inline-block">⚙️</span>
              <h3 className="text-2xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-gray-600">
                I turn chaos into systems by building automated workflows and documentation that save time and allow support teams to scale efficiently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl mb-4 inline-block">📈</span>
              <h3 className="text-2xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">
                I analyze customer feedback and operational data to spot recurring issues, providing actionable insights that drive measurable product improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Work Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1: For Employers */}
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
            
            {/* Column 2: For Consulting Clients */}
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

      {/* 4. Final Call-to-Action */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Connect?
        </h2>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Let's Connect on LinkedIn
        </a>
      </section>
    </div>
  );
};

export default Homepage;