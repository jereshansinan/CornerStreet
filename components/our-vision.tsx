/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";

const OurVision = () => {
  return (
    <section className="px-2 md:px-32 py-4 md:py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image
          isZoomed
          alt="Our Story Image"
          className="w-full object-cover"
          height={0}
          src="/ourstory.jpg"
          style={{ height: "100%" }} // Ensure image takes full height of parent container
          width={1000}
        />
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="mb-4">
          <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg" />
          <h2 className="text-3xl md:text-4xl font-bold mb-1 md:mb-4">
            Our Vision
          </h2>{" "}
          {/* Heading */}
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
          We envision a world where goat meat and African cuisine are widely
          accessible, appreciated, and celebrated for their richness, flavor,
          and cultural significance
        </p>
      </div>
    </section>
  );
};

export default OurVision;
