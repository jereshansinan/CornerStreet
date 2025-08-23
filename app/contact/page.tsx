/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

import Lenis from "@/components/lenis";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Lenis>
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="inline-block max-w-xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl text-black leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="h-auto md:h-auto px-2 md:px-0 bg-[#1D1D1B]">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Left Side: Image */}
          <div className="hidden md:block col-span-2 py-2">
            <img
              alt="Contact Us"
              className="w-full h-full object-cover"
              height={0}
              src="/side4.png"
              style={{ height: "100%" }}
              width={1000}
            />
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col justify-center bg-[#1D1D1B] text-white px-6 md:px-10 py-6 md:py-8 h-full">
            <h1 className="text-3xl md:text-4xl mb-4">Leave Us A Message</h1>
            <p className="text-base md:text-lg mb-6">
              Have questions or want to place an order for our catering
              services? Fill out the form and we’ll get back to you promptly.
            </p>
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-white !bg-transparent"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  required
                  className="w-full h-14 px-4 border border-white rounded-md bg-[#fef6d4] text-black"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-white !bg-transparent"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  className="w-full h-14 px-4 border border-white rounded-md bg-[#fef6d4] text-black"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone Number */}
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-white !bg-transparent"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  required
                  className="w-full h-14 px-4 border border-white rounded-md bg-[#fef6d4] text-black"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-white !bg-transparent"
                  htmlFor="message"
                >
                  Message
                </label>
                <input
                  required
                  className="w-full h-28 px-4 py-2 border border-white rounded-md bg-[#fef6d4] text-black resize-none"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <hr className="border-t border-white my-4" />

              {/* Submit Button */}
              <button
                className="w-full h-14 text-lg bg-white text-black hover:text-white hover:bg-[#830323] transition-colors"
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Response Message */}
              {responseMessage && (
                <p className="mt-4 text-center text-base">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Lenis>
  );
}
