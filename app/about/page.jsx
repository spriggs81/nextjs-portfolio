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
            More Than a Resume: A Career Built on Solving Production Problems
          </h1>
          <div className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto space-y-6">
            <p>
              My journey into technical support began over a decade ago, driven by a natural curiosity for how systems 
              work and a deep satisfaction in helping people overcome technical hurdles. I quickly discovered a passion 
              for not just fixing problems, but understanding their root causes and implementing solutions that prevent 
              future issues. This dedication has repeatedly made me the go-to person for diagnosing and resolving 
              complex production issues.
            </p>
            <p>
              I thrive in dynamic, fast-paced environments, particularly within SaaS. My approach is always customer-first, 
              combined with a strong analytical mindset. I believe in transforming reactive support into strategic product 
              improvement, constantly seeking opportunities to optimize operations and enhance the user experience. My 
              experience as an early employee at a rapidly growing startup has taught me the value of wearing multiple hats 
              and directly contributing to a company's mission. I’m most effective when I have clear ownership of problems 
              from first signal to long-term prevention.
            </p>
            <p>
              I am a continuous learner, always eager to expand my technical toolkit, whether it's deepening my SQL expertise, 
              refining backend JavaScript, or understanding emerging system patterns. My goal is to leverage my critical 
              thinking, project ownership, and collaborative spirit to make a significant, tangible impact wherever I contribute.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;