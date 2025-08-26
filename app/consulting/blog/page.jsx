// components/BlogPage.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// API Contract Data for the Blog & Insights Page
const blogPostsContract = {
  "page_title": "Blog & Insights | John Spriggs Consulting",
  "meta_description": "Read our latest insights on operational efficiency, data management, and strategic solutions for modern businesses.",
  "page_header": {
    "title": "Blog & Insights",
    "subtitle": "Practical advice and strategic thinking for a more efficient business."
  },
  "blog_posts": [
    {
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
      ]
    },
    {
      "post_id": "simple-tasks-hidden-cost",
      "title": "Are 'Simple' Tasks Hiding a Huge Cost for Your Business?",
      "date": "2025-08-25",
      "author": "John Spriggs",
      "thumbnail_url": "/images/blog/simple-tasks-hidden-cost.png",
      "excerpt": "Small, repetitive tasks can be a hidden drain on your business. Discover how automating these simple tasks can save your team hundreds of hours and reallocate your most valuable resource toward high-value work.",
      "tags": [
        "Efficiency",
        "Productivity",
        "Automation",
        "Operational Costs"
      ]
    },
    {
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
      ]
    }
  ]
};

const BlogPage = () => {
  const { page_header, blog_posts } = blogPostsContract;

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Page Header Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {page_header.title}
          </h1>
          <h2 className="text-lg md:text-xl max-w-3xl mx-auto">
            {page_header.subtitle}
          </h2>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blog_posts.map((post) => (
              <Link
                key={post.post_id}
                href={`/consulting/blog/${post.post_id}`}
                className="block rounded-lg shadow-lg bg-gray-100 overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-48">
                    <Image
                    src={post.thumbnail_url}
                    alt={`Thumbnail for ${post.title}`}
                    fill={true}
                    className="object-cover"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    By {post.author} on {post.date}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
