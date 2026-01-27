// components/Homepage.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeCard from './components/HomeCard';

const content = [
  {
    image: '🚨',
    title: 'Production Incident Debugging',
    body: 'Investigating complex production failures by correlating logs, API behavior, and database state to identify root causes and drive resolution.'
  },
  {
    image: '🧭',
    title: 'Escalation Ownership',
    body: 'Acting as a primary escalation point, coordinating across engineering, database, and infrastructure teams to resolve issues quickly and reduce repeat incidents.'
  },
  {
    image: '🛠️',
    title: 'Reliability & Tooling Improvements',
    body: 'Building internal tools, monitoring, and automation that improve observability, catch silent failures, and reduce operational load on teams.'
  }
]

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
              Senior Technical Support Engineer focused on production reliability and complex system debugging
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700 mb-6">
              I diagnose and resolve high-impact incidents by correlating logs, API behavior, and database state across distributed systems.
            </h2>
            <p className="text-gray-600 mb-8">
              I bring over a decade of experience supporting mission-critical platforms in fintech, analytics, and healthcare, operating in 
              24/7 production environments. My work sits at the intersection of support and engineering—owning escalations, identifying root 
              causes, and improving system reliability through better tooling, monitoring, and process.
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
            What I’m Known For
          </h2>
          <HomeCard content={content} />
        </div>
      </section>

      {/* 3. Featured Work Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Selected Experience Highlights
          </h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Production & Operations Impact
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                Led resolution of high-impact production incidents by owning investigation through 
                deep log analysis, SQL investigation, and API-level debugging across distributed systems.
              </li>
              <li>
                Owned complex customer escalations end-to-end, coordinating with engineering,
                product, and support teams to restore service and prevent recurrence.
              </li>
              <li>
                Built and maintained internal tooling and automation to reduce manual triage
                and improve incident response time and reliability.
              </li>
            </ul>
            <div className='mt-6 text-center'>
              <Link
                href="/experience"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                View All Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Call-to-Action */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Interested in working together?
        </h2>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
        >
          {`Connect on LinkedIn`}
        </a>
      </section>
    </div>
  );
};

export default Homepage;