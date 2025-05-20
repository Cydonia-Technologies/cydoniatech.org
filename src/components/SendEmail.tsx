'use client'

import { useState, FormEvent } from 'react';
import emailjs from "@emailjs/browser";

// Environment variables
// In Next.js, use NEXT_PUBLIC_ prefix for client-side env vars
const MAIL_JS_KEY = process.env.NEXT_PUBLIC_MAIL_JS_KEY;
const MAIL_SERVICE_ID = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID;
const TEMPLATE_ID = "template_pwxbfqm"; // Template ID for the "Contact US" Template

// Initialize EmailJS
if (MAIL_JS_KEY) {
  emailjs.init(MAIL_JS_KEY);
}

interface ContactFormProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
}

export default function ContactForm( {children, id="email-form", className="mb-4"} : ContactFormProps)  {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that we have the required environment variables
    if (!MAIL_JS_KEY || !MAIL_SERVICE_ID) {
      console.error("EmailJS credentials are missing");
      setSubmitStatus('error');
      return;
    }

    // Set loading state
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using the form element from the event
      const response = await emailjs.sendForm(
        MAIL_SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget
      );

      // Success handling
      console.log("Email sent successfully!", response);

      // Reset form
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });

      // Show success message
      setSubmitStatus('success');
    } catch (error) {
      // Error handling
      console.error("Failed to send email:", error);
      setSubmitStatus('error');
    } finally {
      // Reset submission state
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form id={id || "email=form"} className={className || "mb-4"}  onSubmit={handleSubmit}>
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <input
            className="w-full px-4 py-2 border text-slate-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 border text-slate-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full px-4 py-2 border text-slate-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
          name="title"
          placeholder="Your Title"
          required
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          className="w-full px-4 py-2 border text-slate-700 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-32 mb-4"
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        {children}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:bg-teal-400"
        >
          {isSubmitting ? "Sending..." : "Contact Us"}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
          Thank you! Your message has been sent. Someone from the team will reply in 1-3 business days.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
          Sorry, there was a problem sending your message. Please try again later.
        </div>
      )}
    </>
  );
}
