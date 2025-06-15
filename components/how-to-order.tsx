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
    title: "Text Us On WhatsApp",
    description: "Send us a message with your order from our menu.",
    image: "/bunny2.jpg",
  },
  {
    id: 2,
    title: "Let Us Know Your Preference",
    description:
      "Specify whether you'd like to pick up your order or have it delivered. If delivery, we'll arrange it for you.",
    image: "/bunny2.jpg",
  },
  {
    id: 3,
    title: "Make Your Payment",
    description:
      "Pay via EFT, e-wallet, or choose to pay cash or card at collection.",
    image: "/bunny2.jpg",
  },
];

const HowToOrder = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: -50 },
        {
          y: 100,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative overflow-hidden" id="how-to-order">
      {/* Background Image Section */}
      <div
        className="w-full h-auto md:min-h-screen bg-center bg-cover bg-fixed relative flex flex-col items-center justify-center pb-12 pt-32"
        style={{ backgroundImage: "url('/platters.jpg')" }}
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
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4 md:px-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-[#fef3c7] shadow-xl w-full max-w-[18rem] md:max-w-xs flex flex-col overflow-hidden"
              style={{
                marginTop: index === 0 ? 0 : undefined, // only stagger on md and up
              }}
            >
              <img
                alt={step.title}
                className="w-full h-56 object-cover"
                src={step.image}
              />
              <div className="p-6 flex flex-col justify-center text-center">
                <h1 className="text-3xl font-bold mb-2 text-[#830323]">{`0${step.id}`}</h1>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-base text-black">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
