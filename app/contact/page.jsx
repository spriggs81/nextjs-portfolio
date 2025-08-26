// components/ContactPage.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// API Contract Data for the Contact Page
const contactContract = {
  "page_title": "Contact | John Spriggs",
  "meta_description": "Contact John Spriggs for business consulting, employment opportunities, or general inquiries.",
  "form_header": {
    "title": "Let's Build Something Great Together.",
    "subtitle": "Whether you're looking to hire, work with me, or just say hello, I'm ready to talk."
  },
  "initial_question": {
    "question_text": "What brings you here?",
    "options": [
      {
        "id": "consulting",
        "label": "I'm interested in your consulting services."
      },
      {
        "id": "recruiter",
        "label": "I'm a recruiter or a potential employer."
      },
      {
        "id": "general",
        "label": "I'm a fellow developer or just want to say hi."
      }
    ]
  },
  "contact_forms": [
    {
      "form_id": "consulting",
      "name": "Consulting Clients",
      "fields": [
        {
          "id": "full_name",
          "label": "Name",
          "type": "text",
          "required": true
        },
        {
          "id": "email_address",
          "label": "Email",
          "type": "email",
          "required": true
        },
        {
          "id": "company_name",
          "label": "Company Name",
          "type": "text",
          "required": false
        },
        {
          "id": "website",
          "label": "Website (Optional)",
          "type": "text",
          "required": false
        },
        {
          "id": "client_challenges",
          "label": "What are the issues you're facing?",
          "type": "text_list",
          "required": true,
          "developer_notes": "This should be an interactive field. Display a text field with the number '1.' next to it. Below it, display a '+' button. When the user clicks the '+' button, a new text field should appear, and the number should increase by one. Collect all entries into a single array."
        },
        {
          "id": "referred_by",
          "label": "Were you referred by anyone?",
          "type": "text",
          "required": false
        },
        {
          "id": "how_did_you_hear",
          "label": "How did you hear about me?",
          "type": "text",
          "required": false
        }
      ],
      "submit_button_text": "Submit"
    },
    {
      "form_id": "recruiter",
      "name": "Recruiters & Employers",
      "fields": [
        {
          "id": "full_name",
          "label": "Name",
          "type": "text",
          "required": true
        },
        {
          "id": "email_address",
          "label": "Email",
          "type": "email",
          "required": true
        },
        {
          "id": "company_name",
          "label": "Company Name",
          "type": "text",
          "required": true
        },
        {
            "id": "job_title",
            "label": "Job Title",
            "type": "text",
            "required": true
        },
        {
            "id": "job_link",
            "label": "Job Description Link",
            "type": "text",
            "required": false 
        },
        {
          "id": "message",
          "label": "Your Message",
          "type": "textarea",
          "required": true
        }
      ],
      "submit_button_text": "Send Message"
    },
    {
      "form_id": "general",
      "name": "General Inquiries",
      "fields": [
        {
          "id": "full_name",
          "label": "Name",
          "type": "text",
          "required": true
        },
        {
          "id": "email_address",
          "label": "Email",
          "type": "email",
          "required": true
        },
        {
          "id": "message",
          "label": "Your Message",
          "type": "textarea",
          "required": true
        }
      ],
      "submit_button_text": "Send Message"
    }
  ]
};

// You need to install EmailJS and then use the emailjs.init and emailjs.send methods.
// npm install @emailjs/browser
// Placeholder for your EmailJS keys from the .env file
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_C_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_C_ID;
const EMAILJS_TEMPLATE_R_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_R_ID;
const EMAILJS_TEMPLATE_G_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_G_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


const ContactPage = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const { form_header, initial_question, contact_forms } = contactContract;

  const handleOptionClick = (formId) => {
    setSelectedForm(formId);
  };
  
  // Dynamic Form Component
  const ContactForm = ({ formData, onGoBack }) => {
    const initialFormState = {};
    formData.fields.forEach(field => {
      if (field.type === 'text_list') {
        initialFormState[field.id] = [''];
      } else {
        initialFormState[field.id] = '';
      }
    });

    const [formState, setFormState] = useState(initialFormState);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    
    // Validation logic
    useEffect(() => {
      const allRequiredFieldsFilled = formData.fields.every(field => {
        if (field.required) {
          if (field.type === 'text_list') {
            return formState[field.id].some(item => item.trim() !== '');
          }
          return formState[field.id] && formState[field.id].trim() !== '';
        }
        return true;
      });
      setIsFormValid(allRequiredFieldsFilled);
    }, [formState, formData]);

    const handleInputChange = (e, fieldId) => {
      setFormState({
        ...formState,
        [fieldId]: e.target.value
      });
    };

    const handleChallengeChange = (index, event) => {
      const newChallenges = [...formState.client_challenges];
      newChallenges[index] = event.target.value;
      setFormState({
        ...formState,
        client_challenges: newChallenges
      });
    };

    const handleAddChallenge = () => {
      setFormState({
        ...formState,
        client_challenges: [...formState.client_challenges, '']
      });
    };
    
    const handleRemoveChallenge = (indexToRemove) => {
        setFormState({
            ...formState,
            client_challenges: formState.client_challenges.filter((_, index) => index !== indexToRemove)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('Sending message...');

        // Determine which template to use based on the form ID
        let templateId;
        switch (formData.form_id) {
            case 'consulting':
                templateId = EMAILJS_TEMPLATE_C_ID;
                break;
            case 'recruiter':
                templateId = EMAILJS_TEMPLATE_R_ID;
                break;
            case 'general':
                templateId = EMAILJS_TEMPLATE_G_ID;
                break;
        }

        // The form data payload for EmailJS
        const templateParams = {
            from_name: formState.full_name,
            from_email: formState.email_address,
            // Format message based on form type
            message: formData.form_id === 'consulting' ? formState.client_challenges.filter(c => c).join('\n') : formState.message,
            // Include all other fields in the payload
            ...formState
        };

        emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage('Message sent successfully!');
                setIsSubmitting(false);
                // Optionally reset form here
            }, (error) => {
                console.log('FAILED...', error);
                setStatusMessage('Failed to send message. Please try again.');
                setIsSubmitting(false);
            });
    };

    return (
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <h3 className="text-2xl font-bold mb-4">{formData.name}</h3>
        {formData.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-gray-700 font-medium mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'text' && (
              <input
                type="text"
                id={field.id}
                name={field.id}
                required={field.required}
                value={formState[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            {field.type === 'email' && (
              <input
                type="email"
                id={field.id}
                name={field.id}
                required={field.required}
                value={formState[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                id={field.id}
                name={field.id}
                required={field.required}
                rows="4"
                value={formState[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            {field.type === 'text_list' && (
              <div className="space-y-4">
                {formState.client_challenges.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-gray-500">{index + 1}.</span>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChallengeChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required={index === 0 ? true : false}
                    />
                    {index > 0 && (
                        <button
                            type="button"
                            onClick={() => handleRemoveChallenge(index)}
                            className="text-red-500 font-bold hover:text-red-700 transition-colors duration-300"
                        >
                            x
                        </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddChallenge}
                  className="bg-gray-200 text-gray-800 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
        {statusMessage && (
            <p className={`text-center font-medium ${statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
            </p>
        )}
        <div className="flex space-x-4">
            <button
              type="button"
              onClick={onGoBack}
              className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
            >
              Go Back
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 ${!isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Sending...' : formData.submit_button_text}
            </button>
        </div>
      </form>
    );
  };
  
  const selectedFormData = contact_forms.find(form => form.form_id === selectedForm);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen pt-16">
      
      {/* Page Header Section */}
      <section className="py-20 px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {form_header.title}
          </h1>
          <h2 className="text-lg md:text-xl max-w-3xl mx-auto">
            {form_header.subtitle}
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {!selectedForm && (
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">
                {initial_question.question_text}
              </h3>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                {initial_question.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    className="w-full md:w-auto bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {selectedForm && selectedFormData && (
            <ContactForm formData={selectedFormData} onGoBack={() => setSelectedForm(null)} />
          )}
        </div>
      </section>
      
    </div>
  );
};

export default ContactPage;
