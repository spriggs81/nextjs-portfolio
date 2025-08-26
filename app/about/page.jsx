// components/AboutPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. About Me Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            More Than a Resume: My Journey into Problem-Solving
          </h1>
          <div className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto space-y-6">
            <p>
              My journey into technical support began over a decade ago, driven by a natural curiosity for how systems work and a deep satisfaction in helping people overcome technical hurdles. I quickly discovered a passion for not just fixing problems, but understanding their root causes and implementing solutions that prevent future issues. This dedication has earned me the reputation as "The Go-To Person" for complex technical challenges.
            </p>
            <p>
              I thrive in dynamic, fast-paced environments, particularly within SaaS. My approach is always customer-first, combined with a strong analytical mindset. I believe in transforming reactive support into strategic product improvement, constantly seeking opportunities to optimize operations and enhance the user experience. My experience as an early employee at a rapidly growing startup has taught me the value of wearing multiple hats and directly contributing to a company's mission.
            </p>
            <p>
              I am a continuous learner, always eager to expand my technical toolkit, whether it's diving deeper into SQL, exploring new JavaScript frameworks, or understanding the nuances of emerging technologies. My goal is to leverage my critical thinking, project ownership, and collaborative spirit to make a significant, tangible impact wherever I contribute.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Consulting Bridge Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            From Personal Passion to Professional Service
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            The projects you've seen here are a result of my lifelong passion for problem-solving and building. I've taken this same hands-on, problem-first approach and now offer it as a professional service. If you or your business are facing operational challenges, messy data, or inefficient workflows, let's talk. My work isn't just a hobby; it's a proven method for delivering real-world results.
          </p>
          <Link
            href="/consulting"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            See how I can help your business grow and thrive.
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;