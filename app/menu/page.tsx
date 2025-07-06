"use client";
import { Image } from "@heroui/image";

import Lenis from "@/components/lenis";

export default function MenuPage() {
  // Example menu data
  const menuSections = [
    {
      id: "Other",
      title: "Other",
      items: [
        {
          id: 1,
          image: "/samoosas.jpg",
          title: "Samoosas",
          hoverImage: "/samoosas2.jpg",
          description: "Beef, Sweetcorn/Onion & Cheese, Chicken, Potato",
          price: "R7",
        },
        {
          id: 2,
          image: "/springroll.png",
          title: "Spring Rolls",
          hoverImage: "/springroll2.png",
          description:
            "Build your own platter with a selection of your favorite savoury items, perfect for any occasion.",
          price: "R8",
        },
        {
          id: 3,
          image: "/bunny2.jpg",
          title: "Beef Bunny Chow",
          hoverImage: "/bunnychow.jpg",
          description:
            "Beef curry served in a hollowed-out loaf of fresh bread",
          price: "R85",
        },
      ],
    },
    {
      id: "stews",
      title: "Stews",
      items: [
        {
          id: 4,
          image: "/beefricetop.png",
          title: "Curry & Rice",
          hoverImage: "/beefrice.png",
          description: "Curry served in a hollowed-out loaf of fresh bread",
          price: "R85",
        },
        {
          id: 5,
          image: "/butterchicken.jpg",
          title: "Butter Chicken & Naan",
          description:
            "Creamy tomato-based curry with tender chicken pieces, served with Naan",
          price: "R90",
        },
        {
          id: 6,
          image: "/butterchickenrice.jpg",
          hoverImage: "/butterrice2.jpg",
          title: "Butter Chicken & Rice",
          description:
            "Creamy tomato-based curry with tender chicken pieces, served with rice",
          price: "R90",
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
          image: "/curryNaan2.jpg",
          title: "Curry & Naan",
          hoverImage: "/curryNaan.jpg",
          description: "Slow-cooked curry, served with Naan",
          price: "R85",
        },
        {
          id: 8,
          image: "/tacos.jpg",
          title: "Vegan Taco",
          description:
            "Soft taco shells filled with falafals, and savoury fillings and veggies.",
          price: "R75",
        },
        {
          id: 9,
          image: "/tacos3.jpg",
          title: "Taco 3x",
          description:
            "Your choice of meat served in taco shells, topped with savoury fillings and veggies",
          price: "R75",
        },
      ],
    },
    {
      id: "veggies",
      title: "Veggies",
      items: [
        {
          id: 10,
          image: "/wrap.jpg",
          title: "Wrap",
          description:
            "Your choice of meat wrapped in a soft roti with fresh salad and sauces",
          price: "R75",
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      items: [
        {
          id: 11,
          image: "/biryani3.png",
          title: "Breyani",
          hoverImage: "/biryani2.png",
          description:
            "Flavorful rice dish layered with chicken, aromatic spices, and herbs",
          price: "R85",
        },
        {
          id: 12,
          image: "/platters.jpg",
          title: "Custom Platters",
          description:
            "Build your own platter with a selection of your favorite savoury items, perfect for any occasion.",
          price: "R250 – R1200 depending on size and selection.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#555555] bg-[#1D1D1B] text-white overflow-hidden p-[8px]"
                >
                  {/* Image */}
                  {item.hoverImage ? (
                    <div className="relative w-full h-[350px] mb-2 group overflow-hidden">
                      {/* Default Image */}
                      <div className="absolute inset-0 transition-opacity duration-[1s] ease-in-out group-hover:opacity-0">
                        <Image
                          alt={item.title}
                          className="object-cover w-full h-full !rounded-none"
                          height={350}
                          src={item.image}
                          width="100%"
                        />
                      </div>

                      {/* Hover Image (conditionally shown if exists) */}
                      {item.hoverImage && (
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-[1s] ease-in-out group-hover:opacity-100">
                          <Image
                            alt={`${item.title} Hover`}
                            className="object-cover w-full h-full !rounded-none"
                            height={350}
                            src={item.hoverImage}
                            width="100%"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-[350px] mb-2">
                      <Image
                        isZoomed
                        alt={item.title}
                        className="object-cover w-full h-full !rounded-none"
                        height={350}
                        src={item.image}
                        width="100%"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col gap-[80px]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base text-white">{item.title}</h3>
                      <span className="text-base text-white">{item.price}</span>
                    </div>
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
