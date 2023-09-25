// components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to send the form data, for example, to an API.
    console.log(formData);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mx-4 md:mx-0 md:w-1/2 shadow-lg shadow-blue-500/50">
        <div className='text-center'>
            <h2 className="text-white text-3xl mb-2 flex justify-center items-center">
                📩 Contact Us
            </h2>
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-600 relative inline-block">
                <h3 className="relative text-xl text-white">Let's Talk!</h3>
            </span>
            <p className="text-gray-300 mb-4">
                Feel free to write to us without any commitment to quote your project.
            </p>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4}
            className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
          Send
        </button>
      </form>
      <div className="mt-6 md:justify-between flex flex-col md:flex-row items-start ">
        <span className="text-white">📧 idev.pe@gmail.com</span>
        <a href="https://www.instagram.com/idev.pe/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
          📷 @idev.pe
        </a>
        <a href="https://www.facebook.com/idev.pe/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
          📘 Idev.pe
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
