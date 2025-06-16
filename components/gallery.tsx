/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";
import React, { useRef, useEffect } from "react";

const OurValues = () => {
  const galleryContainerRef = useRef<HTMLDivElement | null>(null);
  const galleryItemsRef = useRef<HTMLDivElement[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const defaultItemFlex = "0 1 20px";
  const hoverItemFlex = "1 1 400px";

  const imageSources = [
    "/bunny2.jpg",
    "/wrap2.jpg",
    "/butterrice2.jpg",
    "/samoosas2.jpg",
    "/tacos.jpg",
    "/butterrice2.jpg",
    "/wrap.jpg",
    "/tacos2.jpg",
    "/bunnychow.jpg",
    "/butterchickenrice.jpg",
    "/tacos3.jpg",
    "/butterchicken.jpg",
  ];

  useEffect(() => {
    const galleryItems = galleryItemsRef.current;

    const updateGalleryItems = (hoveredIndex: number | null) => {
      galleryItems.forEach((item, index) => {
        if (item) {
          item.style.flex =
            hoveredIndex === index ? hoverItemFlex : defaultItemFlex;
        }
      });
    };

    updateGalleryItems(0); // First one hovered by default

    galleryItems.forEach((item, index) => {
      const listener = () => updateGalleryItems(index);

      item?.addEventListener("mouseenter", listener);
    });

    const container = galleryContainerRef.current;
    const indicator = indicatorRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (container && indicator) {
        const rect = container.getBoundingClientRect();

        indicator.style.left = `${e.clientX - rect.left}px`;
      }
    };

    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      galleryItems.forEach((item, index) => {
        const listener = () => updateGalleryItems(index);

        item?.removeEventListener("mouseenter", listener);
      });
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className=" relative px-2 md:px-32 py-6 md:py-6 bg-[#1D1D1B]" id="gallery">
      <div className="absolute whitespace-nowrap z-0 pointer-events-none animate-scrollText pl-[100vw] hidden md:flex items-center overflow-hidden">
        <h1 className="text-[20vw] md:text-[40vw] text-[#fef3c7]">
          GALLERY • GALLERY • GALLERY • GALLERY • GALLERY • GALLERY • GALLERY •
          GALLERY • GALLERY • GALLERY • GALLERY • GALLERY •
        </h1>
      </div>
      <div ref={galleryContainerRef} className="container relative">
        <div
          ref={indicatorRef}
          className="absolute top-0 h-[5px] w-[5px] bg-[#fef3c7] rounded-full transition-all duration-1000"
        />
        <div className="flex justify-around w-full overflow-hidden">
          {imageSources.map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) galleryItemsRef.current[index] = el;
              }}
              className="gallery-item flex justify-center items-center flex-[0_1_20px] mx-2 md:mx-[5px] bg-black overflow-hidden transition-[flex] duration-1000"
            >
              <img
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
