// contact.js
import React from 'react';

export const metadata = {
  title: "Contact"
}

export default function page() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8 text-lg leading-relaxed">
          We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <form className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input type="text" id="name" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-blue-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input type="email" id="email" className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-blue-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea id="message" rows={4} className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-blue-200"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}


