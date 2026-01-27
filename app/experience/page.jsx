// components/ExperiencePage.jsx
"use client";

import React from 'react';
import ExperienceDisplay from '../components/ExperienceDisplay';

// Data structure for the experience content
const experienceData = [
  {
    company: 'Grain Technologies',
    title: 'Senior Technical Support Engineer',
    dates: 'Apr. 2021 – Apr. 2023',
    location: 'Oakland, CA (Remote Only)',
    details: [
      'Served as a senior escalation point for complex production issues across Node.js services, internal APIs, and PostgreSQL databases in a live fintech environment handling financial transactions.',
      'Investigated data integrity and transaction discrepancies by correlating application logs, webhook events, and database state, identifying root causes that were not visible through standard support tooling.',
      'Identified and surfaced backend API rate-limiting logic that unintentionally blocked vendor callbacks, contributing to missing transaction records and reconciliation failures.',
      'Collaborated directly with engineering leadership to evaluate remediation approaches, including validating transaction state against third-party APIs instead of applying destructive bulk fixes.',
      'Improved platform reliability by resolving backend validation inconsistencies between mobile clients and web-based password reset flows, closing both security and usability gaps.',
    ],
  },
  {
    company: 'Viz Explorer',
    title: 'Senior Technical Support Engineer',
    dates: 'May 2017 – May 2020',
    location: 'Las Vegas, NV (Remote Only)',
    details: [
      'Provided production support for analytics and operational systems used by large casino clients operating in 24/7 environments with zero tolerance for extended downtime.',
      'Became a primary escalation point by performing deep, cross-team troubleshooting before involving engineering, significantly reducing resolution times and unnecessary handoffs.',
      'Diagnosed backend ETL pipeline failures and silent service outages by proactively reviewing logs and processing state, coordinating directly with DBA and systems engineering leadership to restore service.',
      'Routinely collaborated live with database, systems, and engineering teams to observe internal debugging workflows, then applied those methods independently to resolve future incidents.',
      'Designed and built a Node.js monitoring utility to detect backend process failures and recovery events, issuing automated alerts; later published the tool publicly as an npm module (pm2-watcher).'
    ],
  },
  {
    company: 'Pulse Inc (Formerly Nightingale and Medrium)',
    title: 'Senior Technical Support Engineer / EDI Specialist',
    dates: 'Aug. 2008 – Nov. 2016',
    location: 'Rancho Cordova, CA (Hybrid)',
    details: [
      'Supported healthcare revenue cycle management and EDI processing systems through multiple company acquisitions, maintaining operational continuity during organizational and platform transitions.',
      'Served as a Tier 2 escalation resource for complex production issues involving EDI submissions, payer agreements, and compliance-sensitive workflows.',
      'Identified and corrected a misinterpretation of HIPAA compliance related to provider agreements, enabling secure electronic delivery and eliminating unnecessary overnight shipping, saving over $20K annually.',
      'Played a key role in a company-wide clearinghouse migration by redesigning tracking and communication workflows, improving cross-team visibility and achieving 98% client conversion in nine months.',
      'Acted as an informal mentor and escalation resource for newer team members, improving confidence, issue resolution quality, and overall team effectiveness.',
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Production Support & Systems Experience
          </h1>
          <ExperienceDisplay data = {experienceData} />
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Selected incidents and deep technical investigations are documented separately.
          </p>
          <a
            href="/case-studies"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            View Case Studies →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
