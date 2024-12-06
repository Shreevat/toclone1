import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "./Contacts.json";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-10 background-to" id="Contact">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center ">
        <div>
          <Lottie animationData={animationData} className="w-96 h-96 " />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6 ">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block  font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 bg-zinc-400 "
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 bg-zinc-400 "
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block  font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 bg-zinc-400 "
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 h-32 bg-zinc-400 "
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-800 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons at the Bottom */}
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-800"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
