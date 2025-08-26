// app/blog/outdated-software-best-asset/page.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for a single blog post
const blogPostData = {
  "post_id": "outdated-software-best-asset",
  "title": "Why Your 'Outdated' Software Might Be Your Best Asset (For Now)",
  "date": "2025-08-25",
  "author": "John Spriggs",
  "thumbnail_url": "/images/blog/outdated-software-best-asset.png",
  "excerpt": "That outdated software you're afraid to change might be your best asset. Learn how simple, strategic upgrades can transform your operations without a costly and complicated overhaul.",
  "tags": [
    "Strategy",
    "Business Growth",
    "Operational Consulting",
    "Legacy Systems"
  ],
  "body_content": [
    {
      "type": "paragraph",
      "text": "Let's face it: the world of business software moves at lightning speed. It's easy to feel like you're falling behind if you're still relying on systems that feel a little... well, outdated. I get it. The thought of ripping out your existing infrastructure can be daunting. It's expensive, time-consuming, and comes with a steep learning curve. There's a real \"fear of the new,\" and sticking with what you know feels like the safest bet."
    },
    {
      "type": "paragraph",
      "text": "And you know what? Sometimes, it is."
    },
    {
      "type": "paragraph",
      "text": "The familiar, even if it's a bit clunky, has something invaluable: your team knows it. They've built their workflows around it. The truth is, for many small businesses, the problem isn't the software itself, but rather the way it's being used. That's where my \"simple-minded\" approach comes in."
    },
    {
      "type": "heading",
      "text": "My Simple Solution: Making Your Existing Systems Shine"
    },
    {
      "type": "paragraph",
      "text": "I don't always believe in forcing a complete overhaul. Instead, I look for practical, straightforward ways to enhance your current setup. Think of it like this: you might not need a brand new car if a few smart upgrades can make your current one run smoother and more efficiently."
    },
    {
      "type": "paragraph",
      "text": "My focus is on identifying the bottlenecks and then implementing simple tools to bridge the gaps. This could involve:"
    },
    {
      "type": "list",
      "items": [
        "**Streamlining Data Entry:** Creating simple scripts or integrations to reduce manual work between your existing systems.",
        "**Improving Reporting:** Building custom dashboards that pull valuable insights from your current data.",
        "**Automating Repetitive Tasks:** Setting up basic workflows to handle routine actions, freeing up your team's time."
      ]
    },
    {
      "type": "paragraph",
      "text": "The goal is to make your existing software work smarter, not necessarily to replace it entirely. This approach offers several advantages:"
    },
    {
      "type": "list",
      "items": [
        "**Cost-effective:** It's significantly less expensive than a full-scale software migration.",
        "**Faster implementation:** Simple improvements can often be delivered immediately.",
        "**Reduced disruption:** Your team can continue using familiar tools, minimizing the learning curve and disruption to your operations."
      ]
    },
    {
      "type": "heading",
      "text": "Unlock the Hidden Potential of What You Already Have"
    },
    {
      "type": "paragraph",
      "text": "Don't let the pressure of \"new and shiny\" force you into an expensive and complicated transition before you're ready. Your current software likely holds a lot of untapped potential."
    },
    {
      "type": "paragraph",
      "text": "Let's explore how we can take a fresh look at your existing systems and implement simple, effective solutions to make them more efficient and user-friendly."
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
                        Ready to make your <strong>outdated</strong> software your best asset for right now?
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
