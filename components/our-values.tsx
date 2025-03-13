/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";

const OurValues = () => {
  return (
    <section className="px-2 md:px-32 py-6 md:py-16">
      {/* Section Heading */}
      <div className="mb-8 md:mb-16 text-left md:text-center">
        {/* Thin brown line */}
        <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg mx-0 md:mx-auto" />
        <h2 className="text-3xl md:text-5xl font-bold">Our Values</h2>{" "}
        {/* Larger heading */}
      </div>

      {/* Grid for Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Value 1 */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="mb-4 w-full">
            <Image
              alt="Value 1 Image"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              height={400}
              src="/home.jpeg"
              width={600}
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Innovation
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            We thrive on creativity and finding new ways to introduce African
            cuisine to the world.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="mb-4 w-full">
            <Image
              alt="Value 2 Image"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              height={400}
              src="/innovation.jpg"
              width={600}
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Youth Empowerment
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            We believe in engaging and inspiring young people to be part of
            shaping the future of food.
          </p>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="mb-4 w-full">
            <Image
              alt="Value 3 Image"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              height={400}
              src="/diversity.jpg"
              width={600}
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Diversity & Inclusion
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            We embrace people of all cultures and backgrounds, sharing our
            flavors with everyone.
          </p>
        </div>

        {/* Value 4 */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center">
          <div className="mb-4 w-full">
            <Image
              alt="Value 4 Image"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              height={400}
              src="/other.jpg"
              width={600}
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Quality & Authenticity
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            We are committed to delivering premium, authentic products that stay
            true to their roots while appealing to a global audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
