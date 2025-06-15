/* eslint-disable prettier/prettier */
"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Image } from "@heroui/image";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const stickyRef = useRef<HTMLElement | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slidesRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = slidesContainerRef.current;
      const slider = sliderRef.current;
      const sticky = stickyRef.current;
      const slides = slidesRefs.current;

      if (!container || !slider || !sticky || !slides.length) return;

      const totalMove = container.offsetWidth - slider.offsetWidth;
      const stickyHeight = window.innerHeight * 6;
      const slideWidth = slider.offsetWidth;

      // Initial offscreen titles
      slides.forEach((slide) => {
        const title = slide.querySelector(".title h1");

        gsap.set(title, { y: -200 });
      });

      let currentVisibleIndex: number | null = null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const currentIndex = slides.indexOf(entry.target as HTMLDivElement);
            const titles = slides.map((slide) =>
              slide.querySelector(".title h1")
            );

            if (entry.intersectionRatio >= 0.25) {
              currentVisibleIndex = currentIndex;
              titles.forEach((title, index) => {
                if (title) {
                  gsap.to(title, {
                    y: index === currentIndex ? 0 : -200,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: true,
                  });
                }
              });
            } else if (
              entry.intersectionRatio < 0.25 &&
              currentVisibleIndex === currentIndex
            ) {
              const prevIndex = currentIndex - 1;

              currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;
              titles.forEach((title, index) => {
                if (title) {
                  gsap.to(title, {
                    y: index === prevIndex ? 0 : -200,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: true,
                  });
                }
              });
            }
          });
        },
        { root: slider, threshold: [0, 0.25] }
      );

      slides.forEach((slide) => {
        if (slide) observer.observe(slide);
      });

      ScrollTrigger.create({
        id: "main-scroll",
        trigger: sticky,
        start: "top-=80 top",
        end: `+=${stickyHeight}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const mainMove = progress * totalMove;

          gsap.set(container, { x: -mainMove });

          const currentSlide = Math.floor(mainMove / slideWidth);
          const sliderProgress = (mainMove % slideWidth) / slideWidth;

          slides.forEach((slide, index) => {
            const image = slide.querySelector("img");

            if (image) {
              if (index === currentSlide || index === currentSlide + 1) {
                const relativeProgress =
                  index === currentSlide ? sliderProgress : sliderProgress - 1;
                const parallaxAmount = relativeProgress * slideWidth * 0.25;

                gsap.set(image, {
                  x: parallaxAmount,
                  scale: 1.35,
                });
              } else {
                gsap.set(image, {
                  x: 0,
                  scale: 1.35,
                });
              }
            }
          });
        },
      });

      return () => {
        observer.disconnect(); // Cleanup
      };
    }, stickyRef); // <== context is scoped to sticky section

    return () => ctx.revert(); // 💥 kill all animations and ScrollTriggers in this context
  }, []);

  return (
    <section ref={stickyRef} className="ourMissionSection">
      <div ref={sliderRef} className="slider">
        <div ref={slidesContainerRef} className="slides">
          {[
            "/curryNaan2.jpg",
            "/curryNaan.jpg",
            "/curryNaan.jpg",
            "/curryNaan2.jpg",
            "/curryNaan2.jpg",
          ].map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) slidesRefs.current[i] = el;
              }}
              className="slide"
            >
              <div className="img">
                <Image alt={`Slide ${i + 1}`} className="mainImg" src={src} />
              </div>
              <div className="title">
                <h1>
                  Title Line1 <br /> Title Line 2
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
