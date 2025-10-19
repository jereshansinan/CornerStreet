/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { Image } from "@heroui/image";

import Lenis from "@/components/lenis";

export default function MenuPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Filters
  const filters = [
    { key: "all", label: "All", img: "/main/logo.png" },
    { key: "dogos", label: "Dogos/HotDogs", img: "/main/hotdog2.png" },
    { key: "burgers", label: "Burgers", img: "/main/burgerHero.png" },
    { key: "wings", label: "Wings", img: "/main/wing2.png" },
    {
      key: "chicken",
      label: "Chicken Tenders",
      img: "/main/chickentender.png",
    },
    { key: "sides", label: "Sides", img: "/main/fries.png" },
  ];

  // Example menu data with category keys
  const menuSections = [
    {
      id: "Menu",
      title: "menu",
      items: [
        {
          id: 1,
          category: "dogos",
          image: "https://i.imgur.com/OzpMtod.jpg",
          title: "Regular Hotdog",
          description:
            "INGREDIENTS: Onion,tomato, jalapeno, ketchup, mayo, mustard",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 2,
          category: "dogos",
          image: "https://i.imgur.com/UcOFpOr.jpg",
          title: "Bacon Grilled Hotdog",
          description:
            "INGREDIENTS: Oaxaca cheese, tomato, onion, jalapeño, ketchup, mayo, mustard",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 3,
          category: "dogos",
          image: "https://i.imgur.com/jcYF5Wb.jpg",
          title: "Dogo Argentino",
          description:
            "INGREDIENTS: Spicy Italian sausage, grilled onions, anahen pepper, mayo, mustard",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 4,
          category: "burgers",
          image: "/main/cheeseburger2.png",
          title: "Cheese burger",
          description:
            "INGREDIENTS: Cheese, onions, tomato, lettuce, burger patty",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 5,
          category: "burgers",
          image: "https://i.imgur.com/Ima9aGY.jpg",
          title: "Hawayana burger",
          description:
            "INGREDIENTS: Pineapple, ham, burger patty, cheese, bacon, lettuce, tomato, onions, mayo, mustard, ketchup",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 6,
          category: "burgers",
          image: "https://i.imgur.com/hkQqG7d.jpg",
          title: "The Champion Burger",
          description:
            "INGREDIENTS: Bacon, ham, burger patty, egg, cheese, lettuce, onion, mayo",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 7,
          category: "burgers",
          image: "/main/burger7.png",
          title: "The Corner Hamburger",
          description:
            "INGREDIENTS: Grilled mushroom, onion, bacon, grilled jalapeños, burger patty, special sauce",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 8,
          category: "wings",
          image: "https://i.imgur.com/iZUI2jH.jpg",
          title: "Wings",
          description:
            "Mild, Hot, Spicy Tamarindo, Mango Habanero, Scorpion Hot, BBQ, Lemon Pepper, Chammy, Fuego",
          price: "Hotdog Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 9,
          category: "chicken",
          image: "https://i.imgur.com/6LaLC3Q.jpg",
          title: "Chicken Tenders",
          description:
            "Mild, Hot, Spicy Tamarindo, Mango Habanero, Scorpion Hot, BBQ, Lemon Pepper, Chammy, Fuego",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 10,
          category: "sides",
          image: "/main/fries2.png",
          title: "French Fries",
          description:
            "Golden, crispy fries lightly seasoned with a blend of flavorful spices",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 11,
          category: "sides",
          image: "/main/loadedfries.png",
          title: "Loaded Fries",
          description: "Queso, Chorizo, Pico, Jalapeño, Crema",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 12,
          category: "sides",
          image: "/main/onionrings.png",
          title: "Onion Rings",
          description:
            "Crunchy, golden-battered onion rings with a satisfying bite",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 13,
          category: "sides",
          image: "/main/chickenrolls.png",
          title: "South west chicken rolls",
          description:
            "Savory rolls stuffed with seasoned chicken, cheese, and zesty Southwest spices",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 14,
          category: "sides",
          image: "/main/mozzarellasticks.png",
          title: "Mozzarella sticks",
          description:
            "Crispy on the outside, filled with gooey melted mozzarella cheese",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
      ],
    },
  ];

  return (
    <Lenis>
      {/* Hero Section */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 px-5 md:px-20 py-3 md:py-10 relative">
        <div className="inline-block text-center relative z-10">
          <h1 className="text-2xl md:text-6xl text-black leading-tight">
            Corner Street Burgers and Wings brings you a taste of comfort with
            every bite. From our juicy{" "}
            <span className="text-[#1976d2]">signature burgers</span> to our
            crispy <span className="text-[#1976d2]">golden wings</span>, every
            item is crafted with{" "}
            <span className="text-[#1976d2]">fresh ingredients</span> and
            seasoned to perfection. Our menu is designed to satisfy every
            craving with <span className="text-[#1976d2]">flavor</span>,{" "}
            <span className="text-[#1976d2]">quality</span>, and a touch of
            street-style flair.
          </h1>
        </div>
      </section>

      <div className="relative z-[5]">
        {/* Our Menu Title */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 px-4 md:px-20">
          <h1 className="text-3xl md:text-7xl text-red-600 text-left w-full md:w-auto md:mr-8">
            Our Menu
          </h1>
        </div>

        {/* Filter Bar */}
        <div className="w-full flex justify-center mb-8 px-4">
          {/* Scrollable container: fixed height, no wrap, horizontal scroll on mobile */}
          <div className="flex flex-nowrap items-center gap-4 px-4 py-2 rounded-full border-2 border-blue-500 bg-white overflow-x-auto overflow-y-hidden h-20">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter.key;
              const isAll = filter.key === "all";

              return (
                <button
                  key={filter.key}
                  type="button"
                  className={`flex-shrink-0 flex items-center ${
                    isAll ? "justify-center px-6" : "gap-2 px-4"
                  } py-2 rounded-full transition-colors duration-300 group focus:outline-none ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-transparent hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => setSelectedFilter(filter.key)}
                >
                  {/* Only show image for non-"all" filters */}
                  {!isAll && (
                    <Image
                      alt={filter.label}
                      className="rounded-lg object-cover transition-all duration-300 h-14 w-14 md:h-14 md:w-14"
                      height={56}
                      src={filter.img}
                      width={40}
                    />
                  )}

                  <span
                    className={`whitespace-nowrap text-sm md:text-lg 2xl:text-xl transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-black group-hover:text-white"
                    } ${isAll ? "w-full text-center" : ""}`}
                  >
                    {filter.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => {
          const filteredItems = section.items.filter(
            (item) =>
              selectedFilter === "all" || item.category === selectedFilter
          );

          return (
            <section
              key={section.id}
              className="px-2 md:px-16 py-[10px] relative z-10"
              id={section.id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
                {filteredItems.length === 0 ? (
                  <div className="col-span-full text-center py-8 text-gray-500">
                    No items found.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="border bg-white text-white overflow-hidden p-[8px] flex flex-col items-center"
                    >
                      {/* Image */}
                      <div className="w-full h-[400px] mb-2 rounded-none flex justify-center items-center group overflow-hidden">
                        <Image
                          alt={item.title}
                          className="object-cover !rounded-none transition-transform duration-500 ease-in-out group-hover:scale-105"
                          height={600}
                          src={item.image}
                          width="100%"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-[30px] w-full justify-center items-center">
                        <div className="flex justify-between items-center">
                          <h1 className="text-base md:text-2xl text-black">
                            {item.title}
                          </h1>
                        </div>
                        <p className="px-20 text-base md:text-xl text-[#000] font-sans text-center">
                          <span className="font-bold"></span>{" "}
                          {item.description.replace(/^INGREDIENTS:\s*/i, "")}
                        </p>
                        <h1 className="text-base md:text-xl text-black">
                          {item.price}
                        </h1>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          );
        })}
      </div>
    </Lenis>
  );
}

/* Menu Navigation Links - commented out for future use */

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

/* Section Heading - commented out for future use */

/*
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow h-px bg-[#9E6137]" />
          <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center text-white">
            {section.title}
          </h2>
          <div className="flex-grow h-px bg-[#9E6137]" />
        </div>
        */

/* Subheading (if applicable) - commented out for future use */

/*
        {section.subheading && (
          <p className="text-lg md:text-xl text-gray-400 text-center mb-8">
            {section.subheading}
          </p>
        )}
        */
