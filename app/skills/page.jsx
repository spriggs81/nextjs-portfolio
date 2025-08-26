// components/SkillsPage.jsx
"use client";

import React, { useState } from 'react';

// Data structure for the skills, including the "aha" moment descriptions
const skillData = [
  {
    category: "Technical Skills & Tools",
    skills: [
      {
        name: "SQL (PostgreSQL, MySQL, MS SQL Server, Oracle SQL)",
        description: null,
      },
      {
        name: "Python",
        description: null,
      },
      {
        name: "JavaScript (Node.js, Express.js, React.js)",
        description: null,
      },
      {
        name: "API Troubleshooting",
        description: "Experience diagnosing and debugging API endpoints, logs, and schemas to resolve complex integration issues for enterprise clients."
      },
      {
        name: "CRM Platforms (Salesforce, Zendesk)",
        description: null,
      },
      {
        name: "Ticketing Systems (Jira, Eventum Issue Tracking)",
        description: null,
      },
      {
        name: "Web Technologies (HTML, CSS, Web Development, Browser Dev Tools, PM2)",
        description: null,
      },
      {
        name: "Cloud & Infrastructure (AWS - conceptual, Linux, Command Line)",
        description: null,
      },
      {
        name: "Automation & Scripting",
        description: "Proficient in using Python and JavaScript to automate scripts for data extraction, analysis, and system optimization."
      },
      {
        name: "Data Tools (Postman, Tableau, Data Analysis, Data Validation)",
        description: null,
      },
    ],
  },
  {
    category: "Core Competencies",
    skills: [
      {
        name: "Technical Support (Application Support, Tier 2 Support, L1 & L2 Escalation Management)",
        description: null,
      },
      {
        name: "Problem-Solving",
        description: "Known as 'The Go-To Person' for tackling the toughest technical challenges and translating chaos into structured solutions."
      },
      {
        name: "Process Improvement",
        description: "Successfully spearheaded a cost-saving procedure that reduced mailing costs by ~$20,000 annually and significantly improved turnaround time."
      },
      {
        name: "Customer Advocacy",
        description: "A customer-first mindset with a proven track record of acting as a crucial liaison between support and engineering to improve product quality."
      },
      {
        name: "Mentorship & Training",
        description: "Mentored and developed a Tier 1 support agent, significantly improving their customer interactions and resolution efficiency."
      },
      {
        name: "Startup Mindset",
        description: "Thrived as an early employee at a rapidly growing startup, wearing multiple hats and directly alleviating engineering bottlenecks."
      },
      {
        name: "Project Management (Project Leadership, Needs Gathering, Milestones & Deadlines, Change Management)",
        description: null,
      },
      {
        name: "Communication (Technical Writing, Client Engagement, Cross-functional Collaboration)",
        description: null,
      },
      {
        name: "Quality Assurance (Testing, Bug Reporting, Quality Control)",
        description: null,
      },
    ],
  },
  {
    category: "Industry Knowledge",
    skills: [
      {
        name: "SaaS (B2B SaaS, B2C SaaS)",
        description: null,
      },
      {
        name: "FinTech (Payments, Financial Data, Invoicing)",
        description: null,
      },
      {
        name: "Healthcare (EDI Specialist, Medical Claims)",
        description: null,
      },
      {
        name: "Gaming (Casino Gaming)",
        description: null,
      },
    ],
  },
];

const SkillsPage = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (skill.description) {
      setActiveSkill(skill);
    }
  };

  const handleCloseModal = () => {
    setActiveSkill(null);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Main Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            My Skills & Expertise
          </h1>
          
          {skillData.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-4 justify-start">
                {category.skills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => handleSkillClick(skill)}
                    className={`
                      py-2 px-6 rounded-full shadow-md transition-transform duration-300
                      ${skill.description ? 
                        'bg-blue-600 text-white font-semibold hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' 
                        : 'bg-gray-300 text-gray-700 font-normal cursor-default'
                      }
                    `}
                  >
                    {skill.name}
                    {skill.description && (
                      <span className="ml-2">💡</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Pop-up for Skill Description */}
      {activeSkill && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full transform scale-95 transition-transform duration-300 animate-fade-in-up"
          >
            <h3 className="text-2xl font-bold mb-4">{activeSkill.name}</h3>
            <p className="text-gray-700">{activeSkill.description}</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SkillsPage;
