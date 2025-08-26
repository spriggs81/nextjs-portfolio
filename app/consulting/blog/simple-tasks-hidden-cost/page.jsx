// app/blog/simple-tasks-hidden-cost/page.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for a single blog post
const blogPostData = {
  "post_id": "simple-tasks-hidden-cost",
  "title": "Are 'Simple' Tasks Hiding a Huge Cost for Your Business?",
  "date": "2025-08-25",
  "author": "John Spriggs",
  "thumbnail_url": "/images/blog/simple-tasks-hidden-cost.png",
  "excerpt": "That trusty spreadsheet might be holding your business back. Learn about the hidden dangers of using spreadsheets for mission-critical data and how a professional solution can transform your operations.",
  "tags": [
    "Efficiency",
    "Productivity",
    "Automation",
    "Operational Costs"
  ],
  "body_content": [
    {
      "type": "paragraph",
      "text": "In any given week, how much time does your team spend on tasks that feel... well, simple? Things like manually entering customer information into a spreadsheet, sending the same welcome email to every new client, or chasing down invoice payments."
    },
    {
      "type": "paragraph",
      "text": "On their own, these tasks seem harmless. They might only take a few minutes each. But what you might not realize is that these small, repetitive actions are a hidden drain on your business, costing you thousands of dollars in lost productivity and opportunity each year."
    },
    {
      "type": "paragraph",
      "text": "The problem isn't the task itself; it's the sheer volume. A task that takes five minutes, done ten times a day, consumes nearly an hour of an employee's time. Over a year, that's hundreds of hours—hours that could have been spent on strategic projects, building client relationships, or growing your business."
    },
    {
      "type": "heading",
      "text": "From Busywork to High-Value Work"
    },
    {
      "type": "paragraph",
      "text": "Let's look at some common examples of what this \"hidden cost\" looks like:"
    },
    {
      "type": "list",
      "items": [
        "**Manual Data Entry:** An employee spends 30 minutes every day copying data from one system to another.",
        "**Repetitive Emails:** Your sales team spends 15 minutes drafting and sending follow-up emails for every new lead.",
        "**Chasing Information:** Your accounts receivable team spends hours each week sending reminder emails for past-due invoices."
      ]
    },
    {
      "type": "paragraph",
      "text": "These are all necessary tasks, but the manual effort is what's holding you back. This isn't just about saving time; it's about reallocating your most valuable resource—your people. When you free up your team from the mundane, you empower them to focus on higher-value work that directly impacts your bottom line."
    },
    {
      "type": "paragraph",
      "text": "Imagine your employees spending their time on things that actually move the needle: closing a new sale, innovating a new service, or providing exceptional customer support that builds loyalty."
    },
    {
      "type": "heading",
      "text": "A Small Investment for a Big Return"
    },
    {
      "type": "paragraph",
      "text": "Automating these tasks isn't an expense; it's a strategic investment in your business's growth."
    },
    {
      "type": "paragraph",
      "text": "Simple automations can handle the repetitive work for you. A new lead fills out a form, and their information is automatically sent to your CRM. A client signs a contract, and an automated email with next steps is sent instantly. An invoice is past due, and a friendly reminder is sent without anyone lifting a finger."
    },
    {
      "type": "paragraph",
      "text": "By streamlining your processes, you're not just fixing a problem; you're building a more efficient, profitable, and resilient business."
    },
  ]
};

const BlogPostPage = () => {
    const { title, date, author, body_content, thumbnail_url, tags } = blogPostData;

    // A function to render the content based on its type
    const renderContent = (content, index) => {
        switch (content.type) {
            case 'paragraph':
                return <p key={index} className="text-lg text-gray-700 mb-6">{content.text}</p>;
            case 'heading':
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{content.text}</h2>;
            case 'list':
                return (
                    <ul key={index} className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6">
                        {content.items.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        ))}
                    </ul>
                );
            case 'image':
                return (
                    <div key={index} className="my-8 relative w-full h-96">
                        <Image src={content.url} alt={content.alt_text} fill={true} className="object-contain" />
                        <p className="text-sm text-gray-500 mt-2 text-center">{content.alt_text}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
            <article className="max-w-4xl mx-auto py-20 px-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-500 mb-2">
                        By {author} on {date}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Image has a controlled max-width for better formatting */}
                    <div className="relative w-full max-w-2xl h-80 mt-8 mx-auto">
                        <Image src={thumbnail_url} alt={`Thumbnail for ${title}`} fill={true} className="object-cover rounded-lg shadow-md" />
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    {body_content.map(renderContent)}
                </div>

                {/* New CTA Section */}
                <div className="mt-12 text-center bg-gray-100 p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to reclaim your time?
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Let's discuss how we can turn your operational headaches into a streamlined success.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Book Your Free Consultation
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/consulting/blog"
                        className="inline-block bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-400 transition-colors duration-300"
                    >
                        Back to Blog
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPostPage;
