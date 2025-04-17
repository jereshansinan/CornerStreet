import FAQ from "@/components/faq";
import HowToOrder from "@/components/how-to-order";
import Lenis from "@/components/lenis";
import OurMission from "@/components/our-mission";
import OurStory from "@/components/our-story";
import OurValues from "@/components/our-values";
import OurVision from "@/components/our-vision";

export default function Home() {
  return (
    <Lenis>
      <section className="hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="overlay absolute inset-0 bg-black opacity-20" />
        <div className="content text-center relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ntaba Ya Jozi - A Taste <br /> of Home, Made with Heart
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Enjoy authentic African flavours, crafted with love and tradition in every bite.
          </p>
        </div>
      </section>

      <OurStory />
      <OurMission />
      <OurVision />
      <OurValues />
      <div
        className="w-full h-64 md:h-[600px] bg-scroll md:bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/taste2.jpg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Discover the Taste of Africa
          </h2>
        </div>
      </div>

      <HowToOrder />
      <FAQ />
    </Lenis>
  );
}
