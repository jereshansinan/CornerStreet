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
      className="bg-[#fef3c7] text-black min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 gap-5 md:gap-10"
    >
      {/* Left Side - Heading and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl leading-tight"
        >
          Food, Wherever You Are
        </h1>
        <Link
          ref={buttonRef}
          className="px-6 py-4 border-1 border-black text-black rounded-full hover:bg-[#830323] transition hover:border-[#830323] hover:text-white"
          href="#menu"
        >
          View Menu
        </Link>
      </div>

      {/* Right Side - Text */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 text-lg md:text-xl leading-relaxed"
      >
        <p>
          We don’t serve from a storefront.
          <br />
          Instead, we show up where you are, at local markets, private
          celebrations, and vibrant street corners.
          <br />
          Each dish is cooked to be shared, savored, remembered.
          <br />
          Because for us, food isn’t about a place. It’s about people.
          <br />
          It’s about bringing the flavors of home to the world around us.
        </p>
      </div>
    </section>
  );
};

export default ExperienceAnywhere;
