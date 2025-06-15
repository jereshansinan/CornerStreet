import FAQ from "@/components/faq";
import HowToOrder from "@/components/how-to-order";
import Lenis from "@/components/lenis";
import OurMission from "@/components/image-slider";
import OurStory from "@/components/our-story";
import OurValues from "@/components/gallery";
import CateringSection from "@/components/CateringSection";
import ExperienceAnywhere from "@/components/ExperienceAnywhere";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <Lenis>
      <Loader />
      <section className="hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="overlay absolute inset-0 bg-black opacity-20" />
        <div className="content text-center relative z-10">
          <h1 className="mt-9 text-4xl md:text-[9rem] text-white leading-[1] [word-spacing:-1rem] md:[word-spacing:-2rem]">
            TRADITIONAL <br /> TASTE, MADE <br />
            WITH LOVE.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white px-2">
            Delighting your senses with soulful cooking, made from the heart
            with the finest ingredients.
          </p>
        </div>
      </section>

      <OurStory />
      <ExperienceAnywhere />
      <OurValues />
      <CateringSection />
      <HowToOrder />
      <FAQ />
    </Lenis>
  );
}
