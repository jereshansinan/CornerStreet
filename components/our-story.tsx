/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";

const OurStory = () => {
  return (
    <section className="px-2 md:px-32 py-6 md:py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image
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
            Our Story
          </h2>{" "}
          {/* Heading */}
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
          Founded in May 2022, Ntaba ya Jozi-meaning &quot;Goat of
          Johannesburg&quot; in Lingala-was created by a Congolese family in
          Johannesburg with the goal of introducing braai goat meat (Ntaba), a
          traditional Congolese street food, first to South Africa, then to
          Africa, and ultimately, to the world.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Although goat meat and African food in general have sometimes been
          viewed with misconceptions, we&apos;re on a mission to change that. We
          aim to challenge outdated perceptions and show that African cuisine is
          not only delicious but also diverse, healthy, and worth celebrating.
          Through goat meat, which is leaner and often healthier than other
          meats like beef, we want to make African food an exciting and
          accessible option for all.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Rooted in the heart of Johannesburg, Ntaba ya Jozi is committed to
          making goat meat and African cuisine widely loved, beautifully
          presented, and appreciated by people from all walks of life.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
