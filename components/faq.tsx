/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      id: "1",
      question: "What is goat meat, and why should I try it?",
      answer:
        "Goat meat is a lean, nutritious, and flavorful meat that's a healthier alternative to beef and chicken. It's a specialty of ours and a beloved dish in Congolese cuisine. We're excited to share its unique, bold taste with the world.",
    },
    {
      id: "2",
      question: "Is goat meat healthier than other meats?",
      answer:
        "Yes! Goat meat is lower in fat and cholesterol than beef, making it a great option for those seeking a healthier diet. It's also packed with essential protein and iron.",
    },
    {
      id: "3",
      question: "Do you offer other dishes besides goat meat?",
      answer:
        "While we specialize in goat meat, we also offer a selection of other authentic African dishes, showcasing the rich and diverse flavors of the continent",
    },
    {
      id: "4",
      question: "How can I order?",
      answer:
        "You can place your order through call, WhatsApp, or by messaging us via our social media DM fordelivery or pickup. We'll make sure your delicious meals are ready for you to enjoy!",
    },
    {
      id: "5",
      question: "What makes Ntaba ya Jozi different?",
      answer:
        "We specialize in offering the highest-quality goat meat dishes while also featuring other African delicacies. Our focus is on changing perceptions of African cuisine by presenting it beautifully and making it accessible to all.",
    },
    {
      id: "6",
      question: "Do you have a seat-in restaurant?",
      answer:
        "Currently, we offer delivery and pickup services, but we are planning to introduce a seat-in restaurant and expand to different locations soon.",
    },
  ];

  return (
    <section className="px-2 md:px-32 py-6 md:py-16" id="faq">
      {/* Section Heading */}
      <div className="text-center mb-8 md:mb-16">
        <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg mx-auto" />{" "}
        {/* Thin brown line */}
        <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>{" "}
        {/* Heading */}
      </div>

      {/* Accordion */}
      <div className="mx-auto">
        <Accordion motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }} variant="splitted">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.question}
              title={
                <span className="text-xl md:text-3xl">
                  {item.question}
                </span>
              }
            >
              <p className="text-lg md:text-xl text-gray-600">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;