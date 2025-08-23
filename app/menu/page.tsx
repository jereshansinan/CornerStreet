"use client";
import { Image } from "@heroui/image";

import Lenis from "@/components/lenis";

export default function MenuPage() {
  // Example menu data
  const menuSections = [
    {
      id: "burgers",
      title: "Burgers",
      items: [
        {
          id: 1,
          image: "/main/burgerHero.png",
          title: "Classic Beef Burger",
          hoverImage: "/samoosas2.jpg",
          description:
            "INGREDIENTS: Bread Bun, Beef Patty, Cheddar Cheese, Lettuce, Tomatoes, Onion Slice",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 2,
          image: "/main/burgerHero.png",
          title: "Bacon Cheeseburger",
          hoverImage: "/springroll2.png",
          description:
            "INGREDIENTS: Bread Bun, Bacon, Cheddar Cheese, Beef Patty, Lettuce, Tomatoes",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 3,
          image: "/main/burgerHero.png",
          title: "Chicken Burger",
          hoverImage: "/bunnychow.jpg",
          description:
            "INGREDIENTS: Bread Bun, Grilled Chicken Breast, Lettuce, Tomatoes, Mayo",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
      ],
    },
    {
      id: "wings",
      title: "Wings",
      items: [
        {
          id: 4,
          image: "/main/burgerHero.png",
          title: "Buffalo Wings",
          hoverImage: "/beefrice.png",
          description:
            "INGREDIENTS: Chicken Wings, Buffalo Sauce, Celery, Ranch Dip",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 5,
          image: "/main/burgerHero.png",
          title: "BBQ Wings",
          description: "INGREDIENTS: Chicken Wings, BBQ Sauce, Spring Onion",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 6,
          image: "/main/burgerHero.png",
          hoverImage: "/butterrice2.jpg",
          title: "Spicy Wings",
          description: "INGREDIENTS: Chicken Wings, Hot Sauce, Jalapenos",
          price: "Wings Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
      ],
    },
    {
      id: "hotdogs",
      title: "Hotdogs",
      subheading: "Tasty hotdogs with classic toppings",
      items: [
        {
          id: 7,
          image: "/main/burgerHero.png",
          title: "Classic Hotdog",
          hoverImage: "/curryNaan.jpg",
          description:
            "INGREDIENTS: Hotdog Bun, Beef Sausage, Mustard, Ketchup, Onion",
          price: "Hotdog Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 8,
          image: "/main/burgerHero.png",
          title: "Chili Cheese Hotdog",
          description:
            "INGREDIENTS: Hotdog Bun, Beef Sausage, Chili, Cheddar Cheese",
          price: "Hotdog Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 9,
          image: "/main/burgerHero.png",
          title: "Veggie Hotdog",
          description:
            "INGREDIENTS: Hotdog Bun, Veggie Sausage, Lettuce, Tomatoes, Onion",
          price: "Hotdog Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
      ],
    },
    {
      id: "veggies",
      title: "Veggie Burgers",
      items: [
        {
          id: 10,
          image: "/main/burgerHero.png",
          title: "Falafel Burger",
          description:
            "INGREDIENTS: Bread Bun, Falafel Patty, Lettuce, Tomatoes, Tzatziki Sauce",
          price: "Burger Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          id: 11,
          image: "/main/burgerHero.png",
          title: "Fries",
          hoverImage: "/biryani2.png",
          description: "INGREDIENTS: Potato Fries, Salt, Ketchup",
          price: "Side Only 3.99$ | Regular 5.99$ | Meal 10.99$",
        },
        {
          id: 12,
          image: "/main/burgerHero.png",
          title: "Onion Rings",
          description: "INGREDIENTS: Onion Rings, Batter, Salt",
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
          <div className="flex flex-wrap justify-center gap-4 px-2 py-2 rounded-full border-2 border-blue-500 bg-white">
            {[
              {
                label: "Starters",
                img: "/main/burgerHero.png",
              },
              {
                label: "Mains",
                img: "/main/burgerHero.png",
              },
              {
                label: "Sides",
                img: "/main/burgerHero.png",
              },
              {
                label: "Deserts",
                img: "/main/burgerHero.png",
              },
            ].map((filter) => (
              <div
                key={filter.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 bg-transparent hover:bg-blue-500 hover:text-white cursor-pointer group"
              >
                <Image
                  alt={filter.label}
                  className="rounded-lg object-cover transition-all duration-300"
                  height={40}
                  src={filter.img}
                  width={40}
                />
                <h1 className="text-base md:text-lg 2xl:text-xl text-black group-hover:text-white transition-colors duration-300">
                  {filter.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* Menu Sections */}
        {menuSections.map((section) => (
          <section
            key={section.id}
            className="px-2 md:px-16 py-[10px] relative z-10"
            id={section.id}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border bg-white text-white overflow-hidden p-[8px] flex flex-col items-center"
                >
                  {/* Image */}
                  {item.hoverImage ? (
                    <div className="relative h-[400px] mb-2 group overflow-hidden flex justify-center items-center w-full">
                      {/* Default Image */}
                      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                        <Image
                          alt={item.title}
                          className="object-cover !rounded-none transition-transform duration-500 ease-in-out group-hover:scale-105"
                          height={600}
                          src={item.image}
                          width="100%"
                        />
                      </div>
                      {/* Hover Image (fade in on hover) */}
                      <div className="absolute inset-0 flex justify-center items-center w-full h-full pointer-events-none transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                        <Image
                          alt={item.title + " hover"}
                          className="object-cover !rounded-none"
                          height={600}
                          src={item.hoverImage}
                          width="100%"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-[400px] mb-2 rounded-none flex justify-center items-center group overflow-hidden">
                      <Image
                        alt={item.title}
                        className="object-cover !rounded-none transition-transform duration-500 ease-in-out group-hover:scale-105"
                        height={600}
                        src={item.image}
                        width="100%"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col gap-[30px] w-full justify-center items-center">
                    <div className="flex justify-between items-center">
                      <h1 className="text-base md:text-2xl text-black">
                        {item.title}
                      </h1>
                    </div>
                    <p className="px-20 text-base md:text-xl text-[#000] font-sans text-center">
                      <span className="font-bold">INGREDIENTS:</span>{" "}
                      {item.description.replace(/^INGREDIENTS:\s*/i, "")}
                    </p>
                    <h1 className="text-base md:text-xl text-black">
                      {item.price}
                    </h1>
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
