"use client";
import { Image } from "@heroui/image";
import { useEffect, useRef, useState } from "react";
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
          image: "/samoosas.jpg",
          title: "Special Order",
          description: "Minimum 2kg Required",
          price: "R900",
        },
        {
          id: 2,
          image: "/biryani.jpg",
          title: "Big Box",
          description: "700g",
          price: "R300",
        },
        {
          id: 3,
          image: "/bunny2.jpg",
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
          id: 4,
          image: "/bunny3.jpg",
          title: "Saucy Box",
          description: "Goat meat in a spicy or mild sauce",
          price: "R110",
        },
        {
          id: 5,
          image: "/bunnychow.jpg",
          title: "Mogodu",
          description: "Mabumu/Cow's Tripe",
          price: "R220",
        },
        {
          id: 6,
          image: "/butterchicken.jpg",
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
          id: 7,
          image: "/butterchickenrice.jpg",
          title: "Full Chicken",
          description: "",
          price: "R250",
        },
        {
          id: 8,
          image: "/butterrice2.jpg",
          title: "1/2 Chicken",
          description: "",
          price: "R130",
        },
        {
          id: 9,
          image: "/butterrice3.jpg",
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
          id: 10,
          image: "/curry3.jpg",
          title: "Fumbwa",
          description: "Wild Spinach",
          price: "R90",
        },
        {
          id: 11,
          image: "/curryNaan.jpg",
          title: "Spinach",
          description: "",
          price: "R80",
        },
        {
          id: 12,
          image: "/curryNaan2.jpg",
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
          id: 13,
          image: "/samoosas2.jpg",
          title: "Fried or Boiled Plantains",
          description: "",
          price: "R30",
        },
        {
          id: 14,
          image: "/tacos.jpg",
          title: "Pap",
          description: "Fufu",
          price: "R25",
        },
        {
          id: 15,
          image: "/tacos2.jpg",
          title: "Kwanga",
          description: "Cassava Bread",
          price: "R25",
        },
        {
          id: 16,
          image: "/tacos3.jpg",
          title: "Fried or Boiled Sweet Potatoes",
          description: "",
          price: "R25",
        },
        {
          id: 17,
          image: "/wrap.jpg",
          title: "Green Chilli",
          description: "For seafood delights",
          price: "R105",
        },
        {
          id: 18,
          image: "/wrap2.jpg",
          title: "Red Chilli",
          description: "For red meat dishes",
          price: "R105",
        },
      ],
    },
    {
      id: "sauces",
      title: "Sauces (250 ML)",
      items: [
        {
          id: 19,
          image: "/orange.jpg",
          title: "Orange Chilli",
          description: "For game/red meat, sandwiches etc.",
          price: "R105",
        },
        {
          id: 20,
          image: "/GreenSauce.jpg",
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
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="inline-block max-w-xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl text-white leading-tight">
            Our Menu
          </h1>
        </div>
      </section>

      <div className="relative bg-[#1D1D1B] z-[5] py-[250px]">
        {/* Scroll-aware Heading */}
        <div className="fixed top-[300px] left-0 w-full pointer-events-none z-5">
          <h1 className="text-[70px] md:text-[200px] text-white text-center select-none">
            Your Culinary Journey
          </h1>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <section
            key={section.id}
            className="px-2 md:px-16 py-[10px] relative z-10"
            id={section.id}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#555555] bg-[#1D1D1B] text-white overflow-hidden p-[8px]"
                >
                  {/* Image */}
                  <div className="w-full h-[350px] relative mb-[8px]">
                    <Image
                      isZoomed
                      alt={item.title}
                      className="object-cover !rounded-none w-full"
                      height={350}
                      radius="none"
                      src={item.image}
                      width="100%"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[80px]">
                    <h3 className="text-base text-white">{item.title}</h3>
                    <p className="text-base text-[#666666] font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Lenis>
  );
}

{
  /* Menu Navigation Links - commented out for future use */
}
{
  /* 
      <section className="px-2 md:px-32 py-6 md:py-6">
        <div className="flex flex-wrap justify-center gap-4">
          {menuSections.map((section) => (
            <a
              key={section.id}
              className="text-lg md:text-xl text-gray-400 hover:text-[#9E6137]"
              href={`#${section.id}`}
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>
      */
}

{
  /* Section Heading - commented out for future use */
}
{
  /*
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-px bg-[#9E6137]" />
          <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center text-white">
            {section.title}
          </h2>
          <div className="flex-grow h-px bg-[#9E6137]" />
        </div>
        */
}

{
  /* Subheading (if applicable) - commented out for future use */
}
{
  /*
        {section.subheading && (
          <p className="text-lg md:text-xl text-gray-400 text-center mb-8">
            {section.subheading}
          </p>
        )}
        */
}
