"use client";
import Image from "next/image";

import Lenis from "@/components/lenis";

export default function MenuPage() {
  // Example menu data
  const menuSections = [
    {
      id: "braai-ntaba",
      title: "Braai Ntaba / Goat Meat",
      items: [
        {
          id: 1,
          image: "/ourstory.jpg",
          title: "Braai Ntaba Platter",
          description: "Succulent goat meat grilled to perfection.",
          price: "R250",
        },
        {
          id: 2,
          image: "/menu/braai-ntaba-2.jpg",
          title: "Goat Meat Skewers",
          description: "Tender goat meat skewers with a spicy marinade.",
          price: "R180",
        },
      ],
    },
    {
      id: "stews",
      title: "Stews",
      items: [
        {
          id: 3,
          image: "/menu/stew-1.jpg",
          title: "Goat Meat Stew",
          description: "Rich and flavorful goat meat stew.",
          price: "R200",
        },
        {
          id: 4,
          image: "/menu/stew-2.jpg",
          title: "Beef Stew",
          description: "Hearty beef stew with vegetables.",
          price: "R220",
        },
      ],
    },
    {
      id: "chicken-mayo",
      title: "Chicken Mayo",
      subheading: "Chopped chicken with mayonnaise and spices",
      items: [
        {
          id: 5,
          image: "/menu/chicken-mayo-1.jpg",
          title: "Classic Chicken Mayo",
          description: "Creamy chicken mayo with a hint of spice.",
          price: "R150",
        },
        {
          id: 6,
          image: "/menu/chicken-mayo-2.jpg",
          title: "Spicy Chicken Mayo",
          description: "Spicy chicken mayo for those who love heat.",
          price: "R160",
        },
      ],
    },
    {
      id: "veggies",
      title: "Veggies",
      items: [
        {
          id: 7,
          image: "/menu/veggies-1.jpg",
          title: "Grilled Vegetables",
          description: "Fresh seasonal vegetables grilled to perfection.",
          price: "R120",
        },
        {
          id: 8,
          image: "/menu/veggies-2.jpg",
          title: "Vegetable Stir Fry",
          description: "Colorful stir-fried vegetables with a tangy sauce.",
          price: "R130",
        },
      ],
    },
    {
      id: "sides-sauces",
      title: "Sides & Sauces (250ml)",
      items: [
        {
          id: 9,
          image: "/menu/sauce-1.jpg",
          title: "Garlic Sauce",
          description: "Creamy garlic sauce for dipping or drizzling.",
          price: "R50",
        },
        {
          id: 10,
          image: "/menu/sauce-2.jpg",
          title: "Spicy Peri-Peri Sauce",
          description: "Fiery peri-peri sauce for an extra kick.",
          price: "R50",
        },
      ],
    },
  ];

  return (
    <Lenis>
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center gap-4 py-6 md:py-16 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/home.jpeg")',
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="inline-block max-w-xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Heading and Subheading */}
      <section className="px-2 md:px-32 py-6 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our Delicious Offerings
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          From succulent goat meat to flavorful stews and refreshing sides, our
          menu is crafted to delight your taste buds.
        </p>
      </section>

      {/* Menu Navigation Links */}
      <section className="px-2 md:px-32 py-6 md:py-16">
        <div className="flex flex-wrap justify-center gap-4">
          {menuSections.map((section) => (
            <a
              key={section.id}
              className="text-lg md:text-xl text-gray-700 hover:text-[#9E6137]"
              href={`#${section.id}`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <section
          key={section.id}
          className="px-2 md:px-32 py-6 md:py-16"
          id={section.id}
        >
          {/* Section Heading */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-px bg-[#9E6137]" />
            <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center">
              {section.title}
            </h2>
            <div className="flex-grow h-px bg-[#9E6137]" />
          </div>

          {/* Subheading (if applicable) */}
          {section.subheading && (
            <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
              {section.subheading}
            </p>
          )}

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-52 relative">
                  <Image
                    fill
                    alt={item.title}
                    className="object-cover"
                    src={item.image}
                  />
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-lg font-bold text-[#9E6137]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Lenis>
  );
}
