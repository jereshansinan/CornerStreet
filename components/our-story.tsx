"use client";
/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Copy from "@/components/Copy";

const OurStory = () => {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!firstImageRef.current || !secondImageRef.current) return;

    // First Image Parallax
    gsap.to(firstImageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: firstImageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Second Image Parallax
    gsap.to(secondImageRef.current, {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: secondImageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      className="px-2 md:px-24 py-6 md:py-16 flex flex-col md:flex-row items-start md:items-stretch gap-2 md:gap-24"
      id="our-story"
    >
      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="mb-2 md:mb-4">
          <Copy delay={0.5}>
            <h1 className="text-2xl md:text-6xl mb-1 md:mb-4">Who We Are</h1>
          </Copy>
        </div>
        <Copy delay={0.5}>
          <p className="text-base md:text-xl">
            Nestled in the vibrant heart of Pretoria, our kitchen was born out
            of a deep love for authentic Indian cuisine and a desire to share it
            with our local community. What began as a family tradition filled
            with rich spices, slow cooked curries, and recipes passed down
            through generations soon blossomed into a passion to bring true
            Indian flavors to the city we call home.
          </p>
        </Copy>
        <Copy delay={0.5}>
          <p className="hidden md:flex text-base md:text-xl">
            Our journey is rooted in honoring tradition while embracing
            creativity. Every dish we serve is handcrafted with care, using
            carefully selected ingredients that reflect the diversity and soul
            of Indian cooking. From fragrant biryanis and buttery naans to our
            signature curries, we strive to offer an experience that feels both
            comforting and exciting—something that tastes like home, no matter
            where you&apos;re from.
          </p>
        </Copy>
        <Copy delay={0.5}>
          <p className="text-base md:text-xl mt-2 md:mt-0">
            As proud members of the South African community, we believe food is
            a powerful way to connect people. Whether you&apos;re discovering
            Indian food for the first time or seeking the familiar warmth of
            your childhood meals, we invite you to join us at the table. Because
            here, every meal is more than just a dish, it’s a story, a memory,
            and a celebration of culture.
          </p>
        </Copy>
      </div>

      {/* Right Side - Images */}
      <div className="w-full md:w-1/2 h-full relative">
        {/* First Image - Parallax */}
        <div className="relative w-full h-[400px] md:h-[800px] overflow-hidden">
          <Image
            ref={firstImageRef}
            alt="Our Story Image"
            className="absolute top-0 left-0 w-full h-auto object-cover  rounded-none will-change-transform"
            height={1000}
            src="/side.png"
            width={800}
          />
        </div>

        {/* Second Image - Overlapping Parallax */}
        <div
          ref={secondImageRef}
          className="absolute top-1/3 md:top-1/2 left-[30%] md:left-[65%] -translate-y-1/2 z-10 w-[250px] md:w-[400px] h-[200px] md:h-full"
          id="parallax-image"
        >
          <Image
            alt="Overlay Image"
            className="w-full h-auto object-cover shadow-xl rounded-none will-change-transform"
            src="/biryani.jpg"
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
