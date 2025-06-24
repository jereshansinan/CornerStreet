/* eslint-disable prettier/prettier */
import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

import { logoData } from "./logo";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fef3c7] z-10">
      <div className="flex flex-col h-full">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row flex-[2] w-full">
          {/* Left Block - Links */}
          <div className="flex-1 border-black border-t-1 border-l-0 border-r-0 md:border-r-0 md:border-l-0 p-2 md:p-4 flex flex-col">
            <h2 className="text-base md:text-xl mb-4">Links</h2>
            <nav className="flex flex-col space-y-2 text-black">
              {[
                { label: "Our Story", href: "#our-story" },
                { label: "Gallery", href: "#gallery" },
                { label: "How to Order", href: "#how-to-order" },
                { label: "FAQ", href: "#faq" },
                { label: "Menu", href: "/menu" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link, i) => (
                <a key={i} className="hover:text-[#830323]" href={link.href}>
                  <h1 className="text-xl lg:2xl xl:4xl 2xl:text-6xl">
                    {link.label}
                  </h1>
                </a>
              ))}
            </nav>
          </div>

          {/* Middle Block - Logo */}
          <div className="flex-1 border border-black border-l-0 border-r-0 border-b-0 md:border-r-0 md:border-l-1 p-2 md:p-4 flex flex-col items-center justify-center text-center">
            <div className="w-full flex items-center justify-center">
              <svg
                className="w-32 md:w-[200px] h-auto"
                fill="black"
                viewBox="0 0 432 282"
              >
                <path d={logoData} />
              </svg>
            </div>
            <img
              alt="image2"
              className="max-w-[80%] h-auto rounded-none mt-4"
              src="/top.png"
            />
          </div>

          {/* Right Block - Contact Info */}
          <div className="flex-1 border border-black border-t-1 border-r-0 border-l-0 border-b-0 md:border-r-0 md:border-l-1 p-2 md:p-4 flex flex-col">
            <h2 className="text-base md:text-xl mb-4">Contact Us</h2>

            <div className="space-y-1 md:space-y-2 text-sm md:base xl:base 2xl:text-xl">
              <p>Phone: +27 82 634 6436</p>
              <p>Email: enquiry.indiansavourydelights@gmail.com</p>
              <p>Venue: Pretoria</p>
            </div>

            <div className="my-4 md:my-6" />

            <div className="space-y-1 md:space-y-2 text-sm md:base xl:base 2xl:text-xl">
              <p>Open: Wed – Sun</p>
              <p>Hours: 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row flex-[1] w-full">
          {/* Bottom Left - Quote */}
          <div className="flex-1 border-black border-t-1 p-2 md:p-2 xl:p-2 2xl:p-4 flex items-center justify-center text-center text-gray-500">
            <p className="text-sm md:text-xs xl:text-sm 2xl:text-base italic text-black">
              “Flavour is the essence of memory.”
            </p>
          </div>

          {/* Bottom Middle - Copyright */}
          <div className="flex-1 border-black border-t-1 text-black border-l-0 border-r-0 border-b-0 md:border-r-1 md:border-l-1 p-4 flex items-center justify-center text-center text-sm">
            © 2025 INDIAN SAVOURY DELIGHTS. All Rights Reserved.
          </div>

          {/* Bottom Right - Socials */}
          <div className="flex-1 border-black border-t-1 p-2 md:p-4 flex items-center justify-center">
            <div className="flex space-x-4 text-black">
              <a
                className="hover:text-[#830323]"
                href="https://wa.me/0826346436"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#830323]"
                href="https://www.instagram.com/indiansavourydelights/"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#830323]"
                href="https://www.tiktok.com/"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Image - Full Width, Half Screen Height */}
        <div className="w-full h-[50vh]">
          <img
            alt="Bottom Visual"
            className="w-full h-full object-cover"
            src="/spicestop.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
