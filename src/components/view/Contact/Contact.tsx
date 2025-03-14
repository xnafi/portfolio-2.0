/* eslint-disable react/no-unescaped-entities */
"use client";
import InputField from "@/components/re-ui/InputField";
import SmoothLink from "@/components/re-ui/SmoothLink";
import SmoothScroll from "@/components/re-ui/SmoothScroll";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };

  return (
    <SmoothScroll id="contact">
      <section
        id="Contact"
        className="py-10 px-4 md:px-10 lg:px-16 transition-all duration-300"
      >
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
                <InputField
                  control={control}
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  required
                />
                <InputField
                  control={control}
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  control={control}
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <InputField
                  control={control}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                  required
                />
              </div>

              {/* Select Subject */}
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Select Subject?
                </p>
                <Controller
                  control={control}
                  name="subject"
                  rules={{ required: "Please select a subject" }}
                  render={({ field }) => (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {["Figma", "Web design", "Branding", "SEO"].map(
                        (subject) => (
                          <label
                            key={subject}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="radio"
                              {...field}
                              value={subject}
                              className="w-4 h-4 accent-green-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              {subject}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  )}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <textarea
                {...control.register("message", {
                  required: "Please enter your message",
                })}
                placeholder="Write your message.."
                rows={2}
                className="input-field w-full resize-none !py-2 !px-0 my-2 !focus:outline-none !focus:ring-0"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm !mt-1">
                  {errors.message.message}
                </p>
              )}

              {/* Submit Button */}
              <SmoothLink
                duration={1000}
                to=""
                name="Let's Talk"
                onClick={handleSubmit(onSubmit)}
                variant="primary"
              />
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
    </SmoothScroll>
  );
};

export default Contact;
