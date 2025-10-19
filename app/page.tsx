/* eslint-disable prettier/prettier */
"use client";

import FAQ from "@/components/faq";
import HowToOrder from "@/components/how-to-order";
import Lenis from "@/components/lenis";
import OurStory from "@/components/our-story";
import Gallery from "@/components/gallery";
import CateringSection from "@/components/CateringSection";
import ExperienceAnywhere from "@/components/ExperienceAnywhere";
import CategoryHeader from "@/components/CategoryHeader";

export default function Home() {
  return (
    <Lenis>
      {/* <Loader /> */}
      <section className="hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        {/* Content container */}
        <div className="content relative z-10 flex items-center justify-center w-full pt-0 md:pt-14">
          {/* SVG Heading (background) */}
          <img
            alt="Corner Street Heading"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] xl:max-w-[55%] 2xl:max-w-[65%] h-auto mx-auto"
            src="/main/CORNERSTREET.svg"
          />

          {/* Layered image on top of the SVG */}
          <div className="absolute flex items-center justify-center">
            <img
              alt="Center Graphic"
              className="w-64 sm:w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-[40rem] h-auto"
              src="/main/burgerHero.png"
            />
          </div>
        </div>
      </section>

      <CategoryHeader />
      <OurStory />
      <ExperienceAnywhere />
      <Gallery />
      <CateringSection />
      <HowToOrder />
      <FAQ />
    </Lenis>
  );
}
