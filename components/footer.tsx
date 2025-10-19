/* eslint-disable prettier/prettier */
import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

import { logoData } from "./logo";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1976d2] text-white z-10">
      <div className="flex flex-col h-full">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row flex-[2] w-full">
          {/* Left Block - Links */}
          <div className="flex-1 border-white border-t-1 border-l-0 border-r-0 md:border-r-0 md:border-l-0 p-2 md:p-4 flex flex-col">
            <h2 className="text-base md:text-xl mb-4">Links</h2>
            <nav className="flex flex-col space-y-2 text-white">
              {[
                { label: "Our Story", href: "#our-story" },
                { label: "Gallery", href: "#gallery" },
                { label: "How to Order", href: "#how-to-order" },
                { label: "FAQ", href: "#faq" },
                { label: "Menu", href: "/menu" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link, i) => (
                <a key={i} className="hover:text-[#D22227]" href={link.href}>
                  <h1 className="text-xl lg:2xl xl:4xl 2xl:text-6xl">
                    {link.label}
                  </h1>
                </a>
              ))}
            </nav>
          </div>

          {/* Middle Block - Logo */}
          <div className="flex-1 border border-white border-l-0 border-r-0 border-b-0 md:border-r-0 md:border-l-1 p-2 md:p-4 flex flex-col items-center justify-center text-center">
            <div className="w-full flex items-center justify-center">
              <img
                alt="image2"
                className="max-w-[30%] h-auto rounded-none mt-4"
                src="/main/logo.png"
              />
            </div>
          </div>

          {/* Right Block - Contact Info */}
          <div className="flex-1 border border-white border-t-1 border-r-0 border-l-0 border-b-0 md:border-r-0 md:border-l-1 p-2 md:p-4 flex flex-col">
            <h2 className="text-base md:text-xl mb-4">Contact Us</h2>

            <div className="space-y-1 md:space-y-2 text-sm md:base xl:base 2xl:text-xl">
              <p>Phone: (770) 485-7650</p>
              <p>Location: Georgia</p>
            </div>

            <div className="my-4 md:my-6" />

            <div className="space-y-1 md:space-y-2 text-sm md:base xl:base 2xl:text-xl">
              <p>Open: Mon – Sun</p>
              <p>Hours: 8:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row flex-[1] w-full">
          {/* Bottom Left - Quote */}
          <div className="flex-1 border-white border-t-1 p-2 md:p-2 xl:p-2 2xl:p-4 flex items-center justify-center text-center text-gray-500">
            <p className="text-sm md:text-xs xl:text-sm 2xl:text-base italic text-white">
              “In America, food is not just fuel, it’s culture on a plate.”
            </p>
          </div>

          {/* Bottom Middle - Copyright */}
          <div className="flex-1 border-white border-t-1 text-white border-l-0 border-r-0 border-b-0 md:border-r-1 md:border-l-1 p-4 flex items-center justify-center text-center text-sm">
            © 2025 CORNER STREET. All Rights Reserved.
          </div>

          {/* Bottom Right - Socials */}
          <div className="flex-1 border-white border-t-1 p-2 md:p-4 flex items-center justify-center">
            <div className="flex space-x-4 text-white">
              <a
                className="hover:text-[#D22227]"
                href="https://wa.me/7704857650"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#D22227]"
                href="https://www.instagram.com/thecornerstreettacobar/"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Image - Full Width, Half Screen Height */}
        <div className="w-full h-[50vh]">
          <img
            alt="Bottom Visual"
            className="w-full h-full object-cover"
            src="/main/Howtoorder.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
