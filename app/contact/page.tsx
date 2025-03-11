"use client";
import { Form, Input, Button } from "@heroui/react";
import { Image } from "@heroui/image";

import Lenis from "@/components/lenis";

export default function ContactPage() {
  return (
    <Lenis>
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center gap-4 py-6 md:py-16 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/home.jpg")',
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
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
              Have questions about our catering services? Whether it&apos;s a
              corporate event, wedding, or special occasion, we&apos;re here to
              help! Fill out the form below, and we&apos;ll get back to you as
              soon as possible.
            </p>
            <Form>
              <div className="space-y-6 w-full">
                {/* Full Name */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full" // Make the input full width
                    label="Full Name"
                    placeholder="Enter your full name"
                  />
                </div>
                {/* Email */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full" // Make the input full width
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                {/* Phone Number */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full" // Make the input full width
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    type="tel"
                  />
                </div>
                {/* Message */}
                <div className="w-full">
                  <Input
                    required
                    className="w-full"
                    label="Message"
                    placeholder="Enter your message"
                  />
                </div>
                {/* Submit Button */}
                <Button className="w-full md:w-auto" type="submit">
                  Send Message
                </Button>
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
