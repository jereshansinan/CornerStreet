"use client";
/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurStory = () => {
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!firstImageRef.current || !secondImageRef.current) return;

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
      className="px-2 sm:px-4 md:px-8 lg:px-8 2xl:px-24 py-4 sm:py-6 md:py-10 lg:py-12 2xl:py-16 flex flex-col md:flex-row items-start md:items-stretch gap-4 sm:gap-6 md:gap-12 lg:gap-16 2xl:gap-24 md:min-h-screen"
      id="our-story"
    >
      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="mb-2 sm:mb-3 md:mb-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl mb-1 sm:mb-2 md:mb-4">
            Who We Are
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-xl">
          Nestled in the vibrant heart of Pretoria, our kitchen was born out of
          a deep love for authentic Indian cuisine and a desire to share it with
          our local community. What began as a family tradition filled with rich
          spices, slow cooked curries, and recipes passed down through
          generations soon blossomed into a passion to bring true Indian flavors
          to the city we call home.
        </p>
        <p className="hidden lg:hidden xl:flex text-sm sm:text-base md:text-xl">
          Our journey is rooted in honoring tradition while embracing
          creativity. Every dish we serve is handcrafted with care, using
          carefully selected ingredients that reflect the diversity and soul of
          Indian cooking. From fragrant biryanis and buttery naans to our
          signature curries, we strive to offer an experience that feels both
          comforting and exciting—something that tastes like home, no matter
          where you&apos;re from.
        </p>
        <p className="text-sm sm:text-base md:text-xl mt-2 md:mt-0">
          As proud members of the South African community, we believe food is a
          powerful way to connect people. Whether you&apos;re discovering Indian
          food for the first time or seeking the familiar warmth of your
          childhood meals, we invite you to join us at the table. Because here,
          every meal is more than just a dish, it’s a story, a memory, and a
          celebration of culture.
        </p>
      </div>

      {/* Right Side - Images */}
      <div className="w-full md:w-1/2 h-full relative flex items-center">
        <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[35rem] lg:h-[40rem] overflow-hidden">
          <Image
            alt="Our Story Image"
            className="absolute top-0 left-0 w-full h-auto object-cover rounded-none will-change-transform"
            height={1000}
            src="/side4.png"
            width={800}
          />
        </div>

        {/* Second Image - Overlapping Parallax */}
        <div
          ref={secondImageRef}
          className="absolute top-1/3 md:top-[10%] left-[30%] md:left-[40%] z-10 hidden lg:hidden md:flex w-[15rem] sm:w-[20rem] md:w-[25rem] h-[8rem] sm:h-[10rem] md:h-full"
          id="parallax-image"
        >
          <Image
            alt="Overlay Image"
            className="w-full h-auto object-cover shadow-xl rounded-none will-change-transform"
            src="/biryani2.png"
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
