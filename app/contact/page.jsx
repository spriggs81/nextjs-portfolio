"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS env vars
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_R_G_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formState.name.trim() &&
    formState.email.trim() &&
    formState.message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending message...");

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      company: formState.company,
      message: formState.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage("Message sent successfully.");
        setIsSubmitting(false);
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      })
      .catch(() => {
        setStatusMessage("Failed to send message. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Header */}
      <section className="py-20 px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-600">
            For roles, opportunities, or professional inquiries.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Prefer email? Reach me at{" "}
            <a
              href="mailto:employment@johnspriggs.com"
              className="text-blue-600 hover:underline"
            >
              employment@johnspriggs.com    
            </a>
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-2 px-8">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company (optional)
              </label>
              <input
                name="company"
                type="text"
                value={formState.company}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {statusMessage && (
              <p className="text-sm text-center text-gray-600">
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                !isFormValid || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
