/* eslint-disable prettier/prettier */
"use client";

import Link from "next/link";

const foods = [
  {
    name: "Hotdog",
    image: "/main/hotdog2.png",
    description: "Ingredients: Potatoes, peas, spices, crispy pastry",
  },
  {
    name: "Burger",
    image: "/main/burgerHero.png",
    description: "Ingredients: Crispy crackers, potatoes, yogurt, chutneys",
  },
  {
    name: "Wings",
    image: "/main/wing2.png",
    description: "Ingredients: Vegetables, chickpea flour, spices, fried",
  },
];

const CateringSection = () => (
  <section
    className="text-black min-h-[50vh] flex flex-col items-center px-6 md:px-24 py-16 gap-10"
    id="catering"
  >
    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-10 text-center">
      Our Signature Meals
    </h1>

    {/* Images Row */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mb-10">
      {foods.map((food, idx) => (
        <div
          key={food.name}
          className={`flex flex-col items-center w-full ${
            idx === 1 ? "md:scale-110" : "md:scale-95"
          }`}
        >
          <img
            src={food.image}
            alt={food.name}
            className={`rounded-2xl object-cover ${
              idx === 1
                ? "w-[260px] h-[260px] md:w-[340px] md:h-[360px]"
                : "w-[200px] h-[260px] md:w-[260px] md:h-[360px]"
            }`}
          />
          <h1 className="text-2xl md:text-3xl mt-6 text-center">
            {food.name}
          </h1>
          <p className="text-md md:text-lg text-center mt-2 text-gray-700">
            {food.description}
          </p>
        </div>
      ))}
    </div>

    {/* View Menu Button */}
    <Link
      href="/menu"
      className="px-8 py-4 bg-red-600 text-white rounded-full text-lg font-bold hover:bg-red-700 transition"
    >
      View Menu
    </Link>
  </section>
);

export default CateringSection;
