// app/blog/spreadsheet-ticking-time-bomb/page.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for the 'Spreadsheet's a Ticking Time Bomb?' blog post
const blogPostData = {
  "post_id": "spreadsheet-ticking-time-bomb",
  "title": "Is Your Spreadsheet a Ticking Time Bomb?",
  "date": "2025-08-25",
  "author": "John Spriggs",
  "thumbnail_url": "/images/blog/spreadsheet-ticking-time-bomb.png",
  "excerpt": "That trusty spreadsheet might be holding your business back. Learn about the hidden dangers of using spreadsheets for mission-critical data and how a professional solution can transform your operations.",
  "tags": [
    "Data Management",
    "Automation",
    "Small Business",
    "Operational Efficiency"
  ],
  "body_content": [
    {
      "type": "paragraph",
      "text": "As a small business owner, you're constantly juggling a dozen different things. Your sales data, customer lists, and inventory—it all has to live somewhere. For many, that \"somewhere\" is a collection of spreadsheets. They're the trusty, free tools you've relied on for years."
    },
    {
      "type": "paragraph",
      "text": "But what if that trust is misplaced? What if your collection of spreadsheets is actually a ticking time bomb, waiting to create a disaster for your business?"
    },
    {
      "type": "paragraph",
      "text": "I've seen it happen. A single typo, a deleted row, or a forgotten backup can turn a simple mistake into a costly crisis. The longer you rely on scattered spreadsheets for your mission-critical data, the greater the risk."
    },
    {
      "type": "heading",
      "text": "The Hidden Dangers of Spreadsheet Chaos"
    },
    {
      "type": "list",
      "items": [
        "**A Single Point of Failure:** How many of your business-critical spreadsheets are \"owned\" by just one person? What happens if they're sick, on vacation, or leave the company? The process they created might be a mystery to everyone else, leaving your business in a bind.",
        "**The Risk of Errors:** Studies have shown that a high percentage of spreadsheets contain errors. It's easy to make a small mistake that can lead to massive inaccuracies in your sales forecasts or customer records. These small errors can snowball into huge problems.",
        "**No Version Control:** You're working on the \"Q3_Sales_Final.xlsx\" file. A colleague is working on the \"Q3_Sales_Final_v2.xlsx\" file. This confusion leads to inconsistent data and wasted time trying to figure out which version is the correct one.",
        "**The Illusion of Backups:** You might think your data is safe with cloud storage, but are you truly protected? If a key spreadsheet gets corrupted, accidentally deleted, or locked out, is a clean, usable backup just a click away?"
      ]
    },
    {
      "type": "heading",
      "text": "Don't Wait for the Explosion"
    },
    {
      "type": "paragraph",
      "text": "You don't have to live with the anxiety of a spreadsheet ticking time bomb."
    },
    {
      "type": "paragraph",
      "text": "Imagine a system where all your data is automatically synced, updated in real time, and securely backed up. A system where your team can collaborate without creating multiple versions, and where human error is minimized."
    },
    {
      "type": "paragraph",
      "text": "This isn't a pipe dream. It's a professional, automated solution designed to give you peace of mind and help your business grow."
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
                    <div key={index} className="my-8">
                        <img src={content.url} alt={content.alt_text} className="w-full h-auto rounded-lg shadow-md" />
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
                        Ready to move beyond the chaos?
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Book a free consultation to discuss your specific operational challenges and discover how we can build a solution that delivers real, measurable results.
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
