/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-2 md:px-32 py-6 md:py-16 bg-[#F1F0EF]">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          alt="Ntaba Ya Jozi Logo"
          className="w-48 md:w-64"
          height={100}
          src="/NtabaLogo.png"
          width={200}
        />
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-4 md:space-y-0 mb-8">
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="#our-story"
        >
          Our Story
        </a>
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="#our-mission"
        >
          Our Mission
        </a>
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="#how-to-order"
        >
          How to Order
        </a>
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="/menu"
        >
          Menu
        </a>
        <a
          className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137] text-center"
          href="/contact-us"
        >
          Contact Us
        </a>
      </div>

      {/* Brown Line */}
      <div className="h-1 bg-[#9E6137] my-8 rounded-lg" />

      {/* Social Media and Contact Info */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              className="text-black hover:text-[#9E6137]"
              href="https://wa.me/0665104512?text=Hello%20there!%20I'm%20interested%20in%20your%20services."
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              className="text-black hover:text-[#9E6137]"
              href="https://www.instagram.com/ntaba_ya_jozi?igsh=ZTZmZTA2MGgwbXg2"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              className="text-black hover:text-[#9E6137]"
              href="https://www.tiktok.com/@ntaba_ya_jozi?_t=ZN-8uNFmPEkAH0&_r=1"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg md:text-xl text-gray-700">
            +27 66 510 4512 
          </p>{" "}
          <p className="text-lg md:text-xl text-gray-700">
            info@ntabayojozi.com
          </p>{" "}
        </div>
      </div>

      <div className="h-1 bg-[#9E6137] my-8 rounded-lg" />

      {/* Copyright */}
      <div className="text-center text-lg md:text-xl text-gray-700">
        © Copyright 2025. NTABA YA JOZI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
