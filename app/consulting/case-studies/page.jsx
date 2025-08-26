// components/CaseStudiesPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';

// API Contract Data for the Case Studies Page
const caseStudiesContract = {
  "page_title": "Case Studies | John Spriggs Consulting",
  "meta_description": "Explore case studies demonstrating our proven ability to solve operational challenges, automate workflows, and deliver a quantifiable business impact.",
  "sections": [
    {
      "section_id": "hero_section",
      "headline": "Our Work. Our Results.",
      "body_text": "We believe that the best way to prove our value is through tangible results. Here are a few examples of how we've helped businesses transform operational chaos into streamlined success."
    },
    {
      "section_id": "case_studies_list",
      "cases": [
        {
          "title": "Streamlining Customer Agreements & Boosting Satisfaction",
          "client": "A Medical SaaS Company",
          "challenge": "The company was spending a lot of money and time sending physical agreements to customers, which led to delays, mistakes, and poor customer satisfaction.",
          "solution": "We identified a misunderstanding of internal rules and guided the company to switch from physical mail to email for processing agreements. This required no new software and was implemented immediately.",
          "impact": "The change improved customer satisfaction and **cut the company's mailing costs by $20,000 to $30,000 annually**."
        },
        {
          "title": "Migrating a Claims Clearinghouse with a 98% Success Rate",
          "client": "A Claims Clearinghouse",
          "challenge": "A critical project to move customers to a new clearinghouse was chaotic, with no centralized workflow. The project was falling behind schedule, with a high volume of returned mail costing the company thousands.",
          "solution": "We took over the project and redesigned the entire workflow. This included creating a centralized, accessible spreadsheet for all customers, and automating communication via email and fax with clear instruction sheets.",
          "impact": "The project finished **3 months ahead of schedule**, and we successfully migrated **98%** of their customers to the new clearinghouse, far exceeding the initial goal of 70%."
        },
        {
          "title": "Real-Time Outage Monitoring for a Software Company",
          "client": "A Software Development Company",
          "challenge": "A company’s backend processes for their software were failing without any alerts. The only way the company learned of a problem was when a customer called to report an outage, leading to poor satisfaction and the need for a 24/7 on-call team.",
          "solution": "After reviewing the processes, we developed a tool that now actively monitors their systems. This tool sends real-time email notifications to both technicians and clients whenever a problem is detected, including relevant logs.",
          "impact": "This solution eliminated the need for a constant on-call staff and drastically **improved customer satisfaction** by ensuring problems are addressed proactively."
        },
        {
          "title": "Restoring Customer Trust and Data Integrity",
          "client": "A Software Development Company",
          "challenge": "Customers were seeing incorrect information when signing up for services, leading to trust issues and an overload of support tickets. The engineering team was too busy to locate the source of the problem.",
          "solution": "We performed a full code and data audit. We verified that the data was not the issue and then located hardcoded, outdated information within the iOS code. This was a simple but critical bug that was impacting customer experience.",
          "impact": "By identifying the root cause, the engineering team was able to fix the issue, which led to a significant **reduction in support tickets** and helped the company **regain its customers' trust**."
        },
        {
          "title": "Automating Data Correction to Free Up Engineering Time",
          "client": "A Software Development Company",
          "challenge": "A company was missing critical data in their database, which was causing incorrect information in customer accounts. The support team had to constantly ask engineers to manually add the missing data, taking up valuable engineering time.",
          "solution": "We located a way for the system to automatically check for missing data. If data is missing, a new function is triggered that locates and loads the information without any human intervention.",
          "impact": "This solution now allows the support team to handle data issues on their own, **freeing up engineering resources** to focus on more complex, high-value tasks."
        }
      ]
    },
    {
      "section_id": "cta_section",
      "title": "Your Success Story Is Next.",
      "description": "The examples above are just a snapshot of the operational challenges we solve. If your business is facing a similar challenge, let's talk about how we can build a solution that delivers real, measurable results.",
      "cta_button_text": "Book Your Free Consultation",
      "cta_link": "/contact"
    }
  ]
};

const getSection = (id) => caseStudiesContract.sections.find(section => section.section_id === id);

const CaseStudiesPage = () => {
  const hero = getSection('hero_section');
  const caseStudiesList = getSection('case_studies_list');
  const cta = getSection('cta_section');

  const renderTextWithBold = (text) => {
    return <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            {hero.body_text}
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Case Studies
          </h2>
          <div className="space-y-12">
            {caseStudiesList.cases.map((study, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Client:</strong> {study.client}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-blue-600 mb-1">Challenge</h4>
                    {renderTextWithBold(study.challenge)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-600 mb-1">Solution</h4>
                    {renderTextWithBold(study.solution)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-600 mb-1">Impact</h4>
                    {renderTextWithBold(study.impact)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {cta.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <Link
            href={cta.cta_link}
            className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            {cta.cta_button_text}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CaseStudiesPage;
