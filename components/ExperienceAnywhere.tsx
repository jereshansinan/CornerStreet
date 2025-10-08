/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExperienceAnywhere = () => {
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
      className="bg-[#1976d2] text-white min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 gap-5 md:gap-10"
    >
      {/* Left Side - Heading and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        <h1 ref={headingRef} className="text-3xl md:text-5xl leading-tight">
          Food, Wherever You Are
        </h1>
        <Link
          ref={buttonRef}
          className="px-6 py-4 border-1 border-[#D22227] bg-[#D22227] 
          text-white rounded-full transition hover:border-white hover:bg-white hover:text-black"
          href="/Indian Savoury Delights Menu.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Book Now
        </Link>
      </div>

      {/* Right Side - Text */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 text-lg md:text-xl leading-relaxed"
      >
        <p>
          Craving your favorite burger or wings? We’ve got you covered
          <br />
          Order through Uber Eats or grab a table with just one click.
          <br />
          From busy weekdays to laid-back weekends, great food is always within
          reach.
          <br />
          Fresh off the grill, delivered hot and fast. Your cravings shouldn’t
          have to wait, we bring the flavor to you.
          <br />
          So go ahead, book now and taste the corner everyone’s talking about.
        </p>
      </div>
    </section>
  );
};

export default ExperienceAnywhere;
