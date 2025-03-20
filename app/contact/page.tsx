/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { Image } from "@heroui/image";

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
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="inline-block max-w-xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-6 md:py-16 px-2 md:px-32">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Form */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leave Us A Message
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions about our catering services? Fill out the form
              below, and we&apos;ll get back to you as soon as possible.
            </p>
            <Form onSubmit={handleSubmit}>
              <div className="space-y-6 w-full">
                {/* Full Name */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full"
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {/* Email */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full"
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Phone Number */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full"
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter your phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* Message */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full"
                    label="Message"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {/* Submit Button */}
                <Button
                  className="w-full md:w-auto"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {/* Response Message */}
                {responseMessage && (
                  <p className="mt-4 text-center text-lg">{responseMessage}</p>
                )}
              </div>
            </Form>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block">
            <Image
              isZoomed
              alt="Contact Us"
              className="w-full h-full object-cover rounded-lg"
              height={0}
              src="/ourstory.jpg"
              style={{ height: "100%" }}
              width={1000}
            />
          </div>
        </div>
      </section>
    </Lenis>
  );
}
