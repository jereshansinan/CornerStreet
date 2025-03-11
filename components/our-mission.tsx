/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { FaUtensils, FaDrumstickBite, FaGlobeAfrica } from "react-icons/fa";

const OurMission = () => {
  return (
    <section className="px-2 md:px-32 py-4 md:py-16 flex flex-col md:flex-row items-center gap-8" id="our-mission">
      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between order-1 md:order-0">
        <div className="mb-4">
          <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg" />{" "}
          {/* Thin brown line */}
          <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-4">
            Our Mission
          </h2>{" "}
          {/* Heading */}
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          At Ntaba ya Jozi, our mission is to:
        </p>

        {/* Mission Points */}
        <div className="space-y-6">
          {/* Mission Point 1 */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Circle and Icon */}
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#9E6137] rounded-full flex items-center justify-center aspect-square">
              <FaUtensils className="text-white text-sm md:text-xl" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed flex-grow">
              Transform perceptions of African cuisine by making it accessible,
              beautifully presented, and widely enjoyed.
            </p>
          </div>

          {/* Mission Point 2 */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Circle and Icon */}
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#9E6137] rounded-full flex items-center justify-center aspect-square">
              <FaDrumstickBite className="text-white text-sm md:text-xl" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed flex-grow">
              Celebrate African culture through the authentic flavors of goat
              meat and traditional recipes.
            </p>
          </div>

          {/* Mission Point 3 */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Circle and Icon */}
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#9E6137] rounded-full flex items-center justify-center aspect-square">
              <FaGlobeAfrica className="text-white text-sm md:text-xl" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed flex-grow">
              Create opportunities for innovation and engage young, passionate
              individuals in building a global platform for African cuisine.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 relative order-0 md:order-1">
        <Image
          isZoomed
          alt="Our Mission Image"
          className="w-full object-cover"
          height={0}
          src="/mission.jpg"
          style={{ height: "100%" }}
          width={1000}
        />
      </div>
    </section>
  );
};

export default OurMission;
