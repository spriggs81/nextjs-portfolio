// components/ConsultingPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';

const ConsultingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. Hero Section: The Gateway */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming Your Business, One Solution at a Time.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At John Spriggs Consulting, we specialize in solving the operational headaches that hold businesses back. We build custom, powerful solutions that turn disorganized data into a clear asset and free your team from tedious, manual work. We are your partner in building a smarter, more efficient business.
          </p>
        </div>
      </section>

      {/* 2. Internal Navigation: The Core Hub */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Expertise in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Our Services */}
            <Link href="/consulting/services" className="block bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Our Services</h3>
              <p className="text-gray-600">
                A detailed breakdown of the specific services we offer, from data automation to workflow optimization.
              </p>
            </Link>
            {/* Card 2 - Case Studies */}
            <Link href="/consulting/case-studies" className="block bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <p className="text-gray-600">
                Proof of our expertise with real-world examples and measurable results from past projects.
              </p>
            </Link>
            {/* Card 3 - Blog & Insights */}
            <Link href="/consulting/blog" className="block bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Blog & Insights</h3>
              <p className="text-gray-600">
                Read our articles on business trends, technology solutions, and professional insights.
              </p>
            </Link>
            {/* Card 4 - Testimonials (update "lg:grid-cols") */}
            {/* <Link href="/consulting/testimonials" className="block bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Testimonials</h3>
              <p className="text-gray-600">
                See what our clients are saying about the value and results we've provided.
              </p>
            </Link> */}
          </div>
        </div>
      </section>

      {/* 3. Call-to-Action Section: The Next Step */}
      <section className="py-20 px-8 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Solve Your Biggest Challenge?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            If you're ready to stop worrying about day-to-day inefficiencies and start focusing on growth, we're ready to help. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ConsultingPage;
