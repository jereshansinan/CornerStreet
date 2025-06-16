/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CateringSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeIn = (el: Element | null, delay = 0) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            delay,
          }
        );

      fadeIn(headingRef.current);
      fadeIn(buttonRef.current, 0.2);
      fadeIn(textRef.current, 0.3);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#fef3c7] text-black min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 gap-5 md:gap-10" id="catering"
    >
      {/* Left Side - Heading and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        <h1 ref={headingRef} className="text-3xl md:text-5xl leading-tight">
          Catering & Markets, Made Personal
        </h1>
        <Link
          ref={buttonRef}
          className="px-6 py-4 border-1 border-black text-black rounded-full hover:bg-[#830323] transition hover:border-[#830323] hover:text-white"
          href="/contact"
        >
          Get in Touch
        </Link>
      </div>

      {/* Right Side - Text */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 text-lg md:text-xl leading-relaxed"
      >
        <p>
          Whether you&apos;re strolling through a bustling market or planning an
          intimate gathering, we bring bold, comforting flavors right to you.
          <br />
          From pop-up stalls to custom catering, our food is made to connect, 
          with taste, culture, and community.
          <br />
          Reach out to bring our dishes to your next event or find out where
          we’re popping up next.
        </p>
      </div>
    </section>
  );
};

export default CateringSection;
