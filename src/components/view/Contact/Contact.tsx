import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  return (
    <section id="Contact" className="py-10 px-4 md:px-10 lg:px-16 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="flex flex-wrap items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 dark:text-gray-700 z-0 gap-4 mb-8 text-center">
          Let's Talk
          <GoArrowUpRight className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-500" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Form (2/3 Width on Large Screens) */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input-field w-full" />
              <input type="text" placeholder="Last Name" className="input-field w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="input-field w-full" />
              <input type="text" placeholder="Phone Number" className="input-field w-full" />
            </div>

            {/* Select Subject */}
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300 font-medium">Select Subject?</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Figma", "Web design", "Branding", "SEO"].map((subject) => (
                  <label key={subject} className="flex items-center space-x-2">
                    <input type="radio" name="subject" className="w-4 h-4 accent-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <textarea
              placeholder="Write your message.."
              rows={4}
              className="input-field w-full resize-none"
            ></textarea>

            {/* Submit Button */}
            <button className="flex items-center px-6 py-3 mt-6 btn-dark rounded-lg font-semibold transition-all">
              <span>Let's Talk</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Right Contact Info (1/3 Width) */}
          <div className="space-y-6 w-full">
            {/* Location */}
            <div className="border-l-4 border-green-500 pl-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                Contact Us
              </h2>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
                <p className="para-text">
                  <strong className="font-semibold">Poland / Wroclaw</strong>
                  <br />
                  Kyiv, Konovaltsia Yevhena str. <br />
                  32B Wroclaw
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
                <p className="para-text">
                  <strong className="font-semibold">Contact</strong>
                  <br />
                  Phone: +11 22 33 555 <br />
                  Mail: tawam@gmail.com
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-start space-x-4 mt-6">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
