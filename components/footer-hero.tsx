/* eslint-disable prettier/prettier */
"use client";
import React, { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterHero = () => {
  const websiteContentRef = useRef<HTMLDivElement | null>(null);
  const contentHolderRef = useRef<HTMLDivElement | null>(null);
  const imgHolderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const contentHolder = contentHolderRef.current;
    const websiteContent = websiteContentRef.current;
    const imgHolder = imgHolderRef.current;

    if (!contentHolder || !websiteContent || !imgHolder) return;

    const contentHolderHeight = contentHolder.offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;
    const totalBodyHeight =
      contentHolderHeight + imgHolderHeight + additionalScrollHeight;

    document.body.style.height = `${totalBodyHeight}px`;

    ScrollTrigger.create({
      trigger: ".website-content",
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(".website-content", { position: "absolute", top: "195%" });
      },
      onLeaveBack: () => {
        gsap.set(".website-content", { position: "fixed", top: "0" });
      },
    });

    gsap.to(".header .letters:first-child", {
      x: () => -innerHeight * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: websiteContent,
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(".header .letters:last-child", {
      x: () => -innerHeight * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: websiteContent,
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(".img-holder", {
      rotation: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(".img-holder img", {
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="relative w-[100vw] h-[100svh] text-center overflow-hidden"></section>
  );
};

export default FooterHero;
