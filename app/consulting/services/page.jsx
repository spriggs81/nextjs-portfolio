// components/ServicesPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';

// API Contract Data
const servicesContract = {
  "page_title": "Your Services: Solutions for Business Growth",
  "meta_description": "We help businesses overcome operational challenges and turn messy data into a competitive advantage.",
  "sections": [
    {
      "section_id": "hero_section",
      "headline": "Free Your Business from Manual, Repetitive Tasks.",
      "subheadline": "Reclaim Your Time and Focus on Growth.",
      "body_text": "Expert Automation Solutions Tailored for Law Firms, Retailers, and Growing Businesses."
    },
    {
      "section_id": "problem_section",
      "headline": "Tired of Wasting Time on Tedious Tasks?",
      "body_text": [
        "In today's fast-paced business environment, efficiency is paramount. Yet, many businesses find themselves bogged down by manual data entry, inconsistent workflows, and fragmented data across multiple systems. These operational headaches not only drain valuable time and resources but also hinder your ability to scale and innovate.",
        "Imagine a workplace where information flows seamlessly, repetitive tasks are handled automatically, and your team can focus on high-value activities that truly drive your business forward. This isn't just a dream – it's achievable with strategic automation."
      ]
    },
    {
      "section_id": "services_section",
      "headline": "Unlock Your Business Potential with Tailored Solutions",
      "services_list": [
        {
          "title": "Get Started",
          "icon_name": "start-icon",
          "description": "For businesses taking their first steps or needing a solid online foundation. We handle the technical side so you can focus on your business.",
          "services_provided": [
            "Website design & creation",
            "Domain name purchase & setup",
            "Professional email setup",
            "Cloud service configuration"
          ]
        },
        {
          "title": "Fix & Optimize",
          "icon_name": "optimize-icon",
          "description": "For established businesses with an existing system that needs to be more efficient, reliable, or cost-effective. We fix what's broken and make it better.",
          "services_provided": [
            "Messy data correction & management",
            "Operational workflow automation",
            "Software & subscription cost-cutting",
            "Outdated system modernization"
          ]
        },
        {
          "title": "Get a Partner",
          "icon_name": "partner-icon",
          "description": "For businesses that need ongoing technical assistance without the cost of a full-time employee. We're your on-demand technical co-pilot.",
          "services_provided": [
            "Understanding complex software & systems",
            "On-demand technical support & maintenance",
            "Security & process audits",
            "Clear, simple communication & training"
          ]
        }
      ]
    },
    {
      "section_id": "about_section",
      "headline": "Your Trusted Partner in Business Automation",
      "body_text": "I am a seasoned operations consultant with a proven track record of building robust and efficient automated systems for businesses like yours. I go beyond simply implementing tools; I understand the underlying processes and tailor solutions that align with your specific business goals. My approach focuses on creating sustainable solutions that not only solve immediate problems but also empower your team and provide a solid foundation for future growth. You can expect clear communication, a collaborative approach, and a commitment to delivering tangible results."
    },
    {
      "section_id": "cta_section",
      "headline": "Ready to Automate Your Success?",
      "body_text": "Stop wasting valuable time and resources on manual tasks. Let's discuss your specific needs and explore how a tailored automation solution can drive efficiency and growth for your business.",
      "cta_button_text": "Get a Custom Quote",
      "cta_link": "/contact",
      "secondary_cta_text": "Learn More About Our Process",
      "secondary_cta_link": "/consulting/ourprocess"
    }
  ]
};

const getSection = (id) => servicesContract.sections.find(section => section.section_id === id);

const ServicesPage = () => {
  const hero = getSection('hero_section');
  const problem = getSection('problem_section');
  const services = getSection('services_section');
  const about = getSection('about_section');
  const cta = getSection('cta_section');

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {hero.headline}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            {hero.subheadline}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {hero.body_text}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {problem.headline}
          </h2>
          <div className="text-lg text-gray-700 space-y-6">
            {problem.body_text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {services.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.services_list.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <h4 className="font-bold text-lg mb-2">Services Provided:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {service.services_provided.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {about.headline}
          </h2>
          <p className="text-lg text-gray-700">
            {about.body_text}
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {cta.headline}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {cta.body_text}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href={cta.cta_link}
              className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {cta.cta_button_text}
            </Link>
            <Link
              href={cta.secondary_cta_link}
              className="inline-block text-white border-2 border-white font-bold py-4 px-12 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              {cta.secondary_cta_text}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
