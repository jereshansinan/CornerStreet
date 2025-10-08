/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Visit Us or Order Online",
    description:
      "Come to our restaurant for dine-in, or place your order through Uber Eats for delivery.",
    image: "/whatsapp.png",
  },
  {
    id: 2,
    title: "Choose Your Favorites",
    description:
      "Browse our menu and select your favorite dishes, either in person or online.",
    image: "/app1.png",
  },
  {
    id: 3,
    title: "Enjoy Your Meal",
    description:
      "Relax and enjoy your meal at our restaurant, or wait for your order to arrive at your doorstep.",
    image: "/pay.png",
  },
];

const HowToOrder = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="relative overflow-hidden" id="how-to-order">
      {/* Background Image Section */}
      <div
        className="w-full h-auto md:min-h-screen bg-center bg-cover bg-fixed relative flex flex-col items-center justify-center pb-12 pt-32"
        style={{ backgroundImage: "url('/main/Howtoorder.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

        {/* Heading */}
        <div className="absolute top-10 w-full flex justify-center z-10">
          <h1 className="text-white text-4xl md:text-6xl text-center drop-shadow-xl">
            How to Order
          </h1>
        </div>

        {/* Centered Step Cards with GSAP Parallax */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-[#1976d2] shadow-2xl rounded-3xl w-full max-w-[28rem] md:max-w-[32rem] flex flex-col overflow-hidden items-center"
            >
              <div className="flex flex-col items-center justify-center py-12 md:py-20">
                <span className="text-[white] font-extrabold text-[7rem] md:text-[10rem] leading-none drop-shadow-lg select-none">
                  {`0${step.id}`}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-white">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
