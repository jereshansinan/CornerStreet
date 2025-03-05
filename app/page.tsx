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
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/home.jpeg")',
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="inline-block max-w-xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Best food for <br /> your taste
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </div>
      </section>
      <OurStory />
      <OurMission />
      <OurVision />
      <OurValues />
      <div
        className="w-full h-64 md:h-[600px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/ourstory.jpg')",
        }}
      >
        {/* Optional: Add overlay or text */}
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
