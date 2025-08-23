/* eslint-disable prettier/prettier */
"use client";
import { logoData } from "./logo";
import React, { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterOld = () => {
  const heroImgContainer = useRef<HTMLDivElement | null>(null);
  const heroImgLogoRef = useRef<HTMLDivElement | null>(null);
  const heroImgCopyRef = useRef<HTMLDivElement | null>(null);
  const fadeOverlayRef = useRef<HTMLDivElement | null>(null);
  const svgOverlayRef = useRef<HTMLDivElement | null>(null);
  const overlayCopyRef = useRef<HTMLDivElement | null>(null);

  const initialOverlayScale = 350;
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const logoMask = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!logoMask.current || !logoContainerRef.current) return;

    // Set SVG path data
    logoMask.current.setAttribute("d", logoData);

    // Calculate scale and position
    const logoDimensions = logoContainerRef.current.getBoundingClientRect();
    const logoBoundingBox = logoMask.current.getBBox();

    const horizontalScaleRatio = logoDimensions.width / logoBoundingBox.width;
    const verticalScaleRatio = logoDimensions.height / logoBoundingBox.height;
    const logoScaleFactor = Math.min(horizontalScaleRatio, verticalScaleRatio);

    const logoHorizontalPosition =
      logoDimensions.left +
      (logoDimensions.width - logoBoundingBox.width * logoScaleFactor) / 2 -
      logoBoundingBox.x * logoScaleFactor;

    const logoVerticalPosition =
      logoDimensions.top +
      (logoDimensions.height - logoBoundingBox.height * logoScaleFactor) / 2 -
      logoBoundingBox.y * logoScaleFactor;

    logoMask.current.setAttribute(
      "transform",
      `translate(${logoHorizontalPosition}, ${logoVerticalPosition}) scale(${logoScaleFactor})`
    );

    // ScrollTrigger Animation
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        const fadeOpacity = 1 - scrollProgress * (1 / 0.15);

        if (scrollProgress <= 0.15) {
          gsap.set([heroImgLogoRef.current, heroImgCopyRef.current], {
            opacity: fadeOpacity,
          });
        } else {
          gsap.set([heroImgLogoRef.current, heroImgCopyRef.current], {
            opacity: 0,
          });
        }

        if (scrollProgress <= 0.85) {
          const normalizedProgress = scrollProgress * (1 / 0.85);
          const heroImgContainerScale = 1.5 - 0.5 * normalizedProgress;
          const overlayScale =
            initialOverlayScale *
            Math.pow(1 / initialOverlayScale, normalizedProgress);

          let fadeOverlayOpacity = 0;

          gsap.set(heroImgContainer.current, {
            scale: heroImgContainerScale,
          });

          gsap.set(svgOverlayRef.current, {
            scale: overlayScale,
          });

          if (scrollProgress >= 0.25) {
            fadeOverlayOpacity = Math.min(
              1,
              (scrollProgress - 0.25) * (1 / 0.4)
            );
          }

          gsap.set(fadeOverlayRef.current, {
            opacity: fadeOverlayOpacity,
          });
        }

        if (scrollProgress >= 0.6 && scrollProgress <= 0.85) {
          const overlayCopyRevealProgress = (scrollProgress - 0.6) * (1 / 0.25);

          const gradientSpeed = 100;
          const gradientBottomPosition = 240 - overlayCopyRevealProgress * 280;
          const gradientTopPostion = gradientBottomPosition - gradientSpeed;
          const overlayCopyScale = 1.25 - 0.25 * overlayCopyRevealProgress;

          if (!overlayCopyRef.current) return;

          overlayCopyRef.current.style.background = `linear-gradient(to bottom, #111117 0%, #111117 ${gradientTopPostion}%, #e66461 
          ${gradientBottomPosition}% , #e66461 100%)`;
          overlayCopyRef.current.style.backgroundClip = "text";

          gsap.set(overlayCopyRef, {
            scale: overlayCopyScale,
            opacity: overlayCopyRevealProgress,
          });
        } else if (scrollProgress < 0.5) {
          gsap.set(overlayCopyRef, {
            opacity: 0,
          });
        }
      },
    });
  }, []);

  return (
    <section className="hero relative w-[100vw] h-[100svh] bg-[#1D1D1B] text-center overflow-hidden">
      <div ref={heroImgContainer} className="hero-img-container">
        <img alt="" className="footer-img" src="/curryNaan.jpg" />

        <div ref={heroImgLogoRef} className="hero-img-logo">
          <img alt="" className="footer-img" src="/logo.png" />
        </div>

        <div ref={heroImgCopyRef} className="hero-img-copy">
          <p>Scroll down to reveal</p>
        </div>
      </div>

      <div ref={fadeOverlayRef} className="fade-overlay" />

      <div ref={svgOverlayRef} className="overlay">
        <svg height="100%" width="100%">
          <defs>
            <mask id="logoRevealMask">
              <rect fill="white" height="100%" width="100%" />
              <path ref={logoMask} id="logoMask" />
            </mask>
          </defs>
          <rect
            fill="#1D1D1B"
            height="100%"
            mask="url(#logoRevealMask)"
            width="100%"
          />
        </svg>
      </div>

      <div ref={logoContainerRef} className="logo-container" />

      <div className="overlay-copy">
        <h1 ref={overlayCopyRef}>footer</h1>
      </div>
    </section>
  );
};

export default FooterOld;
