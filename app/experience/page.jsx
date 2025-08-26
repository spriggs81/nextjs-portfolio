// components/ExperiencePage.jsx
"use client";

import React, { useState } from 'react';

// Data structure for the experience content
const experienceData = [
  {
    company: 'Grain Technologies',
    title: 'Technical Support Engineer',
    dates: 'Apr. 2021 – Apr. 2023',
    location: 'Oakland, CA (Remote Only)',
    details: [
      'Joined as an early employee (approx. #24-26) at a rapidly growing startup, directly alleviating engineering bottlenecks by handling complex support escalations.',
      'Pinpointed root causes of complex software/system issues using advanced data analysis for enterprise clients.',
      'Discovered and reported critical software bugs, leading to swift remediation and product quality improvements.',
      'Served as a crucial liaison between engineering and support, facilitating seamless collaboration.',
      'Resolved a critical $250K data integrity issue affecting 500+ customers with an automated solution.',
    ],
    caseStudies: [
      {
        title: 'Automating Critical Data Integrity Resolution',
        problem: 'Customers were experiencing significant data discrepancies impacting financial reporting and leading to high support ticket volumes. Manual investigations by engineering caused bottlenecks.',
        solution: 'Leveraged expert SQL skills for deep data analysis to pinpoint the root cause. Developed and implemented a JavaScript-based script to systematically identify and correct corrupted data across affected accounts, collaborating closely with engineering for validation.',
        impact: 'Resolved a $250,000 data integrity issue, eliminated 500+ customer complaints, and reduced manual investigation time by 80%, freeing up engineering resources.',
      },
    ],
  },
  {
    company: 'Viz Explorer',
    title: 'Delivery Support Analyst',
    dates: 'May 2017 – May 2020',
    location: 'Las Vegas, NV (Remote Only)',
    details: [
      'Acted as the designated "go-to person" for escalated technical challenges, consistently resolving complex issues faster than peers.',
      'Contributed valuable code suggestions and optimizations, directly enhancing product performance and user satisfaction.',
      'Collaborated with colleagues, assisting them in researching problems and guiding them toward effective resolutions.',
      'Optimized PM2 configuration using JavaScript, resolving a recurring system outage and improving application stability.',
    ],
    caseStudies: [
      {
        title: 'Optimizing Application Stability via PM2 Configuration',
        problem: 'Recurring system outages were impacting application stability and generating frequent support tickets, requiring manual intervention.',
        solution: 'Identified inefficiencies in PM2 configuration. Developed and implemented a JavaScript-based optimization script to fine-tune PM2 settings for improved resource management and stability in a Linux-based environment.',
        impact: 'Resolved recurring system outages, significantly improving application stability and reducing associated support overhead. Enhanced overall product reliability and user experience.',
      },
    ],
  },
  {
    company: 'Pulse Inc (Formerly Nightingale and Medrium)',
    title: 'Technical Support/EDI Specialist',
    dates: 'Aug. 2008 – Nov. 2017',
    location: 'Rancho Cordova, CA (Hybrid)',
    details: [
      'Functioned as a Tier 2 Technical Support specialist, serving as the direct escalation point for Tier 1 support.',
      'Successfully led and completed a project three months ahead of schedule, exceeding expectations by 28%.',
      'Independently managed a critical project involving updating payer codes for medical claim EDI submission.',
      'Spearheaded a cost-saving and time-efficient procedure for EDI agreements, reducing mailing costs by ~$20,000 annually.',
      'Mentored and developed a Tier 1 support agent, significantly improving their customer interactions and efficiency.',
    ],
    caseStudies: [
      {
        title: 'Spearheading Cost-Saving EDI Procedure',
        problem: 'Existing EDI agreement processes were inefficient and costly, involving significant mailing expenses and slow turnaround times.',
        solution: 'Independently analyzed current procedures and spearheaded the implementation of a new, streamlined, and more efficient process for handling EDI agreements, leveraging digital solutions.',
        impact: 'Reduced mailing costs by ~$20,000 annually and significantly improved turnaround time for EDI agreements, leading to enhanced customer satisfaction and substantial benefits for the company.',
      },
      {
        title: 'Mentoring & Developing Tier 1 Support Agent',
        problem: 'A Tier 1 support agent struggled with customer interactions and efficient issue resolution, impacting team performance and customer satisfaction.',
        solution: 'Provided direct mentorship, personalized training, and ongoing guidance, focusing on communication techniques, troubleshooting methodologies, and customer empathy. Acted as a direct escalation point to guide complex cases.',
        impact: 'Significantly transformed the agent\'s customer interactions, leading to improved resolution efficiency and higher customer satisfaction scores. Contributed directly to team growth and overall support quality.',
      },
    ],
  },
];

const ExperiencePage = () => {
  const [openCompany, setOpenCompany] = useState(null);

  const toggleCompany = (companyName) => {
    setOpenCompany(openCompany === companyName ? null : companyName);
  };

  const renderCaseStudy = (caseStudy) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-4">
      <h4 className="text-xl font-bold mb-4">{caseStudy.title}</h4>
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-lg text-blue-600 mb-1">Problem</h5>
          <p className="text-gray-700">{caseStudy.problem}</p>
        </div>
        <div>
          <h5 className="font-semibold text-lg text-blue-600 mb-1">Solution</h5>
          <p className="text-gray-700">{caseStudy.solution}</p>
        </div>
        <div>
          <h5 className="font-semibold text-lg text-blue-600 mb-1">Impact</h5>
          <p className="text-gray-700">{caseStudy.impact}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen pt-16">
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Professional Experience
          </h1>
          
          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.company} className="bg-gray-100 p-8 rounded-lg shadow-md">
                {/* Collapsible Header */}
                <div 
                  onClick={() => toggleCompany(exp.company)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-bold">{exp.company}</h2>
                    <p className="text-lg text-gray-600">{exp.title}</p>
                    <p className="text-sm text-gray-500">{exp.dates} | {exp.location}</p>
                  </div>
                  <span className="text-2xl transform transition-transform duration-300">
                    {openCompany === exp.company ? '▲' : '▼'}
                  </span>
                </div>

                {/* Expanded Details */}
                {openCompany === exp.company && (
                  <div className="mt-6 space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                      {exp.details.map((detail, index) => (
                        <li key={index} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                    
                    {/* Case Studies */}
                    {exp.caseStudies.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
                        <div className="space-y-6">
                          {exp.caseStudies.map((caseStudy, index) => (
                            <div key={index}>
                              {renderCaseStudy(caseStudy)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
