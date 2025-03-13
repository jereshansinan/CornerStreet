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
          image: "/2kg.jpg",
          title: "Special Order",
          description: "Minimum 2kg Required",
          price: "R900",
        },
        {
          id: 2,
          image: "/bigbox.jpg",
          title: "Big Box",
          description: "700g",
          price: "R300",
        },
        {
          id: 3,
          image: "/1personbox.jpg",
          title: "1 person Box",
          description: "350g + free sweet potatoes",
          price: "R150",
        },
      ],
    },
    {
      id: "stews",
      title: "Stews",
      items: [
        {
          id: 3,
          image: "/saucybox.jpg",
          title: "Saucy Box",
          description: "Goat meat in a spicy or mild sauce",
          price: "R110",
        },
        {
          id: 4,
          image: "/mogodu.jpg",
          title: "Mogodu",
          description: "Mabumu/Cow's Tripe",
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
          image: "/menu/chicken-mayo-2.jpg",
          title: "Full Chicken",
          description: "",
          price: "R250",
        },
        {
          id: 6,
          image: "/halfchicken.jpg",
          title: "1/2 Chicken",
          description: "",
          price: "R130",
        },
      ],
    },
    {
      id: "veggies",
      title: "Veggies",
      items: [
        {
          id: 7,
          image: "/fumbwa.jpg",
          title: "Fumbwa",
          description: "Wild Spinach",
          price: "R90",
        },
        {
          id: 8,
          image: "/menu/veggies-2.jpg",
          title: "Spinach",
          description: "",
          price: "R80",
        },
        {
          id: 9,
          image: "/pondu.jpg",
          title: "Pondu",
          description: "Cassava Leaves",
          price: "R80",
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          id: 9,
          image: "/plantains.jpg",
          title: "Fried or Boiled Plantains",
          description: "",
          price: "R30",
        },
        {
          id: 10,
          image: "/fufu.jpg",
          title: "Pap",
          description: "Fufu",
          price: "R25",
        },
        {
          id: 11,
          image: "/menu/sauce-2.jpg",
          title: "Kwanga",
          description: "Cassava Bread",
          price: "R25",
        },
        {
          id: 12,
          image: "/menu/sauce-2.jpg",
          title: "Fried or Boiled Sweet Potatoes",
          description: "",
          price: "R25",
        },
      ],
    },
    {
      id: "sauces",
      title: "Sauces (250 ML)",
      items: [
        {
          id: 13,
          image: "/green.jpg",
          title: "Green Chilli",
          description: "For seafood delights",
          price: "R105",
        },
        {
          id: 14,
          image: "/red.jpg",
          title: "Red Chilli",
          description: "For red meat dishes",
          price: "R105",
        },
        {
          id: 15,
          image: "/orange.jpg",
          title: "Orange Chilli",
          description: "For game/red meat, sandwiches etc.",
          price: "R105",
        },
        {
          id: 16,
          image: "/menu/sauce-2.jpg",
          title: "Green Sauces",
          description: "For any meat, mild",
          price: "R110",
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
          backgroundImage: 'url("/home.jpg")',
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
      <section className="px-2 md:px-32 py-6 md:py-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our Delicious Offerings
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          From succulent goat meat to flavorful stews and refreshing sides, our
          menu is crafted to delight your taste buds.
        </p>
      </section>

      {/* Menu Navigation Links */}
      <section className="px-2 md:px-32 py-6 md:py-6">
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
                <div className="w-full h-72 relative">
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
